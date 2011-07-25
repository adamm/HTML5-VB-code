#!/usr/bin/perl
#
# Original websocket clock code by Yuki Kimoto
# http://d.hatena.ne.jp/yukikimoto/20100415/1271340273

use strict;
use warnings;
use Data::Dumper;

use Mojolicious::Lite;
use Mojo::IOLoop;

my $clients = {};
my $loop = Mojo::IOLoop->singleton;

websocket '/time' => sub {
    my $self = shift;

    # Client id
    my $cid = "$self";

    # Controller
    my $controller = $self;

    $controller->send_message( "Hello, I am a Time WebSocket Server. The server time will begin streaming shortly; and any incoming messages will be echoed back in upper-case." );

    # Subroutine for sending date and time
    my $send_datetime;
    $send_datetime = sub {

        # Send date and time
        my $datetime = localtime();
        $controller->send_message( $datetime );

        # Timer
        $loop->timer(1, $send_datetime);
    };

    # Send
    $send_datetime->();

    # Receive message;
    $self->on_message(sub {
        my ($self, $message) = @_;

        $controller->send_message( uc( $message ) );

        # Nothing to do; ignore incoming messages.
    });

    # on_finish
    $self->on_finish(sub {
        # Remove client
        delete $clients->{$cid};
    });
};

websocket '/relay' => sub {
    my $self = shift;

    # Client id
    my $cid = "$self";

    $clients->{$cid}->{'messages'} = [];

    # Controller
    my $controller = $self;

    # Subroutine for sending date and time
    my $relay_messages;
    $relay_messages = sub {

        if ( $#{ $clients->{$cid}->{'messages'} } >= 0 ) {
            # Send shared message
            my $message = shift( @{ $clients->{$cid}->{'messages'} } );
            $controller->send_message($message);
        }

        # Timer
        $loop->timer(0.1, $relay_messages) if $clients->{$cid};
    };
    $relay_messages->();

    # Receive message;
    $self->on_message(sub {
        my ($self, $message) = @_;

        foreach ( keys %{ $clients } ) {
            push( @{ $clients->{ $_ }->{ 'messages' } }, $message );
        }
    });

    # on_finish
    $self->on_finish(sub {
        # Remove client
        delete $clients->{$cid};
    });
};

app->start;

1;

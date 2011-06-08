#!/usr/bin/perl

use Data::Dumper;
use CGI;

my $cgi = new CGI;

print "Content-type: text/plain\n\n";
print Dumper( $cgi );

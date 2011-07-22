#!/usr/bin/perl

my $time = localtime;

print "Content-type: text/html\n\n";
print <<EOF;
<!doctype html>
<html>
  <head>
    <title>Server Clock</title>
    <script type='text/javascript' src='network-detector.js'></script>
    <script type='text/javascript'>
      window.addEventListener('netoffline', function() {
        location.reload();
      }, false);
    </script>
  </head>
  <body>
    $time
  </body>
</html>
EOF

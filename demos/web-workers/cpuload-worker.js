/* Import a local copy of CPU Stress Tester program produced by Yuen Kit Mun
 * from Fossil Toys - http://www.fossiltoys.com (used here with permission) */
importScripts( 'cpuload.js' );

/* The cpuload report_back() function makes direct calls to the DOM to
 * report calculation activity to the web browser. Since this is not
 * compatible with Web Workers, we must override it and use our own version
 * of this method to post a message back to the parent. The parent thread
 * will recieve the event message and display the calculation. */
report_back = function( inelement, intext ) {
  var output = {};

  output.field = inelement;
  output.value = intext;

  self.postMessage( output );
};

/* CPU Load uses the function setdutycycle() to configure its intensity
 * level and begin calculations. Since the user triggers the configuration
 * and startup, and the user event launches on the parent, the parent must
 * instruct the worker to run the function. */
function onMessage( event ) {
  var input = event.data;

  setdutycycle( input.setLoad );
}

/* Activate the message event listener on the worker thread */
self.addEventListener( 'message', onMessage, false );

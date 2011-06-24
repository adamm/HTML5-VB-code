/* Import a local copy of CPU Stress Tester program produced by Yuen Kit Mun
 * from Fossil Toys - http://www.fossiltoys.com (used here with permission) */
importScripts( 'cpuload.js' );

/* The cpuload report_back() function makes direct calls to the DOM to
 * report calculation activity to the web browser. Since this is not
 * compatible with Web Workers, we must override it and use our own version
 * of this method to post a message back to the parent. The parent thread
 * will recieve the event message and display the calculation. */
report_back = function( inelement, intext ) {

};


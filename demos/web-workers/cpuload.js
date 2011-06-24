/*
 * CPU Load Test Duty Cycle
 *
 * Copyright(c) 2007 Yuen Kit Mun
 * Copyright(c) 2011 Adam McDaniel
 *
 * This program comes with absolutely no warranty.
 * Original URL is http://www.fossiltoys.com/cpuload.html
 */

var meg1;
var megload;
var bmcount = 0;
var loadset = new Array();
var period = 100;
var periodnoload = 2000;
var periodload = 100;
function setdutycycle(percent) {
  period = ( percent > 0 ? periodload : periodnoload );
  loadset[1] = (percent >= 25);
  loadset[2] = (percent >= 50);
  loadset[3] = (percent >= 75);
  loadset[4] = (percent >= 100);
}
//--------------------------------------------
function bmark1(loopseconds) {
  bmcount++;
  sec1 = 0;
  sec2 = 0;
  accumulate = 0;
  dummy = 0;
  dummy2 = 0;
  dummy3 = ""
    elapsed = 0;
  sec1 = seconds();
  inc = 1.123456789; inc2 = 1;
  jloop = 5;
  iloop = 5;
  megdummy = "";
  megdummy2 = "";
  megdummy3 = ""
    dummyint = 0;
  while (elapsed <= loopseconds) {
    for (j=1; j<=jloop; j++){
      // dummyint = parseInt (dummy * 10);
      for (i=1; i<=iloop; i++){
        accumulate = accumulate + inc ;
        if (accumulate < i) {
          dummy = dummy + Math.random();
        }
        megdummy = megload + dummy;
        megdummy3 = megload + accumulate;
        megdummy2 = "";
      }
      megdummy2 = megdummy;
      megdummy3 = ""
        megdummy = "";
    }
    sec2 = seconds();
    elapsed = sec2 - sec1;
    megdummy = 0;
    dummy = 0;
    dummy2 = 0;
    dummyint = 0;
    if (elapsed < 0) {
      elapsed = loopseconds;
    }
  }
  dummy3 = megdummy;
  //var norm = parseInt (accumulate / elapsed);
  var norm = accumulate / elapsed;
  // normfinal = norm / 100;
  return (norm);
}
//--------------------------------------------
function bmark2(loopseconds) {
  bmcount++;
  sec1 = 0;
  sec2 = 0;
  accumulate = 0;
  dummy = 0;
  dummy2 = 0;
  dummy3 = ""
    elapsed = 0;
  sec1 = seconds();
  inc = 1.123456789; inc2 = 1;
  jloop = 5;
  iloop = 5;
  megdummy = "";
  megdummy2 = "";
  megdummy3 = ""
    dummyint = 0;
  while (elapsed <= loopseconds) {
    for (j=1; j<=jloop; j++){
      // dummyint = parseInt (dummy * 10);
      for (i=1; i<=iloop; i++){
        accumulate = accumulate + inc ;
        if (accumulate < i) {
          dummy = dummy + Math.random();
        }
        megdummy = megload + dummy;
        megdummy3 = megload + accumulate;
        megdummy2 = "";
      }
      megdummy2 = megdummy;
      megdummy3 = ""
        megdummy = "";
    }
    sec2 = seconds();
    elapsed = sec2 - sec1;
    megdummy = 0;
    dummy = 0;
    dummy2 = 0;
    dummyint = 0;
    if (elapsed < 0) {
      elapsed = loopseconds;
    }
  }
  dummy3 = megdummy;
  //var norm = parseInt (accumulate / elapsed);
  var norm = accumulate / elapsed;
  // normfinal = norm / 100;
  return (norm);
}
//--------------------------------------------
function bmark3(loopseconds) {
  bmcount++;
  sec1 = 0;
  sec2 = 0;
  accumulate = 0;
  dummy = 0;
  dummy2 = 0;
  dummy3 = ""
    elapsed = 0;
  sec1 = seconds();
  inc = 1.123456789; inc2 = 1;
  jloop = 5;
  iloop = 5;
  megdummy = "";
  megdummy2 = "";
  megdummy3 = ""
    dummyint = 0;
  while (elapsed <= loopseconds) {
    for (j=1; j<=jloop; j++){
      // dummyint = parseInt (dummy * 10);
      for (i=1; i<=iloop; i++){
        accumulate = accumulate + inc ;
        if (accumulate < i) {
          dummy = dummy + Math.random();
        }
        megdummy = megload + dummy;
        megdummy3 = megload + accumulate;
        megdummy2 = "";
      }
      megdummy2 = megdummy;
      megdummy3 = ""
        megdummy = "";
    }
    sec2 = seconds();
    elapsed = sec2 - sec1;
    megdummy = 0;
    dummy = 0;
    dummy2 = 0;
    dummyint = 0;
    if (elapsed < 0) {
      elapsed = loopseconds;
    }
  }
  dummy3 = megdummy;
  //var norm = parseInt (accumulate / elapsed);
  var norm = accumulate / elapsed;
  // normfinal = norm / 100;
  return (norm);
}
//--------------------------------------------
function bmark4(loopseconds) {
  bmcount++;
  sec1 = 0;
  sec2 = 0;
  accumulate = 0;
  dummy = 0;
  dummy2 = 0;
  dummy3 = ""
    elapsed = 0;
  sec1 = seconds();
  inc = 1.123456789; inc2 = 1;
  jloop = 5;
  iloop = 5;
  megdummy = "";
  megdummy2 = "";
  megdummy3 = ""
    dummyint = 0;
  while (elapsed <= loopseconds) {
    for (j=1; j<=jloop; j++){
      // dummyint = parseInt (dummy * 10);
      for (i=1; i<=iloop; i++){
        accumulate = accumulate + inc ;
        if (accumulate < i) {
          dummy = dummy + Math.random();
        }
        megdummy = megload + dummy;
        megdummy3 = megload + accumulate;
        megdummy2 = "";
      }
      megdummy2 = megdummy;
      megdummy3 = ""
        megdummy = "";
    }
    sec2 = seconds();
    elapsed = sec2 - sec1;
    megdummy = 0;
    dummy = 0;
    dummy2 = 0;
    dummyint = 0;
    if (elapsed < 0) {
      elapsed = loopseconds;
    }
  }
  dummy3 = megdummy;
  // megload = 0;
  //var norm = parseInt (accumulate / elapsed);
  var norm = accumulate / elapsed;
  // normfinal = norm / 100;
  return (norm);
}
//--------------------------------------------
function report_back(inelement, intext) {
  var elem_out = document.getElementById(inelement);
  elem_out.innerHTML = intext;
}
//--------------------------------------------
function seconds() {
  var nowd = new Date();
  year = nowd.getFullYear();
  month = nowd.getMonth() + 1;
  day = nowd.getDate();
  hour = nowd.getHours();
  min = nowd.getMinutes();
  sec = nowd.getSeconds();
  msec = nowd.getMilliseconds() / 1000;
  totalseconds = sec + (60 * min) + (3600 * hour) + (day * 24 * 3600) + (msec);
  return (totalseconds);
}
//--------------------------------------------
function pad10(num) {
  outnum = "" + num;
  if (num < 10) {
    outnum = "0" + num;
  }
  return (outnum);
}
//--------------------------------------------
function t1() {
  var speed = 0;

  setTimeout (t2, period);
  if (loadset[1] == 1)
    speed = bmark1(period / 1000);

  report_back("d1", speed);
}
//--------------------------------------------
function t2() {
  var speed = 0;

  setTimeout (t3, period);
  if (loadset[2] == 1)
    speed = bmark2(period / 1000);

  report_back("d2", speed);
}
//--------------------------------------------
function t3() {
  var speed = 0;

  setTimeout (t4, period);
  if (loadset[3] == 1)
    speed = bmark3(period / 1000);

  report_back("d3", speed);
}
//--------------------------------------------
function t4() {
  var speed = 0;

  setTimeout (t1, period);
  if (loadset[4] == 1)
    speed = bmark4(period / 1000);

  report_back("d4", speed);
}
//--------------------------------------------
function init() {
  meg1 = " ";
  while (meg1.length < 512 ) {
    meg1 = meg1 + "y" + Math.random();
  }
  meg1 = meg1.substr(0, 512);
  setdutycycle(0);
  //document.form1.dutycycle1[0].checked = true;
  megload = meg1;
  // megload = megload + megload;
  setTimeout (t1, period);
}

init();


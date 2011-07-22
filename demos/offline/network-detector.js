function testXHR(callback) {
  var xhr = new XMLHttpRequest();
  var noResponseTimer = setTimeout(function() {
    xhr.abort();
    callback(false);
  }, 5000);

  xhr.onreadystatechange = function(event) {
    if (xhr.readyState != 4)
      return;

    clearTimeout(noResponseTimer);
    if (xhr.status == 200)
      callback(true);
    else
      callback(false);
  }
  xhr.open('GET', '/' + '?' + new Date().getTime());
  try {
    xhr.send();
  }
  catch(e) {
    callback(false);
  }
}

function fireNetworkEvent(state) {
  var event = document.createEvent('Event');
  event.initEvent(state ? 'netonline' : 'netoffline', true, true);
  window.dispatchEvent(event);
  console.log('Firing event', event.type);
}

var networkTimer;
function testNetwork() {
  testXHR(fireNetworkEvent);
  networkTimer = setInterval(function(){
    testXHR(fireNetworkEvent);
  }, 30000);
}

function lostNetwork() {
  clearInterval(networkTimer);
}

window.addEventListener('online', testNetwork, false);
window.addEventListener('offline', lostNetwork, false);

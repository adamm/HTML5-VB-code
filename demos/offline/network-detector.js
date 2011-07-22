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
}

function testNetwork() {
  testXHR(fireNetworkEvent);
}

function lostNetwork() {
}

window.addEventListener('online', testNetwork, false);
window.addEventListener('offline', lostNetwork, false);

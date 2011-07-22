function testXHR(callback) {
  var xhr = new XMLHttpRequest();
  var noResponseTimer = setTimeout(function() {
    xhr.abort();
  }, 5000);

  xhr.onreadystatechange = function(event) {
    if (xhr.readyState != 4)
      return;

    clearTimeout(noResponseTimer);
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

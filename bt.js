window.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('go');
  var serviceInput = document.getElementById('service');

  button.addEventListener('click', function() {
    var service = serviceInput.value;

    navigator.bluetooth.requestDevice({ filters: [{ services: [service] }] })
    .then(device => console.log(device))
    .catch(error => console.log('E:', error));
  });
});

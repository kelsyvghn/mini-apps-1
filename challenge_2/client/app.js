
window.addEventListener("load", function () {
  function sendData() {

  // Access the form element...
  let form = document.getElementById("form");

  // const form = document.getElementById("form")
  // ...and take over its submit event.
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
}});
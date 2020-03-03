/*
GOALS:

x- should register when  square is clicked
- should know which square is clicked
- once clicked, it should change the input value to X, O, or empty, depending on current value of square (toggle through)
-
*/

document.getElementsByClassName("tableData").addEventListener("click", function (id) {
console.log('clicked!');
toggle(id);
});



function toggle(id) {
  var x = document.getElementById(id);
  if (x.innerHTML = '') {
    x.innerHTML = "X"
  } else if (x.innerHTML === "X") {
    x.innerHTML = "O";
  } else {
    x.innerHTML = "";
  }
}
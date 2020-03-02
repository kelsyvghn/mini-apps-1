const plays = ['X', 'O', ' ']; //possible way to alternate between X, O, and empty (to undo play)
/* GOALS:
x- should register when  square is clicked
- should know which square is clicked
- once clicked, it should change the input value to X, O, or empty, depending on current value of square (toggle through)
- 
*/

const crossWhenClicked = function(value, count) {
  for (var i = 0; i < value.length; i++ ) {
    let innerValue = '<td>' + plays[count] + '</td>';
    value[i] =

    console.log(plays[i]);
  }
}

document.getElementById("table").addEventListener("click", function(){
  count++
  crossWhenCLicked(square, count);

  console.log('clicked!');
});
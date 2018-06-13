function getFirstSelector(selector){
  var firstone = document.querySelector(selector)
  return firstone
}
function deepestChild(){
var deep = document.querySelectorAll('#grand-node div')
return deep[3]
}
function nestedTarget(){
  var nested = document.querySelector('.target')
  return nested
}
// function increaseRankBy(n){
//   var count = document.querySelectorAll('.ranked-list li')
//   for (var i = count.length - 1; 0 <= i; i--){
//     var x = parseInt(count[i].innerText)
//     count[i].innerText = n + x
//   }
//   // return count
// }



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
function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list')

  for (var i = 0, l = rankedLists.length; i < l; i++) {
    var children = rankedLists[i].children

    for (var j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

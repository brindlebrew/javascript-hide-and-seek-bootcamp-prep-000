function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector)
  return firstSelector
}

function nestedTarget() {
  const  nested = document.querySelector('#nested .target')
  return nested
}

function increaseRankBy(n) {
  const increase = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = increase.length; i < l; i++) {
    increase[i].innerHTML = parseInt(i, 10) + n.toString()
  }
}

function deepestChild() {
  const grandNode = document.querySelector('#grand-node')

  //for (let i = 0, l = grandNode.length; i < 1; i++) {
      
  //}
  return grandNode
}


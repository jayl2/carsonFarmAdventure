function animalClick(evtLis, anipic, aniInput) {
  evtLis.addEventListener('click', handleClick)
  function handleClick() {
    ;(anipic.style.display = 'block') && (aniInput.style.display = 'block')
  }
  goat.addEventListener('click', function () {
    ;(anipic.style.display = 'none') && (aniInupt.style.display = 'none')
  })
}

amimalClick(g, goat, goatInp)

// function goats() {
//   g.addEventListener('click', handleClick)
//   function handleClick() {
//     ;(goat.style.display = 'block') && (goatInp.style.display = 'block')
//   }
//   goat.addEventListener('click', function () {
//     ;(goat.style.display = 'none') && (goatInp.style.display = 'none')
//   })
// }

// goats()

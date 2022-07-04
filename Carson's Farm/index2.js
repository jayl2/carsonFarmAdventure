//QuerySelectors
const dirBtn = document.querySelector('.directions')
const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')
const ant = document.querySelector('#ant')
const bear = document.querySelector('#bear')
const cat = document.querySelector('#cat')

//Sets directions div to display:none
document.querySelector('#gotit').addEventListener('click', function () {
  dirBtn.style.display = 'none'
})

function ants() {
  a.addEventListener('click', handleClick)
  function handleClick() {
    ant.style.display = 'block'
  }

  ant.addEventListener('click', function () {
    ant.style.display = 'none'
  })
}
ants()

//enable/disable bear image
function bears() {
  b.addEventListener('click', function () {
    bear.style.display = 'block'
  })
  bear.addEventListener('click', function () {
    bear.style.display = 'none'
  })
}

bears()

function cats() {
  c.addEventListener('click', function () {
    cat.style.display = 'block'
  })
  document.querySelector('#cat').addEventListener('click', function () {
    this.style.display = 'none'
  })
}

cats()

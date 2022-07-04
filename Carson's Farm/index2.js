let score = 0
//QuerySelectors-------------------

//Button Targets//
const dirBtn = document.querySelector('.directions')
const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')
const d = document.querySelector('#d')
const e = document.querySelector('#e')
const f = document.querySelector('#f')
const g = document.querySelector('#g')
const h = document.querySelector('#h')
const i = document.querySelector('#i')
const j = document.querySelector('#j')
const k = document.querySelector('#k')
const l = document.querySelector('#l')
const m = document.querySelector('#m')
const n = document.querySelector('#n')
const o = document.querySelector('#o')
const p = document.querySelector('#p')
const q = document.querySelector('#q')
const r = document.querySelector('#r')
const s = document.querySelector('#s')
const t = document.querySelector('#t')
const u = document.querySelector('#u')
const v = document.querySelector('#v')
const w = document.querySelector('#w')
const x = document.querySelector('#x')
const y = document.querySelector('#y')
const z = document.querySelector('#z')
//-------------------------IMG targets--------------
const ant = document.querySelector('#ant')
const antInp = document.querySelector('#a-text')
const bear = document.querySelector('#bear')
const bearInp = document.querySelector('#b-text')
const cat = document.querySelector('#cat')
const catInp = document.querySelector('#c-text')
const dog = document.querySelector('#dog')
const dogInp = document.querySelector('#d-text')
const eel = document.querySelector('#eel')
const eelInp = document.querySelector('#e-text')

//Sets directions div to display:none
document.querySelector('#gotit').addEventListener('click', function () {
  dirBtn.style.display = 'none'
})

function ants() {
  a.addEventListener('click', handleClick)
  function handleClick() {
    ;(ant.style.display = 'block') && (antInp.style.display = 'block')
  }
  ant.addEventListener('click', function () {
    ;(ant.style.display = 'none') && (antInp.style.display = 'none')
  })
}

ants()

//enable/disable bear image
function bears() {
  b.addEventListener('click', function () {
    ;(bear.style.display = 'block') && (bearInp.style.display = 'block')
  })
  bear.addEventListener('click', function () {
    ;(bear.style.display = 'none') && (bearInp.style.display = 'none')
  })
}

bears()

function cats() {
  c.addEventListener('click', function () {
    ;(cat.style.display = 'block') && (catInp.style.display = 'block')
  })
  document.querySelector('#cat').addEventListener('click', function () {
    ;(this.style.display = 'none') && (catInp.style.display = 'none')
  })
}

cats()

const dogs = () => {
  d.addEventListener('click', handleClick)
  function handleClick() {
    ;(dog.style.display = 'block') && (dogInp.style.display = 'block')
  }
  dog.addEventListener('click', function () {
    ;(dog.style.display = 'none') && (dogInp.style.display = 'none')
  })
}
dogs()

//-----------------------KeyPress Listeners------------------------------
// answer correct to hide ant

document.addEventListener('keydown', function (e) {
  console.log(e)
  if (e.key === 'Enter') {
    antInp.value.toLowerCase() === 'ant'
    console.log(antInp.value)
    if (antInp.value === 'ant') {
      ;(ant.style.display = 'none') && (antInp.style.display = 'none')
    }
  }
})
// answer correct to hide bear
document.addEventListener('keydown', function (e) {
  console.log(e)
  if (e.key === 'Enter') {
    bearInp.value === 'bear'
    console.log(bearInp.value)
    if (bearInp.value === 'bear') {
      ;(bear.style.display = 'none') && (bearInp.style.display = 'none')
    }
  }
})

// answer correct to hide cat
document.addEventListener('keydown', function (e) {
  console.log(e)
  if (e.key === 'Enter') {
    bearInp.value === 'cat'
    console.log(catInp.value)
    if (catInp.value === 'cat') {
      ;(cat.style.display = 'none') && (catInp.style.display = 'none')
    }
  }
})

// answer correct to hide dog
document.addEventListener('keydown', function (e) {
  console.log(e)
  if (e.key === 'Enter') {
    dogInp.value === 'dog'
    console.log(dogInp.value)
    if (dogInp.value === 'dog') {
      ;(dog.style.display = 'none') && (dogInp.style.display = 'none')
    }
  }
})

document.addEventListener('keydown', function (e) {
  console.log(e)
  if (e.key === 'Enter') {
    eelInp.value === 'eel'
    console.log(dogInp.value)
    if (eelInp.value === 'eel') {
      ;(eel.style.display = 'none') && (eelInp.style.display = 'none')
    }
  }
})

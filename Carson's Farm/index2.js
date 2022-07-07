let score = 0
let boxClicked = ''
const ltrBtn = document.querySelectorAll('.letBut')
let music = new Audio('./Carefree.mp3')
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
const fish = document.querySelector('#fish')
const fishInp = document.querySelector('#f-text')
const goat = document.querySelector('#goat')
const goatInp = document.querySelector('#g-text')
const horse = document.querySelector('#horse')
const horseInp = document.querySelector('#h-text')
const iguana = document.querySelector('#iguana')
const iguanaInp = document.querySelector('#i-text')
const jaguar = document.querySelector('#jaguar')
const jaguarInp = document.querySelector('#j-text')
const koala = document.querySelector('#koala')
const koalaInp = document.querySelector('#k-text')
const lion = document.querySelector('#lion')
const lionInp = document.querySelector('#l-text')
const monkey = document.querySelector('#monkey')
const monkeyInp = document.querySelector('#m-text')
const newt = document.querySelector('#newt')
const newtInp = document.querySelector('#n-text')
const octopus = document.querySelector('#octopus')
const octopusInp = document.querySelector('#o-text')
const panther = document.querySelector('#panther')
const pantherInp = document.querySelector('#p-text')
const quail = document.querySelector('#quail')
const quailInp = document.querySelector('#q-text')
const rabbit = document.querySelector('#rabbit')
const rabbitInp = document.querySelector('#r-text')
const snake = document.querySelector('#snake')
const snakeInp = document.querySelector('#s-text')
const tiger = document.querySelector('#tiger')
const tigerInp = document.querySelector('#t-text')
const unicorn = document.querySelector('#unicorn')
const unicornInp = document.querySelector('#u-text')
const viper = document.querySelector('#viper')
const viperInp = document.querySelector('#v-text')
const walrus = document.querySelector('#walrus')
const walrusInp = document.querySelector('#w-text')
const xerus = document.querySelector('#xerus')
const xerusInp = document.querySelector('#x-text')
const yak = document.querySelector('#yak')
const yakInp = document.querySelector('#y-text')
const zebra = document.querySelector('#zebra')
const zebraInp = document.querySelector('#z-text')

//all letters/buttons
const allBtns = document.querySelectorAll('.letBut')

// click tracker
let gotClicked = false
console.log(gotClicked)

//Pop up box with tracker to disable other buttons
document.querySelector('#gotit').addEventListener('click', function () {
  dirBtn.style.display = 'none'
  gotClicked = true
  music.play()
  console.log('got clicked' + gotClicked)
})

// winning condition//
// function win() {
//   for (let i = 0; i < allBtns.length; i++) {
//     document.querySelectorAll('.letBut')[i].style.display = 'none'
//   }
// }

//--------------------method to initiate animal clicks with tracker.
function animalClick(evtLis, anipic, aniInput) {
  evtLis.addEventListener('click', handleClick)
  function handleClick() {
    if (gotClicked == true && boxClicked == '') {
      anipic.style.display = 'block'
      aniInput.style.display = 'block'
      boxClicked = anipic.id
      console.log('aniId = ' + anipic.id)
    }
  }
  //toggles tracker off while box clicked to hide image.
  anipic.addEventListener('click', function () {
    if ((boxClicked = anipic.id)) {
      console.log('anicliked' + boxClicked)
      anipic.style.display = 'none'
      aniInput.style.display = 'none'
      boxClicked = ''
    }
  })
}
animalClick(a, ant, antInp)
animalClick(b, bear, bearInp)
animalClick(c, cat, catInp)
animalClick(d, dog, dogInp)
animalClick(e, eel, eelInp)
animalClick(f, fish, fishInp)
animalClick(g, goat, goatInp)
animalClick(h, horse, horseInp)
animalClick(i, iguana, iguanaInp)
animalClick(j, jaguar, jaguarInp)
animalClick(k, koala, koalaInp)
animalClick(l, lion, lionInp)
animalClick(m, monkey, monkeyInp)
animalClick(n, newt, newtInp)
animalClick(o, octopus, octopusInp)
animalClick(p, panther, pantherInp)
animalClick(q, quail, quailInp)
animalClick(r, rabbit, rabbitInp)
animalClick(s, snake, snakeInp)
animalClick(t, tiger, tigerInp)
animalClick(u, unicorn, unicornInp)
animalClick(v, viper, viperInp)
animalClick(w, walrus, walrusInp)
animalClick(x, xerus, xerusInp)
animalClick(y, yak, yakInp)
animalClick(z, zebra, zebraInp)

//
//-----------------------KeyPress Listeners------------------------------
// answer correct =  hide image

function rmvBox(txtInpt, animal, letter) {
  animal.style.display = 'none'
  txtInpt.style.display = 'none'
  boxClicked = ''
  animal.value = ''
  letter.style.display = 'none'
  console.log(antInp.value.toLowerCase())
  score++
  txtInpt.value = '' // <----
  console.log('Score = ' + score)
}

///if score != score?
// where to put?
//function / EVLST?

function catClick() {}

document.addEventListener('keydown', function (eve) {
  if (boxClicked != '') {
    if (eve.key === 'Enter') {
      if (antInp.value.toLowerCase() === 'ant') {
        /////////////////^^^^^^
        rmvBox(antInp, ant, a)
      }
      if (bearInp.value.toLowerCase() === 'bear') {
        rmvBox(bearInp, bear, b)
      }
      if (catInp.value.toLowerCase() === 'cat') {
        rmvBox(catInp, cat, c)
      }
      if (dogInp.value.toLowerCase() === 'dog') {
        rmvBox(dogInp, dog, d)
      }
      if (eelInp.value.toLowerCase() === 'eel') {
        rmvBox(eelInp, eel, e)
      }
      if (snakeInp.value.toLowerCase() === 'snake') {
        rmvBox(snakeInp, snake, s)
      }
      if (fishInp.value.toLowerCase() === 'fish') {
        rmvBox(fishInp, fish, f)
      }
      if (goatInp.value.toLowerCase() === 'goat') {
        rmvBox(goatInp, goat, g)
      }
      if (horseInp.value.toLowerCase() === 'horse') {
        rmvBox(horseInp, horse, h)
      }
      if (iguanaInp.value.toLowerCase() === 'iguana') {
        rmvBox(iguanaInp, iguana, i)
      }
      if (jaguarInp.value.toLowerCase() === 'jaguar') {
        rmvBox(jaguarInp, jaguar, j)
      }
      if (koalaInp.value.toLowerCase() === 'koala') {
        rmvBox(koalaInp, koala, k)
      }
      if (lionInp.value.toLowerCase() === 'lion') {
        rmvBox(lionInp, lion, l)
      }
      if (monkeyInp.value.toLowerCase() === 'monkey') {
        rmvBox(monkeyInp, monkey, m)
      }
      if (newtInp.value.toLowerCase() === 'newt') {
        rmvBox(newtInp, newt, n)
      }
      if (octopusInp.value.toLowerCase() === 'octopus') {
        rmvBox(octopusInp, octopus, o)
      }
      if (pantherInp.value.toLowerCase() === 'panther') {
        rmvBox(pantherInp, panther, p)
      }
      if (quailInp.value.toLowerCase() === 'quail') {
        rmvBox(quailInp, quail, q)
      }
      if (rabbitInp.value.toLowerCase() === 'rabbit') {
        rmvBox(rabbitInp, rabbit, r)
      }
      if (tigerInp.value.toLowerCase() === 'tiger') {
        rmvBox(tigerInp, tiger, t)
      }
      if (unicornInp.value.toLowerCase() === 'unicorn') {
        rmvBox(unicornInp, unicorn, u)
      }
      if (viperInp.value.toLowerCase() === 'viper') {
        rmvBox(viperInp, viper, v)
      }
      if (walrusInp.value.toLowerCase() === 'walrus') {
        rmvBox(walrusInp, walrus, w)
      }
      if (xerusInp.value.toLowerCase() === 'xerus') {
        rmvBox(xerusInp, xerus, x)
      }
      if (yakInp.value.toLowerCase() === 'yak') {
        rmvBox(yakInp, yak, y)
      }
      if (zebraInp.value.toLowerCase() === 'zebra') {
        rmvBox(zebraInp, zebra, z)
      }
    }
    if (score >= 26) {
      document.querySelector('.reset').style.display = 'block'
    }
  }
})

document.querySelector('.reset').addEventListener('click', function () {
  window.open('index2.html', '_self')
})
//-----------------Sounds-------------------

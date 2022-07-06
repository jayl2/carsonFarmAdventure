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

//Sets directions div to display:none

let gotClicked = false
console.log(gotClicked)

document.querySelector('#gotit').addEventListener('click', function () {
  dirBtn.style.display = 'none'
  gotClicked = true

  console.log(gotClicked)
})

// const allBut = document.querySelectorAll('.letBut')
// console.log(allBut)

// for( let btn of allBut){
//   btn.addEventListener('click',function(){
//     btn.style.display = 'block'
//   })
// }

//TODO: remove && and make those 2 lines.
//       rename ants() to initAnts() or something to that effect.
//

let boxClicked = ''

//----------------------------------------
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
  anipic.addEventListener('click', function () {
    if ((boxClicked = anipic.id)) {
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
animalClick(z, zebra, zebraInp) /
  //
  //
  //
  //
  //
  //-----------------------KeyPress Listeners------------------------------
  // answer correct to hide ant

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      if (antInp.value === 'ant') {
        ant.style.display = 'none'
        antInp.style.display = 'none'
        boxClicked = ''
        antInp.value = ''
      }
      if (bearInp.value === 'bear') {
        bear.style.display = 'none'
        bearInp.style.display = 'none'
        boxClicked = ''
      }
      if (catInp.value === 'cat') {
        cat.style.display = 'none'
        catInp.style.display = 'none'
        boxClicked = ''
      }
      if (dogInp.value === 'dog') {
        dog.style.display = 'none'
        dogInp.style.display = 'none'
        boxClicked = ''
      }
      if (eelInp.value === 'eel') {
        eel.style.display = 'none'
        eelInp.style.display = 'none'
        boxClicked = ''
      }
      if (snakeInp.value === 'snake') {
        snake.style.display = 'none'
        snakeInp.style.display = 'none'
        boxClicked = ''
      }
      if (fishInp.value === 'fish') {
        fish.style.display = 'none'
        fishInp.style.display = 'none'
        boxClicked = ''
      }
      if (goatInp.value === 'goat') {
        goat.style.display = 'none'
        goatInp.style.display = 'none'
        boxClicked = ''
      }
      if (horseInp.value === 'horse') {
        horse.style.display = 'none'
        horseInp.style.display = 'none'
        boxClicked = ''
      }
      if (iguanaInp.value === 'iguana') {
        iguana.style.display = 'none'
        iguanaInp.style.display = 'none'
        boxClicked = ''
      }
      if (jaguarInp.value === 'jaguar') {
        jaguar.style.display = 'none'
        jaguarInp.style.display = 'none'
        boxClicked = ''
      }
      if (koalaInp.value === 'koala') {
        koala.style.display = 'none'
        koalaInp.style.display = 'none'
        boxClicked = ''
      }
      if (lionInp.value === 'lion') {
        lion.style.display = 'none'
        lionInp.style.display = 'none'
        boxClicked = ''
      }
      if (monkeyInp.value === 'monkey') {
        monkey.style.display = 'none'
        monkeyInp.style.display = 'none'
        boxClicked = ''
      }
      if (newtInp.value === 'newt') {
        newt.style.display = 'none'
        newtInp.style.display = 'none'
        boxClicked = ''
      }
      if (octopusInp.value === 'octopus') {
        octopus.style.display = 'none'
        octopusInp.style.display = 'none'
        boxClicked = ''
      }
      if (pantherInp.value === 'panther') {
        panther.style.display = 'none'
        pantherInp.style.display = 'none'
        boxClicked = ''
      }
      if (quailInp.value === 'quail') {
        quail.style.display = 'none'
        quailInp.style.display = 'none'
        boxClicked = ''
      }
      if (rabbitInp.value === 'rabbit') {
        rabbit.style.display = 'none'
        rabbitInp.style.display = 'none'
        boxClicked = ''
      }
      if (tigerInp.value === 'tiger') {
        tiger.style.display = 'none'
        tigerInp.style.display = 'none'
        boxClicked = ''
      }
      if (unicornInp.value === 'unicorn') {
        unicorn.style.display = 'none'
        unicornInp.style.display = 'none'
        boxClicked = ''
      }
      if (viperInp.value === 'viper') {
        viper.style.display = 'none'
        viperInp.style.display = 'none'
        boxClicked = ''
      }
      if (walrusInp.value === 'walrus') {
        walrus.style.display = 'none'
        walrusInp.style.display = 'none'
        boxClicked = ''
      }
      if (xerusInp.value === 'xerus') {
        xerus.style.display = 'none'
        xerusInp.style.display = 'none'
        boxClicked = ''
      }
      if (yakInp.value === 'yak') {
        yak.style.display = 'none'
        yakInp.style.display = 'none'
        boxClicked = ''
      }
      if (zebraInp.value === 'zebra') {
        zebra.style.display = 'none'
        zebraInp.style.display = 'none'
        boxClicked = ''
      }
    }
  })

//-----------------Sounds-------------------
let playSound = function () {
  audio.play()
}

document.getElementById('play').addEventListener('click', playSound, false)

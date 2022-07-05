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

//enable/disable bear image - click
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

function eels() {
  e.addEventListener('click', handleClick)
  function handleClick() {
    ;(eel.style.display = 'block') && (eelInp.style.display = 'block')
  }
  eel.addEventListener('click', function () {
    ;(eel.style.display = 'none') && (eelInp.style.display = 'none')
  })
}

eels()

function snakes() {
  s.addEventListener('click', handleClick)
  function handleClick() {
    ;(snake.style.display = 'block') && (snakeInp.style.display = 'block')
  }
  snake.addEventListener('click', function () {
    ;(snake.style.display = 'none') && (snakeInp.style.display = 'none')
  })
}

snakes()

function fishes() {
  f.addEventListener('click', handleClick)
  function handleClick() {
    ;(fish.style.display = 'block') && (fishInp.style.display = 'block')
  }
  fish.addEventListener('click', function () {
    ;(fish.style.display = 'none') && (fishInp.style.display = 'none')
  })
}
fishes()

function goats() {
  g.addEventListener('click', handleClick)
  function handleClick() {
    ;(goat.style.display = 'block') && (goatInp.style.display = 'block')
  }
  goat.addEventListener('click', function () {
    ;(goat.style.display = 'none') && (goatInp.style.display = 'none')
  })
}
goats()

function horses() {
  h.addEventListener('click', handleClick)
  function handleClick() {
    ;(horse.style.display = 'block') && (horseInp.style.display = 'block')
  }
  horse.addEventListener('click', function () {
    ;(horse.style.display = 'none') && (horseInp.style.display = 'none')
  })
}
horses()

function iguanas() {
  i.addEventListener('click', handleClick)
  function handleClick() {
    ;(iguana.style.display = 'block') && (iguanaInp.style.display = 'block')
  }
  iguana.addEventListener('click', function () {
    ;(iguana.style.display = 'none') && (iguanaInp.style.display = 'none')
  })
}
iguanas()

function jaguars() {
  j.addEventListener('click', handleClick)
  function handleClick() {
    ;(jaguar.style.display = 'block') && (jaguarInp.style.display = 'block')
  }
  jaguar.addEventListener('click', function () {
    ;(jaguar.style.display = 'none') && (jaguarInp.style.display = 'none')
  })
}
jaguars()

function koalas() {
  k.addEventListener('click', handleClick)
  function handleClick() {
    ;(koala.style.display = 'block') && (koalaInp.style.display = 'block')
  }
  koala.addEventListener('click', function () {
    ;(koala.style.display = 'none') && (koalaInp.style.display = 'none')
  })
}
koalas()

function lions() {
  l.addEventListener('click', handleClick)
  function handleClick() {
    ;(lion.style.display = 'block') && (lionInp.style.display = 'block')
  }
  lion.addEventListener('click', function () {
    ;(lion.style.display = 'none') && (lionInp.style.display = 'none')
  })
}
lions()

function monkeys() {
  m.addEventListener('click', handleClick)
  function handleClick() {
    ;(monkey.style.display = 'block') && (monkeyInp.style.display = 'block')
  }
  monkey.addEventListener('click', function () {
    ;(monkey.style.display = 'none') && (monkeyInp.style.display = 'none')
  })
}
monkeys()

function newts() {
  n.addEventListener('click', handleClick)
  function handleClick() {
    ;(newt.style.display = 'block') && (newtInp.style.display = 'block')
  }
  newt.addEventListener('click', function () {
    ;(newt.style.display = 'none') && (newtInp.style.display = 'none')
  })
}
newts()

function octopuses() {
  o.addEventListener('click', handleClick)
  function handleClick() {
    ;(octopus.style.display = 'block') && (octopusInp.style.display = 'block')
  }
  octopus.addEventListener('click', function () {
    ;(octopus.style.display = 'none') && (octopusInp.style.display = 'none')
  })
}
octopuses()

function panthers() {
  p.addEventListener('click', handleClick)
  function handleClick() {
    ;(panther.style.display = 'block') && (pantherInp.style.display = 'block')
  }
  panther.addEventListener('click', function () {
    ;(panther.style.display = 'none') && (pantherInp.style.display = 'none')
  })
}
panthers()

function quails() {
  q.addEventListener('click', handleClick)
  function handleClick() {
    ;(quail.style.display = 'block') && (quailInp.style.display = 'block')
  }
  quail.addEventListener('click', function () {
    ;(quail.style.display = 'none') && (quailInp.style.display = 'none')
  })
}
quails()
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
      ;(ant.style.display = 'none') && (antInp.style.display = 'none')
    }
  }
})
// answer correct to hide bear
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (bearInp.value === 'bear') {
      ;(bear.style.display = 'none') && (bearInp.style.display = 'none')
    }
  }
})

// answer correct to hide cat
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (catInp.value === 'cat') {
      ;(cat.style.display = 'none') && (catInp.style.display = 'none')
    }
  }
})

// answer correct to hide dog
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (dogInp.value === 'dog') {
      score++
      console.log(score)
      ;(dog.style.display = 'none') && (dogInp.style.display = 'none')
    }
  }
})

// answer correct to hide eel and snake
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (eelInp.value === 'eel') {
      ;(eel.style.display = 'none') && (eelInp.style.display = 'none')
    } else if (snakeInp.value === 'snake') {
      ;(snake.style.display = 'none') && (snakeInp.style.display = 'none')
    }
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (fishInp.value === 'fish') {
      score++
      console.log(score)
      ;(fish.style.display = 'none') && (fishInp.style.display = 'none')
    }
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (goatInp.value === 'goat') {
      ;(goat.style.display = 'none') && (goatInp.style.display = 'none')
    }
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (horseInp.value === 'horse') {
      ;(horse.style.display = 'none') && (horseInp.style.display = 'none')
    }
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (iguanaInp.value === 'iguana') {
      ;(iguana.style.display = 'none') && (iguanaInp.style.display = 'none')
    }
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (jaguarInp.value === 'jaguar') {
      ;(jaguar.style.display = 'none') && (jaguarInp.style.display = 'none')
    }
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (koalaInp.value === 'koala') {
      ;(koala.style.display = 'none') && (koalaInp.style.display = 'none')
    }
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (lionInp.value === 'lion') {
      ;(lion.style.display = 'none') && (lionInp.style.display = 'none')
    }
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (monkeyInp.value === 'monkey') {
      ;(monkey.style.display = 'none') && (monkeyInp.style.display = 'none')
    }
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (newtInp.value === 'newt') {
      ;(newt.style.display = 'none') && (newtInp.style.display = 'none')
    }
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (octopusInp.value === 'octopus') {
      ;(octopus.style.display = 'none') && (octopusInp.style.display = 'none')
    }
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (pantherInp.value === 'panther') {
      ;(panther.style.display = 'none') && (pantherInp.style.display = 'none')
    }
  }
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    if (quailInp.value === 'quail') {
      ;(quail.style.display = 'none') && (quailInp.style.display = 'none')
    }
  }
})

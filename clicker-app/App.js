let count = 0
let cursorPrice = 10
let grandmaPrice = 70
let cursors = 0
let grandmas = 0
let perSec = 0

const clickBtn = document.querySelector(".click-btn")
const buyCursor = document.querySelector(".buy-cursors-btn")
const buyGrandma = document.querySelector(".buy-grandma-btn")

clickBtn.addEventListener("click", addCount)
buyCursor.addEventListener("click", buyCursors)
buyGrandma.addEventListener("click", buyGrandmas)

function addCount() {
  count++
  document.getElementById("count").innerHTML = count
}

function buyCursors() {
  if (count >= cursorPrice) {
    count = count - cursorPrice
    cursorPrice = Math.round(cursorPrice * 1.25)
    cursors++
    perSec++

    document.getElementById("count").innerHTML = count
    document.getElementById("cursor-price").innerHTML = cursorPrice
    document.getElementById("cursors").innerHTML = cursors
    document.getElementById("persec").innerHTML = perSec
  }
}

function buyGrandmas() {
  if (count >= grandmaPrice) {
    count = count - grandmaPrice
    grandmaPrice = Math.round(grandmaPrice * 1.15)
    grandmas ++
    perSec += 2

    document.getElementById("count").innerHTML = count
    document.getElementById("grandma-price").innerHTML = grandmaPrice
    document.getElementById("grandmas").innerHTML = grandmas
    document.getElementById("persec").innerHTML = perSec
  }
}

setInterval(function() {
  count += perSec
  document.getElementById("count").innerHTML = count
}, 1000)
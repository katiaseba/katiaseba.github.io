let count = 0
let cursorPrice = 20
let grandmaPrice = 100
let bakeryPrice = 600
let cursors = 0
let grandmas = 0
let bakeries = 0
let perSec = 0
let amount = 1

const clickBtn = document.querySelector(".click-btn")
const buyCursor = document.querySelector(".buy-cursors-btn")
const buyTenCursor = document.querySelector(".buy-tencursors-btn")
const buyGrandma = document.querySelector(".buy-grandma-btn")
const buyTenGrandma = document.querySelector(".buy-tengrandma-btn")
const buyBakery = document.querySelector(".buy-bakery-btn")
const buyTenBakery = document.querySelector(".buy-tenbakery-btn")
const saveBtn = document.querySelector(".save-btn")

clickBtn.addEventListener("click", addCount)
buyCursor.addEventListener("click", buyCursors)
buyGrandma.addEventListener("click", buyGrandmas)
buyTenCursor.addEventListener("click", buyTenCursors)
buyTenGrandma.addEventListener("click", buyTenGrandmas)
buyBakery.addEventListener("click", buyBakeries)
buyTenBakery.addEventListener("click", buyTenBakeries)
saveBtn.addEventListener("click", saveGame)

function addCount() {
  count += amount
  document.getElementById("count").innerHTML = count
}

function buyCursors() {
  if (count >= cursorPrice) {
    count = count - cursorPrice
    cursorPrice = Math.round(cursorPrice * 1.25)
    cursors++
    perSec++

    document.getElementById("count").innerHTML = count
    document.getElementById("cursor-price").innerHTML = cursorPrice + " cookies"
    document.getElementById("cursors").innerHTML = cursors
    document.getElementById("persec").innerHTML = perSec
  }
}


function buyTenCursors() {
  if (count >= (cursorPrice * 10)) {
    count = count - (cursorPrice * 10)
    cursorPrice = Math.round(cursorPrice * 12.5)
    cursors += 10
    perSec += 10

    document.getElementById("count").innerHTML = count
    document.getElementById("cursor-price").innerHTML = cursorPrice + " cookies"
    document.getElementById("cursors").innerHTML = cursors
    document.getElementById("persec").innerHTML = perSec
  }
}

function buyGrandmas() {
  if (count >= grandmaPrice) {
    count = count - grandmaPrice
    grandmaPrice = Math.round(grandmaPrice * 1.25)
    grandmas++
    perSec += 2

    document.getElementById("count").innerHTML = count
    document.getElementById("grandma-price").innerHTML = grandmaPrice + " cookies"
    document.getElementById("grandmas").innerHTML = grandmas
    document.getElementById("persec").innerHTML = perSec
  }
}

function buyTenGrandmas() {
  if (count >= (grandmaPrice * 10)) {
    count = count - (grandmaPrice * 10)
    grandmaPrice = Math.round(grandmaPrice * 12.5)
    grandmas += 10
    perSec += 20

    document.getElementById("count").innerHTML = count
    document.getElementById("grandma-price").innerHTML = grandmaPrice + " cookies"
    document.getElementById("grandmas").innerHTML = grandmas
    document.getElementById("persec").innerHTML = perSec
  }
}

function buyBakeries() {
  if (count >= bakeryPrice) {
    count = count - bakeryPrice
    bakeryPrice = Math.round(bakeryPrice * 1.5)
    bakeries++
    amount *= 2

    document.getElementById("count").innerHTML = count
    document.getElementById("bakery-price").innerHTML = bakeryPrice + " cookies"
    document.getElementById("bakeries").innerHTML = bakeries
    document.getElementById("amount").innerHTML = amount
  }
  console.log(amount)
}

function buyTenBakeries() {
  if (count >= (bakeryPrice * 10)) {
    count = count - (bakeryPrice * 10)
    bakeryPrice = Math.round(bakeryPrice * 15)
    bakeries += 10
    amount *= 20

    document.getElementById("count").innerHTML = count
    document.getElementById("bakery-price").innerHTML = bakeryPrice + " cookies"
    document.getElementById("bakeries").innerHTML = bakeries
    document.getElementById("amount").innerHTML = amount
  }
}

setInterval(function () {
  count += perSec
  document.getElementById("count").innerHTML = count
}, 1000)

function saveGame() {
  let gameSave = {
    count: count,
    cursorPrice: cursorPrice ,
    grandmaPrice: grandmaPrice,
    bakeryPrice: bakeryPrice,
    cursors: cursors,
    grandmas: grandmas,
    bakeries: bakeries,
    perSec: perSec,
    amount: amount
  }
  localStorage.setItem("gameSave", JSON.stringify(gameSave))
}

function loadGame() {
  let savedGame = JSON.parse(localStorage.getItem("gameSave"))
  if (typeof savedGame.count !== "undefined") count = savedGame.count
  if (typeof savedGame.cursorPrice !== "undefined") cursorPrice = savedGame.cursorPrice
  if (typeof savedGame.grandmaPrice !== "undefined") grandmaPrice = savedGame.grandmaPrice
  if (typeof savedGame.bakeryPrice !== "undefined") bakeryPrice = savedGame.bakeryPrice
  if (typeof savedGame.cursors !== "undefined") cursors = savedGame.cursors
  if (typeof savedGame.bakeries !== "undefined") bakeries = savedGame.bakeries
  if (typeof savedGame.perSec !== "undefined") perSec = savedGame.perSec
  if (typeof savedGame.amount !== "undefined") amount = savedGame.amount  
}

setInterval (function() {
  saveGame();
}, 30000)

window.onload = function() {
  loadGame()
}
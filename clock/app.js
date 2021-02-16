const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
  const now = new Date()
  let seconds = now.getSeconds()
  const secondsDegrees = ((seconds / 60) * 360) + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  let minutes = now.getMinutes()
  const minutesDegrees = ((minutes / 60) * 360) + 90
  minHand.style.transform = `rotate(${minutesDegrees}deg)`

  let hours = now.getHours()
  const hoursDegrees = ((hours / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`

  if (hours < 10) { hours = '0' + hours }
  if (minutes < 10) { minutes = '0' + minutes }
  if (seconds < 10) { seconds = '0' + seconds }
  const time = hours + ':' + minutes + ':' + seconds

  document.getElementById('digi').innerHTML = time

}

setInterval(setDate, 1000);
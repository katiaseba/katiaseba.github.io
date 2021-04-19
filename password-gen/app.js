const charNumber = document.getElementById("charNumber")
const charRange = document.getElementById("charRange")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeNumbersElement = document.getElementById("includeNumbers")
const includeSymbolsElement = document.getElementById("includeSymbols")
const form = document.getElementById("pwForm")
const passwordDisplay = document.getElementById("passwordDisplay")

const lowercaseCodes = arrayCodes(97, 122)
const uppercaseCodes = arrayCodes(65, 90)
const numbersCodes = arrayCodes(48, 57)
const symbolsCodes = arrayCodes(33, 47)
  .concat(arrayCodes(58,64))
  .concat(arrayCodes(91,96))
  .concat(arrayCodes(123,126))

charNumber.addEventListener('input', syncChar)
charRange.addEventListener('input', syncChar)

form.addEventListener("submit", event => {
  event.preventDefault()
  const charAmount = charNumber.value
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSymbols = includeSymbolsElement.checked
  const password = generatePassword(charAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordDisplay.innerText = password
})

function generatePassword(charAmount, includeUppercase, includeNumbers, includeSymbols){
  let charCodes = lowercaseCodes
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCodes)
  if (includeNumbers) charCodes = charCodes.concat(numbersCodes)
  if (includeSymbols) charCodes = charCodes.concat(symbolsCodes)

  
  const passwordChar = []
  for (let i = 0; i < charAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordChar.push(String.fromCharCode(characterCode))
  }
  return passwordChar.join('')
}

function arrayCodes(first, last) {
  const array = []
  for (let i = first; i <= last; i++) {
    array.push(i)
  }
  return array
}

function syncChar(event) {
  const value = event.target.value 
  charNumber.value = value
  charRange.value = value
}


const items = document.querySelectorAll('.img')
const nbSlide = items.length
const next = document.querySelector('#nextBtn')
const prev = document.querySelector('#prevBtn')
const slider = document.querySelectorAll('.slider')
let count = 0



next.addEventListener('click', () => {
  items[count].classList.remove('active');

  if(count < nbSlide - 1){
      count++;
  } else {
      count = 0;
  }

  items[count].classList.add('active')
  console.log(count, items);
})


prev.addEventListener('click', () => {
  items[count].classList.remove('active');

  if(count > 0){
      count--;
  } else {
      count = nbSlide - 1;
  }

  items[count].classList.add('active')
  console.log(count, items);
  
})
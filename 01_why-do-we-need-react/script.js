const basket1Count = document.querySelector('.basket-1 h1 span')
const basket2Count = document.querySelector('.basket-2 h1 span')
const leftClick = document.querySelector('.left-arrow')
const rightClick = document.querySelector('.right-arrow')


// leftClick.addEventListener('click',()=>{
//     // console.log(typeof +(basket1Count.innerText))
//     if(+(basket1Count.innerText) < 10 && +(basket1Count.innerText) >=0){
//         basket1Count.innerText = +(basket1Count.innerText) + 1;
//         basket2Count.innerText = +(basket2Count.innerText) - 1;
//     }
// })

// rightClick.addEventListener('click',()=>{
//     if(+(basket2Count.innerText) < 10 && +(basket2Count.innerText) >=0){
//         basket2Count.innerText = +(basket2Count.innerText) + 1;
//         basket1Count.innerText = +(basket1Count.innerText) - 1;
//     }
// })


const firstBasket = document.querySelector('.basket-1 span')
const secondBasket = document.querySelector('.basket-2 span')
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

const totalApples = 10

let secondBasketAppleCount = 0
let firstBasketAppleCount = totalApples - secondBasketAppleCount

firstBasket.innerText = firstBasketAppleCount
secondBasket.innerText = secondBasketAppleCount

rightArrow.addEventListener('click', () => {
    if(firstBasketAppleCount > 0) {
        firstBasketAppleCount--
        firstBasket.innerText = firstBasketAppleCount
        secondBasketAppleCount++
        secondBasket.innerText = secondBasketAppleCount
    }
})

leftArrow.addEventListener('click', () => {
    if(secondBasketAppleCount > 0) {
        firstBasketAppleCount++
        firstBasket.innerText = firstBasketAppleCount
        secondBasketAppleCount--
        secondBasket.innerText = secondBasketAppleCount
    }
})

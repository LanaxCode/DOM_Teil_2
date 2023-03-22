const myList = document.querySelector('#myList')
let liNodeList = document.querySelectorAll('li')
const output = document.querySelector('output')
const button = document.querySelectorAll("button")

const button2 = document.querySelector(".unten")

button[0].addEventListener('click', () => {
    output.innerHTML = myList.firstElementChild.innerHTML
})

button[1].addEventListener('click', () => {
    output.innerHTML = myList.lastElementChild.innerHTML
})

// console.log(liNodeList)
button[2].addEventListener('click', () => {
    output.innerHTML = myList.firstElementChild.nextElementSibling.innerHTML
})

button[3].addEventListener('click', () => {
    output.innerHTML = myList.lastElementChild.previousElementSibling.innerHTML
})





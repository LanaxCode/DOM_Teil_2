const button = document.querySelector("#enter")
let input = document.querySelector("#userinput")
let liste = document.querySelector("ul")


button.addEventListener('click', () => {
    console.log(input.value)
    let li = document.createElement('li')
    li.textContent = input.value
    liste.appendChild(li);
})


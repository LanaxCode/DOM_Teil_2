const button = document.querySelector("button")
let divcontent = document.querySelector(".umwickeln")


let counter = 0
button.addEventListener('click', () => {
    let div = document.createElement('div')

    if (counter % 10 == 0) {
        console.log(counter)
        div.textContent = counter
        divcontent.appendChild(div).classList.add("weiss");
    } else {
        div.textContent = counter
        divcontent.appendChild(div).classList.add("rechteck");
    }
    counter++
})


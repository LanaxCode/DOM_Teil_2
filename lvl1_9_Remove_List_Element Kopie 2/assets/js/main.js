const button = document.querySelector('#button')

const selectElement = document.querySelector('#farbeAuswahlen')

button.addEventListener('click', (event) => {
    event.preventDefault()
    const index = selectElement.selectedIndex

    switch (index) {
        case 0:
            document.body.style.backgroundColor = "mediumorchid"

            break;
        case 1:
            document.body.style.backgroundColor = "mintcream"
            break;
        default:
            break;
    }
})
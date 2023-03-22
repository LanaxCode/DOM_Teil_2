
const selectElement = document.querySelector('#farbeAuswahlen')

function removerClick() {
    event.preventDefault();
    selectElement.remove(selectElement.selectedIndex)

}
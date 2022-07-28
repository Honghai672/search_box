var SearchButton = document.querySelector('.search__button')
var search = document.querySelector('.search')

// SearchButton.addEventListener('click', OpenSearchBox)

// function OpenSearchBox() {
//     search.classList.toggle('open')
//     this.previousElementSibling.focus();
// }

SearchButton.addEventListener('click', openSearch)

function openSearch() {
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus();
}
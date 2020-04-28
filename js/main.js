const cartButton = document.querySelector(
    '#cart-button'
)
const cancel = document.querySelector(
    '#cart-cancel'
)
const modal = document.querySelector('.modal')
const close = document.querySelector('.close')

cartButton.addEventListener('click', toggleModal)

close.addEventListener('click', toggleModal)

cancel.addEventListener('click', toggleModal)

function toggleModal() {
    modal.classList.toggle('is-open')
}

new WOW().init();
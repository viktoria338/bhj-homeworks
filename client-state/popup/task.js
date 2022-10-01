let modal = document.querySelector('.modal')
let modalClose = document.querySelector('.modal__close')

 if (document.cookie == '') {
    modal.classList.add('modal_active')
    modalClose.addEventListener('click', () => {
        modal.classList.remove('modal_active')
        document.cookie = 'finish=true'
    })
 }

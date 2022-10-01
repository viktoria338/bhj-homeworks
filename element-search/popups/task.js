const modalMain = document.getElementById('modal_main');
modalMain.className = 'modal modal_active'

const modalClose = document.getElementsByClassName('modal__close modal__close_times')
let modalArr = Array.from(modalClose)
for (let i = 0; i < modalArr.length; i++) {
    modalClose[i].onclick = function() {
        modalMain.className = "modal";
        modalSuccess.className = 'modal'
    }
}

const success = document.getElementsByClassName('show-success')
const modalSuccess = document.getElementById('modal_success')

success.item(0).onclick = function () {
    modalSuccess.className = 'modal modal_active'
    modalMain.className = 'modal'
}

    
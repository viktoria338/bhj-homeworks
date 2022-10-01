let progress = document.getElementById('progress')
let form = document.forms['form'];

form.addEventListener('submit', (elem) => {
    elem.preventDefault()

    let xhr = new XMLHttpRequest()
    
    xhr.addEventListener('progress', (e) => {
        progress.value = e.loaded / 1000000
    })
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/upload.php')
    xhr.send()
})
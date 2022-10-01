let xhr = new XMLHttpRequest();
let title = document.getElementById('poll__title')
let answers = document.getElementById('poll__answers')

xhr.addEventListener('readystatechange', () => {
    if ( xhr.readyState == xhr.DONE) {
        let xhrPars = JSON.parse(xhr.response)
        title.innerHTML += `
        ${xhrPars.data.title}
        `
        for (let item of xhrPars.data.answers) {
            answers.innerHTML += `
            <button class="poll__answer" onclick="alert('Спасибо, ваш голос засчитан!')">
              ${item}
            </button>
            `
        }
    }
})

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php')
xhr.send()
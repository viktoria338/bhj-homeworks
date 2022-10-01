const xhr = new XMLHttpRequest();
const loader = document.querySelector('.loader')
const item = document.getElementById('items')

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState == 4) {
        loader.classList.remove("loader_active");
        let xhrPars = JSON.parse(xhr.response);
        let arrayPars = Object.entries(xhrPars.response.Valute)
        
        for (i in arrayPars) {
            item.innerHTML += `
            <div class="item">
                    <div class="item__code">
                        ${arrayPars[i][1].CharCode}
                    </div>
                    <div class="item__value">
                        ${arrayPars[i][1].Value}
                    </div>
                    <div class="item__currency">
                        руб. 
                    </div>
                </div>
            `
        }
    }
})

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/");
xhr.send();
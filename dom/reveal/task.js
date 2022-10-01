const reveal = document.querySelectorAll('.reveal')

for (let item of reveal) {
    window.addEventListener('scroll', () => {
        let windowHeight = window.innerHeight;
        let blockTop = item.getBoundingClientRect().top;

        if (blockTop < windowHeight && blockTop > 0) {
            item.classList.add('reveal_active')
        } else {
            item.classList.remove('reveal_active')
        }
    });
}
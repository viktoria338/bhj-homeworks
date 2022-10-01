const dropdownValue = document.querySelector('.dropdown__value')
const dropdownList = document.querySelector('.dropdown__list')
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'))

dropdownValue.addEventListener('click', function() {
    if (dropdownList.className == 'dropdown__list dropdown__list_active') {
        dropdownList.className = 'dropdown__list'
    } else {
        dropdownList.className = 'dropdown__list dropdown__list_active'
    }
})

for (let item of dropdownItem) {
    item.addEventListener("click", function(e) {
        e.preventDefault();
        dropdownValue.textContent = dropdownItem[dropdownItem.indexOf(item)].querySelector(".dropdown__link").textContent;
        dropdownList.className = "dropdown__list";
    })
}
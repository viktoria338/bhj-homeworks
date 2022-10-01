let tabs = Array.from(document.querySelectorAll(".tab"));
let tabContents = Array.from(document.querySelectorAll(".tab__content"))
for (let index of tabs) {
    index.addEventListener("click", function() {
        tabs.map(item => item.className = "tab")
        tabContents.map(item => item.className = "tab__content");
        index.className = "tab tab_active";
        tabContents[tabs.indexOf(index)].className = "tab__content tab__content_active"
    })
}
;
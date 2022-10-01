let menuLink = document.getElementsByClassName("menu__link");
for (let item of menuLink) {
   item.onclick = function () {
        if(item.closest(".menu__item").querySelector(".menu_sub.menu_active")) {
            item.closest(".menu__item").querySelector(".menu_sub.menu_active").className = "menu menu_sub";
            return false;
        } else if(item.closest(".menu__item").querySelector(".menu_sub")) {
            item.closest(".menu__item").querySelector(".menu_sub").className = "menu menu_sub menu_active"
            return false;
        }
    }
 }
 
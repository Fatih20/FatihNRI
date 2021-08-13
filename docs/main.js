var is_burger_menu_open = false;

const burger_menu = document.querySelector(".burger-menu")
const burger_menu_button = document.querySelector(".burger-menu-button")
burger_menu_button.addEventListener("click", (event) => {
    is_burger_menu_open = !is_burger_menu_open;
    toggle_burger_menu (is_burger_menu_open)
});

function toggle_burger_menu (is_burger_menu_open) {
    const burger_menu = document.querySelector(".burger-menu")
    if (is_burger_menu_open){
        burger_menu.classList.remove("burger-menu-closed");
        burger_menu.classList.add("burger-menu-open");
    } else {
        burger_menu.classList.remove("burger-menu-open");
        burger_menu.classList.add("burger-menu-closed");
    }
};


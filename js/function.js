const iconMenu = document.querySelector(".header__icons--menu");
const menu = document.querySelector(".header__menu");
iconMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-hide");
    //menu.style.backgroundColor = "blue";
});

const search = document.getElementById("search");
let inputCreado = false;

search.addEventListener("click", () => {

    if (!inputCreado) {
    const inputSearch = document.createElement("input");
    search.appendChild(inputSearch);

    inputCreado = true;

    search.removeEventListener("click", createInput);
    }
});

const inicioSesion = document.querySelector(".header__menu--option-two");

inicioSesion.addEventListener("click", () => {
    const containerInicio = document.getElementById("container-inicio");
    containerInicio.style.display = "flex";
    console.log("click");
})
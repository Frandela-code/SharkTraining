// Función para alternar la clase "nav-active" en el contenedor de navegación y en el menú de hamburguesa
function toggleMenu() {
    console.log("Se hizo clic en el menú de hamburguesa"); // Agrega esto para verificar si la función se ejecuta
    const navlinks = document.querySelector(".navlinks");
    const navList = document.querySelector(".nav-list");
    navlinks.classList.toggle("nav-active");
    navList.classList.toggle("nav-active");
}




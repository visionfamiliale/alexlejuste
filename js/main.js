// Année automatique footer
document.getElementById("year").textContent = new Date().getFullYear();


burger.addEventListener("click", () => {
    nav.classList.toggle("active");
    burger.classList.toggle("active");
    document.body.classList.toggle("no-scroll");
});



const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        burger.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
});

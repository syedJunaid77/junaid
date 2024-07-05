var typed = new Typed(".typed", {
    strings: ['Alpha', 'Beta', 'Delta'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
})

// Gets the Mobile Nav icon by its ID
let bars = document.getElementById('bars');

// Gets the Mobile Nav container
let mobileMenu = document.getElementById('navbar');

// Displays the Mobile Nav when clicked and changes the Nav Icon from three bars to an 'X'
bars.addEventListener('click', function () {
    mobileMenu.classList.toggle('show');
    bars.classList.toggle('fa-times');
});




document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar_top");
    const navLinks = document.querySelectorAll("#navbar_top .nav-item a");
    const alphaLogo = document.getElementById("alpha_logo");
    const betaLogo = document.getElementById("beta_logo");
    const deltaLogo = document.getElementById("delta_logo");
    const clr = document.getElementById("clrbtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 150) {
            navbar.classList.remove("bg-transparent", "text-white");
            navbar.classList.add("bg-white", "text-gray-800");
            navLinks.forEach(link => {
                link.classList.remove("text-white");
                link.classList.add("text-gray-800");
                clrbtn.classList.add("text-black");
            });
            alphaLogo.src = "img/Alpha-Logo-blue).png"; // Logo for white background
            betaLogo.src = "img/Beta-Logo-blue.png"; // Logo for white background
            deltaLogo.src = "img/Delta-Logo-blue.png"; // Logo for white background
        } else {
            navbar.classList.remove("bg-white", "text-gray-800");
            navbar.classList.add("bg-transparent", "text-white");
            navLinks.forEach(link => {
                link.classList.remove("text-gray-800");
                link.classList.add("text-white");
                clrbtn.classList.remove("text-black")
            });
            alphaLogo.src = "img/Alpha-Logo-White-1.png"; // Logo for transparent background
            betaLogo.src = "img/Beta-Logo-White-2.png"; // Logo for transparent background
            deltaLogo.src = "img/Delta-Logo-White-3.png"; // Logo for transparent background
        }
    });
});


window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 150) {
        navbar.classList.add('bg-white', 'text-gray-800', 'shadow-lg');
        navbar.classList.remove('text-white');
    } else {
        navbar.classList.remove('bg-white', 'text-gray-800', 'shadow-lg');
        navbar.classList.add('text-white');
    }
});


const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});
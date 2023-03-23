const mobileBtn = document.getElementById("menu-btn");

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}

mobileBtn.addEventListener('click', toggleMenu);
//Seleciona os elementos que vao ser usados para navegação
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

//Alterna o menu ao clicar no toggle
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

//Fecha o menu ao clicar em um link, para não ficar o exibindo
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});
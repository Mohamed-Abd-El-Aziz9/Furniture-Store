let navlink = document.getElementById('navhover'); 
let navbarSection = document.getElementById('navbar-section'); 
function displayItem() {
    navbarSection.classList.remove('d-none')
    navbarSection.classList.add('d-block')
    navbarSection.classList.add('transition')

}
function hideItem() {
    navbarSection.classList.add('d-none'); 
    navbarSection.classList.remove('d-block'); 
    navbarSection.classList.add('transition')

}
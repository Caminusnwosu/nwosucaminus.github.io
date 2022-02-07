/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
*/


/**
 * Define Global Variables
 * 
*/
const navbar = document.querySelector('#navbar__list');
const sections= document.querySelectorAll('.landing__section');


/**
 * End Global Variables
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach(section => {
    // create html element for a menu item
    const newItem = document.createElement('li');
    const newLink = document.createElement('a');
    // grab menu item title and link from the section attributes
    newLink.textContent = section.dataset.nav;
    newLink.setAttribute('href', '#'+section.getAttribute('id'));
    // add link style for new link
    newLink.classList.add('menu__link');
    // append to DOM new elements
    newItem.appendChild(newLink);
    navbar.appendChild(newItem);
});


// get section near to top of viewport
function getNearTop(){
    const near= Object.values(sections).filter(section => {
        return section.getBoundingClientRect().y +  section.getBoundingClientRect().height/2 > 0;
    });
    return near[0];
}


// Add class 'active' to section when near top of viewport
function updateActiveSection(){
    const previous = document.querySelector('.landing__section--active');
    previous.classList.remove('landing__section--active');
    const current  = getNearTop();
    current.classList.add('landing__section--active');
} 


// Set sections as active
document.addEventListener('scroll', updateActiveSection);

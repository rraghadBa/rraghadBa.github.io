/*===skills taps*/

const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(`#${tab.dataset.target}`);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove("skills__active");
        });

        target.classList.add("skills__active");

        tabs.forEach(t => {
            t.classList.remove("skills__active");
        });

        tab.classList.add("skills__active");
    });
});

/*popup*/
document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
        porttfolioItemDetails(e.target.parentElement);
    }
})


function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}


document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)


function porttfolioItemDetails(porttfolioItem) {
   
    document.querySelector(".pp__thumbnail img").src = porttfolioItem.querySelector(".work__img").src;

   
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = porttfolioItem.querySelector(".work__title").innerHTML;

   
    document.querySelector(".portfolio__popup-body").innerHTML = porttfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

/*----SCROLL SECTION ACTIVE LINK-----*/
// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    // Get current scroll position
    let scrollY = window.pageYOffset;
    
    // Now we loop through sections to get height, top and ID values for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100; // Increased offset for better detection
        const sectionId = current.getAttribute("id");
        
        // If our current scroll position enters the space where current section is, add .active-link class to corresponding navigation link, else remove it
        // To know which link needs an active class, we use sectionId variable we are getting while looping through sections as a selector
        const navLink = document.querySelector(`.nav__link[href*='${sectionId}']`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                // Remove active class from all nav links first
                document.querySelectorAll('.nav__link').forEach(link => {
                    link.classList.remove("active-link");
                });
                // Add active class to current section's nav link
                navLink.classList.add("active-link");
            }
        }
    });
}

/*==================== MENU SHOW/HIDE ====================*/
const navToggle = document.getElementById('nav-toggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

function toggleMenu() {
    sidebar.classList.toggle('show-menu');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('show-menu') ? 'hidden' : '';
}

navToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
});

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav__link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});

// Close menu when clicking overlay
overlay.addEventListener('click', toggleMenu);

// Close menu when pressing Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebar.classList.contains('show-menu')) {
        toggleMenu();
    }
});

// Add hover effect for nav items
const navItems = document.querySelectorAll('.nav__item');
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (!item.querySelector('.nav__link').classList.contains('active-link')) {
            item.querySelector('.nav__link').style.background = 'var(--box-color)';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        if (!item.querySelector('.nav__link').classList.contains('active-link')) {
            item.querySelector('.nav__link').style.background = 'transparent';
        }
    });
});


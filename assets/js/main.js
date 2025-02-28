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
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add("active-link");
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove("active-link");
        }
    });
}


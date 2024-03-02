let burger = document.querySelector(".burger") ;

burger.onclick = function () {
    let mobileNav = document.querySelector('.mobile-container') ;
    let currentDisplay = window.getComputedStyle(mobileNav).display ;
    mobileNav.style.display = currentDisplay === 'block'? 'none' : 'block' ;
    window.addEventListener("scroll" , preventScroll , {passive :false})
}

function preventScroll(event) {
    // Cancel the scroll event
    window.scrollTo(0, 0);
    event.preventDefault();
}
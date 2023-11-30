$(document).ready(function() {
    // Use setTimeout to delay the image reveal after 8 seconds (8000 milliseconds)
    setTimeout(function() {
        // Show the hidden image
        $('.profile-pic-static').show();
    }, 8000);

    // Use another setTimeout to fade out the .profile-pic-gif after 9 seconds (9000 milliseconds)
    setTimeout(function() {
        $('.profile-pic-gif').hide();
    }, 8000);
});

/*====================== toggle icon navbar ======================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let homeContent = document.querySelectorAll('.home-content h1, .home-content h3, .home-content p');


menuIcon.onclick = () => {
    
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    

    // Check if 'active' class is present
    // if (navbar.classList.contains('active')) {
    //     homeContent.forEach(element => {
    //         element.style.opacity = '0%';
    //     });
    // } else {
    //     homeContent.forEach(element => {
    //         element.style.opacity = '100%';
    //     });
    // }
};


/*====================== scroll sections active link ======================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight; // Fix typo here
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

   /*====================== sticky navbar ======================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    
    /*====================== remove toggle icon and navbar when click navbar link (scroll) ======================*/
   
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    
    }


 /*====================== scroll reveal ======================*/
 ScrollReveal({ 
    // reset: true, 
    distance: '80px',
    duration: 2000,
    delay: 200
    
});


ScrollReveal().reveal('.home-content, home-content h3 .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .education-column, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',  { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*====================== typed js ======================*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Graphic Designer', 'Motion graphics animator'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
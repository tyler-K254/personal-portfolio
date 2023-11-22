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

menuIcon.onclick = () => {
    console.log('Menu icon clicked');
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    console.log('Menu icon class toggled');
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

    // Remove or reposition this comment as needed
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    
    /*====================== remove toggle icon and navbar when click navbar link (scroll) ======================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

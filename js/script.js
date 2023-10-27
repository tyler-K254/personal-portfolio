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

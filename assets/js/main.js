$(window).on('load', function () {
    setTimeout(removeLoader, 1000); //wait for page load PLUS two seconds.
});
function removeLoader() {
    $(".preloader").fadeOut(500, function () {
        // fadeOut complete. Remove the loading div
        $(".preloader").remove(); //makes page more lightweight 
    });
}

function toggleNav() {
    document.getElementById("nav").classList.toggle("show");
}
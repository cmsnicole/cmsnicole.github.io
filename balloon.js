// document.addEventListener('DOMContentLoaded', function() {

    // Change balloon opacity on scroll
    balloon = document.getElementById("balloon");
    main = document.getElementsByTagName("main")[0];
    var showBalloon = function () {
        var y = main.scrollTop; 
        if (y >= 500) {
            balloon.className = "balloon show"
        } else {
            balloon.className = "balloon hide"
        }
    };

    main.addEventListener("scroll", showBalloon);
// })
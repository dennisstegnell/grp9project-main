var playing = true;
var pauseButton = document.getElementById('slideshow-pause-button');
var index = 0;

function carousel() {
    var i;
    var pictures = document.getElementsByClassName("slideshow-slides");
    for (i = 0; i < pictures.length; i++) {
        pictures[i].style.display = "none";
    }
    index++;
    if (index > pictures.length) {
        index = 1
    }
    pictures[index - 1].style.display = "block";
}

function pauseSlideshow() {
    pauseButton.innerHTML = 'Play';
    playing = false;
    clearInterval(slideInterval);
}

function playSlideshow() {
    pauseButton.innerHTML = 'Pause';
    playing = true;
    slideInterval = setInterval(carousel, 4000);
}

pauseButton.onclick = function() {
    if (playing) {
        pauseSlideshow();
    }
    else {
        playSlideshow();
    }
};

carousel();
playSlideshow();
// attractionsLightBox
window.addEventListener("load", function () {
    let attractions = document.querySelectorAll(".attractionImage")
    let lightBoxs = document.querySelectorAll(".attractionBgImage");
    let cancels = document.querySelectorAll(".cancelLightBox");

    for (let i = 0; i < attractions.length; i++) {

        attractions[i].addEventListener("click", function () {
            lightBoxs[i].style.display = "flex";
        });
        cancels[i].addEventListener("click", function () {
            lightBoxs[i].style.display = "none";
        });
    }
});

// attractionsSlider
window.addEventListener("load", function () {
    let attractionSlider = document.querySelectorAll(".attractionAll");
    let left = document.querySelectorAll(".arrowLeft");
    let right = document.querySelectorAll(".arrowRight");


    for (let j = 0; j < attractionSlider.length; j++) {
        left[j].addEventListener("click", function () {
            attractionSlider[j].style.transform = "translateX(0px)";
            right[j].style.filter = "unset";
            right[j].style.animation = "";
            left[j].style.filter = "grayscale(1)";
            left[j].style.animation = "unset";
        });
        right[j].addEventListener("click", function () {
            attractionSlider[j].style.transform = "translateX(-50%)";
            left[j].style.filter = "unset";
            left[j].style.animation = " moveLeft .5s alternate infinite";
            right[j].style.filter = "grayscale(1)";
            right[j].style.animation = "unset";
        });

    }

});

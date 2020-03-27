// // attractionsLightBox
// function attractionsLightBox() {
//     let attractions = document.querySelectorAll(".attractionImage")
//     let lightBoxs = document.querySelectorAll(".attractionBgImage");
//     let cancels = document.querySelectorAll(".cancelLightBox");

//     for (let i = 0; i < attractions.length; i++) {

//         attractions[i].addEventListener("click", function () {
//             lightBoxs[i].style.display = "flex";
//         });
//         cancels[i].addEventListener("click", function () {
//             lightBoxs[i].style.display = "none";
//         });
//     }
// }


// attractionsSlider
// function attractionsSlider() {
//     let attractionSlider = document.querySelectorAll(".attractionAll");
//     let left = document.querySelectorAll(".arrowLeft");
//     let right = document.querySelectorAll(".arrowRight");


//     for (let j = 0; j < attractionSlider.length; j++) {
//         left[j].addEventListener("click", function () {
//             attractionSlider[j].style.transform = "translateX(0px)";
//             right[j].style.filter = "unset";
//             right[j].style.animation = "";
//             left[j].style.filter = "grayscale(1)";
//             left[j].style.animation = "unset";
//         });
//         right[j].addEventListener("click", function () {
//             attractionSlider[j].style.transform = "translateX(-50%)";
//             left[j].style.filter = "unset";
//             left[j].style.animation = " moveLeft .5s alternate infinite";
//             right[j].style.filter = "grayscale(1)";
//             right[j].style.animation = "unset";
//         });

//     }
// }


// scrollMagic with SVG
function pathPrepare($el) {
    var lineLength = $el[0].getTotalLength() * 1.355;
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
}

var $roadPath1 = $("path#cls-1");
var $roadPath2 = $("path#cls-2");
var $roadPath3 = $("path#cls-3");
var $roadPath4 = $("path#cls-4");
var $roadPath5 = $("path#cls-5");

// prepare SVG
pathPrepare($roadPath1);
pathPrepare($roadPath2);
pathPrepare($roadPath3);
pathPrepare($roadPath4);
pathPrepare($roadPath5);

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween1 = new TimelineMax()
    .add(TweenMax.to($roadPath1, 1, { strokeDashoffset: 0, ease: Linear.easeNone }));
var tween2 = new TimelineMax()
    .add(TweenMax.to($roadPath2, 1, { strokeDashoffset: 0, ease: Linear.easeNone }));
var tween3 = new TimelineMax()
    .add(TweenMax.to($roadPath3, 1, { strokeDashoffset: 0, ease: Linear.easeNone }));
var tween4 = new TimelineMax()
    .add(TweenMax.to($roadPath4, 1, { strokeDashoffset: 0, ease: Linear.easeNone }));
var tween5 = new TimelineMax()
    .add(TweenMax.to($roadPath5, 1, { strokeDashoffset: 0, ease: Linear.easeNone }));

// build scene
var scene1 = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 50, tweenChanges: true, offset: 0 })
    .setTween(tween1)
    // .addIndicators()
    .addTo(controller);
var scene2 = new ScrollMagic.Scene({ triggerElement: "#trigger2", duration: 50, tweenChanges: true, offset: 0 })
    .setTween(tween2)
    // .addIndicators()
    .addTo(controller);
var scene3 = new ScrollMagic.Scene({ triggerElement: "#trigger3", duration: 50, tweenChanges: true, offset: 0 })
    .setTween(tween3)
    // .addIndicators()
    .addTo(controller);
var scene4 = new ScrollMagic.Scene({ triggerElement: "#trigger4", duration: 50, tweenChanges: true, offset: 0 })
    .setTween(tween4)
    // .addIndicators()
    .addTo(controller);
var scene5 = new ScrollMagic.Scene({ triggerElement: "#trigger5", duration: 50, tweenChanges: true, offset: 0 })
    .setTween(tween5)
    // .addIndicators()
    .addTo(controller);


// scrollMagic and animation
// build scene
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", offset: 130 })
    .setClassToggle(".groupA", "disPlay")
    // .addIndicators()
    .addTo(controller);
//
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger2", offset: 130 })
    .setClassToggle(".groupB", "disPlay")
    // .addIndicators()
    .addTo(controller);
//
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger3", offset: 130 })
    .setClassToggle(".groupC", "disPlay")
    // .addIndicators()
    .addTo(controller);
//
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger4", offset: 130 })
    .setClassToggle(".groupD", "disPlay")
    // .addIndicators()
    .addTo(controller);
//
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger5", offset: 130 })
    .setClassToggle(".groupE", "disPlay")
    // .addIndicators()
    .addTo(controller);

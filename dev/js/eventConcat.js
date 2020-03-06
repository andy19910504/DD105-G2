window.addEventListener("load", function () {
    let holdevent = document.querySelectorAll(".lightbox")
    let lightBoxs = document.querySelectorAll(".backDrop");
    let closes = document.querySelector(".close");

    let eventDetails = document.querySelectorAll(".lightDetail");

    let eventReports = document.querySelectorAll(".lightReport");
    let eventReportclose = document.querySelector(".cancel");

    //揪團詳情

    for (let i = 0; i < eventDetails.length; i++) {

        eventDetails[i].addEventListener("click", function () {
            lightBoxs[0].style.display = "flex";
            
        });
        closes.addEventListener("click", function () {
            lightBoxs[0].style.display = "none";
        });
    }

    //揪團檢舉
    for (let i = 0; i < eventReports.length; i++) {

        eventReports[i].addEventListener("click", function () {
            lightBoxs[1].style.display = "flex";
            
        });
        eventReportclose.addEventListener("click", function () {
            lightBoxs[1].style.display = "none";
        });
    }

});
window.addEventListener("load", function () {
    let holdevent = document.querySelectorAll(".lightbox")
    let lightBoxs = document.querySelectorAll(".backDrop");
    let closes = document.querySelectorAll(".close");

    let eventDetails = document.querySelectorAll(".lightDetail");

    let eventReports = document.querySelectorAll(".dotWrap");
    let eventReportclose = document.querySelectorAll(".cancel");
    // 發起揪團
    for (let i = 0; i < holdevent.length; i++) {

        holdevent[i].addEventListener("click", function () {
            lightBoxs[i].style.display = "flex";
           
        });
        closes[i].addEventListener("click", function () {
            lightBoxs[i].style.display = "none";
        });
    }
    //揪團詳情
    for (let i = 0; i < eventDetails.length; i++) {

        eventDetails[i].addEventListener("click", function () {
            lightBoxs[1].style.display = "flex";
            
        });
        closes[1].addEventListener("click", function () {
            lightBoxs[1].style.display = "none";
        });
    }

    //揪團檢舉
    for (let i = 0; i < eventReports.length; i++) {

        eventReports[i].addEventListener("click", function () {
            lightBoxs[2].style.display = "flex";
            
        });
        eventReportclose[0].addEventListener("click", function () {
            lightBoxs[2].style.display = "none";
        });
    }

});
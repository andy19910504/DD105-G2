window.addEventListener("load", function () {
    // let holdevent = document.querySelectorAll(".lightbox")
    let lightBoxs = document.querySelectorAll(".backDrop");
    let closes = document.querySelectorAll(".close");

    let moodDetails = document.querySelectorAll(".lightDetail");

    let moodReports = document.querySelectorAll(".dotWrap");
    let moodReportclose = document.querySelectorAll(".cancel");
    // 發起揪團
    // for (let i = 0; i < holdevent.length; i++) {

    //     holdevent[i].addEventListener("click", function () {
    //         lightBoxs[i].style.display = "flex";
           
    //     });
    //     closes[i].addEventListener("click", function () {
    //         lightBoxs[i].style.display = "none";
    //     });
    // }
    //揪團詳情
    for (let i = 0; i < moodDetails.length; i++) {

        moodDetails[i].addEventListener("click", function () {
            lightBoxs[1].style.display = "flex";
            
        });
        closes[1].addEventListener("click", function () {
            lightBoxs[1].style.display = "none";
        });
    }

    //揪團檢舉
    for (let i = 0; i < moodReports.length; i++) {

        moodReports[i].addEventListener("click", function () {
            lightBoxs[2].style.display = "flex";
            
        });
        moodReportclose[0].addEventListener("click", function () {
            lightBoxs[2].style.display = "none";
        });
    }

});
// $(document).ready(function () {
//     //發起揪團


//     // $(".lightbox").on("click", function () {
//     //     $(".backDrop").animate({ "opacity": ".70" }, 500);
//     //     $(".lightbox_holdevent_info").animate({ "opacity": "1.0" }, 500);
//     //     $(".backDrop, .lightbox_holdevent_info").css("display", "flex");
//     //     $(".step1").addClass('color');

//     // });
//     // 上下一步
//     // ----1------
//     $(".1_nextStep").on("click", function () {
//         $(".step1").removeClass('color');
//         $(".holdevent_step1content").css("display", "none");
//         $(".holdevent_step2content").css("display", "block");
//         $(".step2").addClass('color');
//     });
//     // ----2------
//     $(".2_backStep").on("click", function () {
//         $(".step1").addClass('color');
//         $(".holdevent_step1content").css("display", "block");
//         $(".holdevent_step2content").css("display", "none");
//         $(".step2").removeClass('color');
//     });

//     $(".2_nextStep").on("click", function () {
//         $(".step3").addClass('color');
//         $(".holdevent_step3content").css("display", "block");
//         $(".holdevent_step2content").css("display", "none");
//         $(".step2").removeClass('color');
//     });
//     // ----3------
//     $(".3_backStep").on("click", function () {
//         $(".step2").addClass('color');
//         $(".holdevent_step2content").css("display", "block");
//         $(".holdevent_step3content").css("display", "none");
//         $(".step3").removeClass('color');
//     });

//     $(".3_nextStep").on("click", function () {
      
//         closeBox();
//     });



//     // 關閉燈箱
//     function closeBox() {
//         $(".backDrop,.lightbox_holdevent_info").animate({ "opacity": "0" }, 500);
//         $(".backDrop,.lightbox_holdevent_info").css("display", "none");

//         //揪團詳情
//         $(".backDrop,.lightbox_detailevent_info").animate({ "opacity": "0" }, 500);
//         $(".backDrop,.lightbox_detailevent_info").css("display", "none");

//         //檢舉
//         $(".backDrop,.lightbox_report_info").animate({ "opacity": "0" }, 500);
//         $(".backDrop,.lightbox_report_info").css("display", "none");

//     }
//     $(".close, .backDrop").on("click", function () {
//         closeBox();
//     });

//     //揪團詳情燈箱
//     $(".lightDetail").on("click", function () {
//         $(".backDrop").animate({ "opacity": ".70" }, 500);
//         $(".lightbox_detailevent_info").animate({ "opacity": "1.0" }, 500);
//         $(".backDrop, .lightbox_detailevent_info").css("display", "block");
//     });
//     //我要報名
//     $(".enroll, .backDrop").on("click", function () {
//         closeBox();
//     });


//     //檢舉揪團燈箱
//     $(".lightReport").on("click", function () {
//         $(".backDrop").animate({ "opacity": ".70" }, 500);
//         $(".lightbox_report_info").animate({ "opacity": "1.0" }, 500);
//         $(".backDrop, .lightbox_report_info").css("display", "block");
//     });
//     // 關閉揪團燈箱
//     $(".enter,.cancel, .backDrop").on("click", function () {
//         closeBox();
//     });


//     // -----------------------------------------------//

//     // new event輪播
//     //調整視窗-抓寬度
//     $(window).resize(function () {
//         getWidth();
//         $('#content').css({
//             left: divWidth * index * -1,
//             //調整後size圖片位置不會跑掉
//         });
//     });
//     getWidth();

//     function getWidth() {

//         divWidth = $('#slideBoard').width(); // div的寬度

//         imgCount = $('.newSlider').length;
//         $('#content').width(divWidth * imgCount); // ul的寬度

//         $('.newSlider').width(divWidth); // li的寬度
//     }


//     for (let i = 0; i < imgCount; i++) {
//         $('#contentButton').append('<li></li>');
//     }
//     $('#contentButton li:nth-child(1)').addClass('clickMe'); //第一個圈圈先變色

//     index = 0;

//     //手動輪播
//     $('#contentButton li').click(function () {
//         //alert($(this).index());
//         index = $(this).index();
//         $('#content').animate({
//             left: divWidth * index * -1,
//         });
//         $(this).addClass('clickMe');
//         $('#contentButton li').not(this).removeClass('clickMe');

//     });

//     //自動輪播
//     function autoPlay() {
//         setInterval(function () {
//             index++;
//             if (index == imgCount) {
//                 index = 0;
//             }
//             $('#content').animate({
//                 left: divWidth * index * -1,
//             });

//             $(`#contentButton li:nth-child(${index + 1})`).addClass('clickMe');
//             $('#contentButton li').not(`#contentButton li:nth-child(${index + 1})`).removeClass('clickMe');
//         }, 3500);
//     }

//     autoPlay();

//     // -----------------------------------------------//
//     //view more

//     $(".viewMore").on("click", function () {
//         // $(".cardBox2").css("display", "block");
//         $('.cardBox2').slideDown(1500);
      
        
//     });

// });
 

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
$(document).ready(function () {
    //發起揪團
    $(".lightbox").on("click", function () {
        $(".backDrop").animate({ "opacity": ".70" }, 500);
        $(".lightbox_holdevent_info").animate({"opacity": "1.0"}, 500);
        $(".backDrop, .lightbox_holdevent_info").css("display", "block");
    });


    $(".close, .backDrop").on("click", function () {
        closeBox();
    });

    function closeBox() {
        $(".backDrop,.lightbox_holdevent_info").animate({ "opacity": "0" }, 500);
        $(".backDrop,.lightbox_holdevent_info").css("display", "none");

        //揪團詳情
        $(".backDrop,.lightbox_detailevent_info").animate({ "opacity": "0" }, 500);
        $(".backDrop,.lightbox_detailevent_info").css("display", "none");

    }

    //揪團詳情
    $(".lightEvent").on("click",function(){
        $(".backDrop").animate({ "opacity": ".70" }, 500);
        $(".lightbox_detailevent_info").animate({"opacity": "1.0"}, 500);
        $(".backDrop, .lightbox_detailevent_info").css("display", "block");
    });


    //檢舉揪團
    $(".reportBtn").on("click",function(){
        $(".backDrop").animate({ "opacity": ".70" }, 500);
        $(".lightbox_report_info").animate({"opacity": "1.0"}, 500);
        $(".backDrop, .lightbox_report_info").css("display", "block");
    });

    
});

$(document).ready(function () {
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
    }
});

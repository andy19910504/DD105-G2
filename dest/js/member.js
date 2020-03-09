//nav
//按上面1到6個li 下面會變
for (let i = 1; i < 7; i++) {
    $(`.member_info_nav ul li:nth-child(${i}) img`).click(function () {
        // $(this).css("border", "1px solid red");
        //圖案會變
        $(this).css("opacity", ".2");
        $(".member_info_nav ul li img").not(this).css("opacity", "0");
        //字會改色
        $(this).parent().css("color", "#a5361c");
        $(".member_info_nav ul li img").not(this).parent().css("color", "#1e1e1e");
        // alert($(this).parent().text());
        //麵包的字會變
        $(".breadCrumb li:nth-child(3) a").text($(this).parent().text());
        //下面div會變
        $(`.member_info>div`).css("display", "none");
        $(`.member_info>div:nth-child(${i+1})`).css("display", "block");
        // //自己變大
        $(this).parent().css("transform","scale(1.2)");
        $(".member_info_nav ul li img").not(this).parent().css("transform","scale(1)");

    });

};
//編輯會員資料
// $(".member_info_info_right>div>img").css("border","1px solid red");
    
$(".member_info_info_right>div>img").click(function(){
    //動畫停止
    $(this).css("animation","unset")
    // //title變
    // $(".member_info_info_right div:nth-child(1) span").text("資料編輯中")
    //下面按鈕變
    $(".member_info_info_button>a").css("visibility","visible");

    //右邊資料欄位變可輸入
    $(".member_info_info_right div input").removeAttr("readonly");
    // $(".member_info_info_right div input").focus("border","3px dashed $importantColor");
    // $(".member_info_info_right div input:nth-child(0)").focus();
    //focus在第一個
    $(".member_info_info_right>div:nth-child(2) input").focus();
    // $(".member_info_info_right div input").css("border","1px solid #646464");
    // $(".member_info_info_right div input:focus").css("border","10px solid #646464");
    // alert($(".member_info_info_right div input").attr("readonly"))
    //左邊照相機出現
    // $(".member_info_info_left div div:nth-child(2) label").css("pointer-events","auto");
    $(".member_info_info_left div div:nth-child(2)").css("display","inline-block");
    // $(".member_info_info_left>label>div").css("border","1px solid #646464");
    $(".member_info_info_left>label").css("pointer-events","auto");
    $(".member_info_info_left>label>div").click(function(){
        $(this).css("border","3px dashed #a5361c");
    })
})
    


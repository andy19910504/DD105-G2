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
    
$(".pen").click(function(){
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
//下方修改確認 全部回復
$(".member_info_info_button>a").click(function(){
    $(this).css("visibility","hidden");
    $(".pen").css("animation","jump 1s infinite linear");
    $(".member_info_info_right div input").attr("readonly","true");
    $(".member_info_info_left div div:nth-child(2)").css("display","none");
    $(".member_info_info_left>label").css("pointer-events","none");


})
//路線的GOOGLE
navigator.geolocation.getCurrentPosition(succCallback,errorCallback,{
    enableHighAccuracy: false,
    timeout: 200000,
    maximumAge: 0,
});
function succCallback(e){
    let lati = e.coords.latitude;
    let longi = e.coords.longitude;
    let accuracy = e.coords.accuracy;

    if(accuracy > 100000){
        console.log("超過偵測範圍!");
    }else{
        console.log(`緯度: ${lati}<br>經度: ${longi}<br>準確度: ${accuracy} 公尺`);
    }

    //make a Google map
    let area = document.getElementById('member_map');
    let position = new google.maps.LatLng(lati, longi);
    let options = {
        zoom: 16,
        center: position,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    let map = new google.maps.Map(area,options);
    let marker = new google.maps.Marker({
        position,
        map,
        // icon: 'http://www.oxxostudio.tw/img/articles/201801/google-maps-3-marker-icon.png',
        title: '我在這裡',
        // label: 'ㄎㄎ',
        position: position,
        map: map,
        animation: google.maps.Animation.DROP,
        animation: google.maps.Animation.BOUNCE
    });
}
function errorCallback(e){
    alert(`錯誤碼: ${e.code}\n錯誤訊息: ${e.message}`);
}
    


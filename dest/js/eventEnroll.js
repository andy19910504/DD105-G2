let member;

// 判斷各頁面是否再登入狀態
function getLoginInfo() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        member = JSON.parse(xhr.responseText);
        console.log(member)
    }
    xhr.open("get", "./php/loginInfoForFront.php", true);
    xhr.send(null);
}; 

window.addEventListener("load", function () {
    // // 檢查是否為登入狀態
    getLoginInfo();

});
function insertEnroll(e) {
    //阻止預設送出事件
    e.preventDefault();

    //先抓取被選到的 揪團編號+會員編號
    let enroll_event_number = $(this).parent().parent().parent().parent().attr('psn'); //揪團編號
    let member_number = member.memNum; //會員編號

    
    //先判斷是否有登入會員
    let login = $('.sign').text();
    console.log(login); 
   
    if (login == "登入登入") {  //顯示登入登入--->未登入跳出提醒
        alert("請先登入喔~!");
        return;
    }
   
    //把抓到的值放到html中一個隱藏的表單內
    document.getElementById("enroll_event_number").value =  enroll_event_number;
    document.getElementById("member_number").value =   member_number ;

    // -------------------測試值是否正確放入表單--------------------
    console.log("----------------------");
    console.log(document.getElementById("enroll_event_number").value);
    console.log(document.getElementById("member_number").value);
    console.log("----------------------");
    // ------------------------------------------------------------

    // 用那個表單建立一個JS表單物件
    var updateFormData = new FormData(document.getElementById("eventEnrollForm"));

    // 將表單物件的資料送到insertKeyword.php中執行修改資料內容的SQL指令
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            //alert(xhr.responseText);
        } else {
            alert(xhr.status + "失敗");
        }
    }

    xhr.open("Post", "./php/enrollEvent.php", true);
    xhr.send(updateFormData);
    let eventreport_back = $('.eventinfo_back');
    eventreport_back.css('display', 'none');

    alert("報名成功!");

}
//註冊我要報名click事件
$(document).on('click', '.btnEnroll', insertEnroll);




function insertRow(e) {
    //阻止預設送出事件
    e.preventDefault();
    //先抓被填入的值
    let route_number = $('#routeNum').val(); //抓被點選的路線編號
    let event_name = $('#actTitle').val();
    let event_date = $('#actDate').val();
    let meeting_place = $('#meetPlace').val();
    let max_attendance = $('#maxPeople :selected').val();
    let event_information = $('#eventInfo').val();
    // let event_cover_url = $('#satausInsert').val();


    ////把抓到的值放到html中一個隱藏的表單內
    document.getElementById("route_number").value = route_number;
    document.getElementById("event_name").value = event_name;
    document.getElementById("event_date").value = event_date;
    document.getElementById("meeting_place").value = meeting_place;
    document.getElementById("max_attendance").value = max_attendance;
    document.getElementById("event_information").value = event_information;
    // document.getElementById("event_cover_url").value = event_cover_url;

    //-------------------測試值是否正確放入表單--------------------
    console.log(document.getElementById("route_number").value);
    console.log(document.getElementById("event_name").value);
    console.log(document.getElementById("event_date").value);
    console.log(document.getElementById("meeting_place").value);
    console.log(document.getElementById("max_attendance").value);
    console.log(document.getElementById("event_information").value);
    // console.log(document.getElementById("event_cover_url").value);
    //------------------------------------------------------------

    //用那個表單建立一個JS表單物件
    var updateFormData = new FormData(document.getElementById("myForm"));

    //將表單物件的資料送到insertKeyword.php中執行修改資料內容的SQL指令
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            alert(xhr.responseText);
        } else {
            alert(xhr.status + "失敗");
        }
    }

    xhr.open("Post", "./php/insertEvent.php", true);
    xhr.send(updateFormData);

    location.reload();
    alert("發揪團成功!");
}

//點選路線跳出路線名稱+景點
$(document).ready(function () {
    $('.routeChose').click(function () {
        let routeName = $(this).children().last().children('p').text();
        let attractions = $(this).children().last().children('input').val();
        let routeNum = $(this).attr('psn');
        console.log(routeNum)
        //每次點選都清空
        $('.routeClick').text('');
        //append 點選到的路線和景點+路線編號
        $(`<p class="routeName">選擇路線:${routeName}</p> <p class="attractions">景點:${attractions}</p> <input type="hidden" name="routeNum" id="routeNum" value="${routeNum}">`).appendTo('.routeClick');

    })
    ////把第二步驟抓到的值放到第三步驟
    let checkRoute = $('.routeName').text().substring(5);//抓被點選的路線名稱
    let checkAtractions = $('.attractions').text().substring(3);//抓被點選的景點

    let event_name = $('#actTitle').val();
    let event_date = $('#actDate').val();
    let meeting_place = $('#meetPlace').val();
    let max_attendance = $('#maxPeople :selected').val();
    let event_information = $('#eventInfo').val();
    // let event_cover_url = $('#satausInsert').val();
    $('#checkRoute').text() = checkRoute;
    $('#checkAtractions').text() = checkAtractions;
    $('#checkTitle').text() = event_name;
    $('#checkDate').text() = event_date;
    $('#checkPlace').text() = meeting_place;
    $('#checkPeople').text() = max_attendance;
    $('#checkInfo').text() = event_information;
    // document.getElementById("event_cover_url").value = event_cover_url;
});


// 動態新增路線
// function LightEventRouteinfo(routes) {
//     let routeAllBox = $id("routeAllBox");
//     let routetable = JSON.parse(routes);//把JSON字串翻譯成JS物件

//     // ---------------官方路線---------------
//     let routeOfficial = routetable.routeInfo; //取出官方路線
//     let officialRouteTable = []; //先建一個新陣列,要把同官方路線的景點串一起
//     routeOfficial.forEach((item) => {
//         //避免陣列第0筆就上傳,所以預設-1
//         const str = item.route_number - 1;
//         if (typeof officialRouteTable[str] === 'undefined') { //放入新陣列
//             officialRouteTable[str] = item;
//         }
//         else {
//             officialRouteTable[str].attraction_name += `->${item.attraction_name}`;
//         }
//     });
//     console.log(officialRouteTable);

//     // ---------------自訂路線---------------
//     let routeMember = routetable.customInfo; //取出官方路線
//     let memberRouteTable = []; //先建一個新陣列,要把同官方路線的景點串一起
//     routeMember.forEach((item) => {
//         //避免陣列第0筆就上傳,所以預設-1
//         const a = item.route_number; // 0
//         if (typeof memberRouteTable[a] === 'undefined') { //放入新陣列
//             memberRouteTable[a] = item;
//         }
//         else {
//             memberRouteTable[a].custom_attraction_name += `->${item.custom_attraction_name}`;
//         }

//     });
//     let memberRouteNew = memberRouteTable.filter(item => item); //清除中間空陣列
//     console.log(memberRouteNew);

//     let html = "";

//     for (i = 0; i < officialRouteTable.length; i++) {
//         html += `
//         <div class="routeBox routeChose" psn="${officialRouteTable[i]['route_number']}">
//             <div class="routeBoxImg">
//                 <img src="./img/event/event_route${officialRouteTable[i]['route_number']}" alt="">
//             </div>
//             <div class="routeBoxBottom">
//                 <p class="routeName">${officialRouteTable[i]['route_name']}</p>
//                 <input type="hidden" name="route" id="officialRoute${officialRouteTable[i]['route_number']}" value="${officialRouteTable[i]['attraction_name']}">
//             </div>
//         </div>
//         `
//     }
//     for (j = 0; j <memberRouteNew.length; j++) {
//         html += `
//         <div class="routeBox routeChose" psn="${memberRouteNew[j]['route_number']}">
//             <div class="routeBoxImg">
//                 <img src="./img/event/event_cusRout.jpg" alt="">
//             </div>
//             <div class="routeBoxBottom">
//                 <p class="routeName">${memberRouteNew[j]['route_name']}</p>
//                 <input type="hidden" name="route" id="memberRoute${memberRouteNew[j]['route_number']}" value="${memberRouteNew[j]['custom_attraction_name']}">
//             </div>
//         </div> 
//         `
//     }
//     html += `
//     <div class="routeBox">
//         <div class="addroute">
//             <a href="#">
//                 自訂路線
//             </a>
//         </div>
//     </div>
//     `
//     routeAllBox.innerHTML = html;
// }

// 確認有撈到路線資料
function checkRoute() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            //正確到php撈資料
            LightEventRouteinfo(xhr.responseText);

        } else {
            alert(xhr.status);
        }

    };
    xhr.open("Get", "./php/getEventRouteList.php", true);
    xhr.send(null);
}

//點擊上下一步
function step() {
    //上一步
    $(".backStep").click(function () {
        //換div
        $(this).parent().parent().prev().css('display', 'flex');

        $(this).parent().parent().css('display', 'none');

    });
    //下一步
    $(".nextStep").click(function () {
        //換div
        $(this).parent().parent().next().css('display', 'flex');
        $(this).parent().parent().css('display', 'none');
    });

}
//開燈箱
function showLightBox() {
    let login = $('.sign').text();

    if (login == "登入登入") { //顯示登入登入--->未登入跳出提醒
        alert("請先登入喔~!");
        return;
    }
    else {  //已登入則打開燈箱
        $('#eventhold_back').css('display', 'flex');
        checkRoute(); //撈官方+自訂路線
        step(); //上下一步btn
    }
}
//關燈箱
function closeLightBox() {
    $('#eventhold_back').css('display', 'none');
}

// 開啟燈箱
$(document).on('click', '.eventInsert', showLightBox);
//關燈箱
$(document).on('click', '.eventhold_close', closeLightBox);
//送出表單
$(document).on('click', '.send', insertRow);

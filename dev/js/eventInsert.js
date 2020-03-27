
// function insertRow(e) {
//     //阻止預設送出事件
//     e.preventDefault();
//     //先抓取新增關鍵字表單內被填入的值
//     let keywordWord = $('#keywordInsert').val();
//     let keywordAns = $('#answerInsert').val();
//     let keywordStatus = $('#satausInsert').val();
//     console.log(keywordWord, keywordAns, keywordStatus);

//     ////把抓到的值放到html中一個隱藏的表單內
//     document.getElementById("keywordWord").value = keywordWord;
//     document.getElementById("keywordAns").value = keywordAns;
//     document.getElementById("keywordStatus").value = keywordStatus;

//     //-------------------測試值是否正確放入表單--------------------
//     console.log("----------------------");
//     console.log(document.getElementById("keywordWord").value);
//     console.log(document.getElementById("keywordAns").value);
//     console.log(document.getElementById("keywordStatus").value);
//     console.log("----------------------");
//     //------------------------------------------------------------

//     //用那個表單建立一個JS表單物件
//     var updateFormData = new FormData(document.getElementById("myForm"));

//     //將表單物件的資料送到insertKeyword.php中執行修改資料內容的SQL指令
//     let xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//         if (xhr.status == 200) {
//             alert(xhr.responseText);
//         } else {
//             alert(xhr.status + "失敗");
//         }
//     }

//     xhr.open("Post", "./php/insertEvent.php", true);
//     xhr.send(updateFormData);

//     location.reload();
//     alert("發揪團成功!");
// }


// 動態新增路線
function LightEventRouteinfo(routes) {
    let routeAllBox = $id("routeAllBox");
    let routesTable = JSON.parse(routes);//把JSON字串翻譯成JS
    let html = "";

    for (i = 0; i < routeInfo.routesTable.length; i++) {
        html += `
        <div class="routeBox routeChose">
            <div class="routeBoxBottom">
                <p class="routeName">${routeInfo.routesTable[i].route_name}</p>
                <input type="hidden" name="attractions" class="attractions">
            </div>
        </div>
        `;
    }
    routeAllBox.innerHTML = html;
}

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
// $(document).on('click', '.send', insertRow);



// 判斷各頁面是否再登入狀態
let origin_member_number;
function getLoginInfo() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        origin_member_number = JSON.parse(xhr.responseText);
        console.log(origin_member_number)
        
    }
    xhr.open("get", "./php/loginInfoForFront.php", true);
    xhr.send(null);
};
window.addEventListener("load", function () {
    // // 檢查是否為登入狀態
    getLoginInfo();
});
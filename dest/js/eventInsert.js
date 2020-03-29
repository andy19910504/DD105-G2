
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
    let routetable = JSON.parse(routes);//把JSON字串翻譯成JS物件

    // ---------------官方路線---------------
    let routeOfficial = routetable.routeInfo; //取出官方路線
    let officialRouteTable = []; //先建一個新陣列,要把同官方路線的景點串一起
    routeOfficial.forEach((item) => {
        //避免陣列第0筆就上傳,所以預設-1
        const str = item.route_number - 1;
        if (typeof officialRouteTable[str] === 'undefined') { //放入新陣列
            officialRouteTable[str] = item;
        }
        else {
            officialRouteTable[str].attraction_name += `->${item.attraction_name}`;
        }
    });
    console.log(officialRouteTable);

    // ---------------自訂路線---------------
    let routeMember = routetable.customInfo; //取出官方路線
    let memberRouteTable = []; //先建一個新陣列,要把同官方路線的景點串一起
    routeMember.forEach((item) => {
        //避免陣列第0筆就上傳,所以預設-1
        const a = item.route_number; // 0
        if (typeof memberRouteTable[a] === 'undefined') { //放入新陣列
            memberRouteTable[a] = item;
        }
        else {
            memberRouteTable[a].custom_attraction_name += `->${item.custom_attraction_name}`;
        }

    });
    let memberRouteNew = memberRouteTable.filter(item => item); //清除中間空陣列
    console.log(memberRouteNew);

    // let html = "";


    // for (i = 0; i < officialRouteTable.length; i++) {
    //     html += `
    //     <div class="routeBox routeChose">
    //         <div class="routeBoxBottom">
    //             <p class="routeName">${officialRouteTable[i]['route_name']}</p>
    //             <input type="hidden" name="route" id="officialRoute${officialRouteTable[i]['route_number']}" value="${officialRouteTable[i]['attraction_name']}">
    //         </div>    
    //     </div>
    //     `
    // }
    // for (j = 0; j <memberRouteNew.length; j++) {
    //     html += `
    //     <div class="routeBox routeChose">
    //         <div class="routeBoxBottom">
    //             <p class="routeName">${memberRouteNew[j]['route_name']}</p>
    //             <input type="hidden" name="route" id="memberRoute${memberRouteNew[j]['route_number']}" value="${memberRouteNew[j]['custom_attraction_name']}">
    //         </div>
    //     </div>
    //     `
    // }

    // routeAllBox.innerHTML = html;
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

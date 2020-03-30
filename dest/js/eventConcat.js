function $id(id) {
    return document.getElementById(id);
}
function showEventInfo() {
    let eventinfo_back = document.querySelectorAll(".eventinfo_back");
    let lightDetail = document.querySelectorAll(".lightDetail");

    for (let j = 0; j < eventinfo_back.length; j++) {
        lightDetail[j].onclick = function (e) {
            e.preventDefault();
            eventinfo_back[j].style.display = "flex";

        }
    }
}
// 動態新增燈箱-活動詳情
function LightEventinfo(events) {
    let eventinfoLight = $id("eventinfoLight");
    let eventTable = JSON.parse(events);//把JSON字串翻譯成JS
    let html = "";

    for (i = 0; i < eventTable.length; i++) {
        html += `
    <div id="event${eventTable[i].event_number}" class="eventinfo_back" psn="${eventTable[i].event_number}">
        <div class="lightbox_detailevent">
            <div class="lightbox_detailevent_info">
                    <div class="close eventinfoClose">✘</div>
                    <div class="detaileventContent">
                        <div class="detaileventPic">
                            <div class="title">
                                <div class="eventInfotitle">${eventTable[i].event_name}</div>
                                <div class=" dotWrap lightReport">
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                </div>
                            </div>
                            <div class="detaileventPicbox">
                                <img src="./img/eventPhoto/${eventTable[i].event_cover_url}">
                            </div>
                            <div class="detaileventRoute">
                                <p>${eventTable[i].route_name}</p>
                                <p>台北101 -> 台北101 -> 台北101</p>
                            </div>
                        </div>
                        <div class="detaileventText">
                            <form action="">
                                <div class="eventInforow">
                                    <div class="eventrowTitle">活動日期</div>
                                    <div>${eventTable[i].event_date}</div>
                                </div>
                                <div class="eventInforow">
                                    <div class="eventrowTitle">報名截止日</div>
                                    <div>${eventTable[i].enroll_end_date}</div>
                                </div>

                                <div class="eventInforow">
                                    <div class="eventrowTitle">集合地點</div>
                                    <div>${eventTable[i].meeting_place}</div>
                                </div>
                                <div class="eventInforow">
                                    <div class="eventrowTitle">報名人數上限</div>
                                     <div>${eventTable[i].max_attendance}位</div>
                                </div>
                                <div class="eventInforow">
                                    <div class="eventrowTitle">活動介紹</div>
                                    <div>${eventTable[i].event_information}</div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="enroll">
                            <a href="#" class="btnRed btnEnroll">
                            我要報名
                            </a>
                    </div>
            </div>
        </div>
    </div>
        `;
    }
    eventinfoLight.innerHTML = html;
    showEventInfo();
}

window.addEventListener("load", function () {

    // 當點選filter時，顯示對應的揪團資訊
    $(document).on('click', '.filter', function () {
        let eventConcat = $(this).text();
        let concatForm = new FormData();
        concatForm.append('eventConcat', eventConcat);

        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                // 新增卡片
                let cardBox = $id("cardBox");
                let eventTable = JSON.parse(xhr.responseText);//把JSON字串翻譯成JS
                console.log(eventTable);
                let html = "";

                for (i = 0; i < eventTable.length; i++) {
                    html += `
                <div class="eventCard wow zoomIn">
                    <div class="cardTop">
                    `
                    if (eventTable[i].member_number == null) {
                        html += `
                        <div class="starMark">
                            <div><img src="./img/event/event_star.png" alt=""></div>
                            <div class="markWord">官方路線</div>
                        </div>
                        `
                    } else {
                        html += `<div class="starMark"></div>`
                    }
                    html += `
                        <div class="dotWrap">
                        </div>
                    </div>
                    <div class="eventPicWrap">
                        <img src="./img/eventPhoto/${eventTable[i].event_cover_url}" class="eventPic">
                    </div>
                    <div class="cardText">
                        <h1>${eventTable[i].event_name}</h1>
                        <p>
                            活動日期:${eventTable[i].event_date}<br>
                            報名截止:${eventTable[i].enroll_end_date}<br>
                            集合地點:${eventTable[i].meeting_place}
                        </p>
                        <span id="more${eventTable[i].event_number}" class="lightDetail">more</span>
                    </div>
                </div> 
                `;
                }
                cardBox.innerHTML = html;
            } else {
                alert(xhr.status + "失敗");
            }
            LightEventinfo(xhr.responseText);
        }
        xhr.open("Post", "./php/getEventForConcat.php", true);
        xhr.send(concatForm);

    })

    // 開關詳細揪團資訊的燈箱
    $(document).on('click', '.eventinfoClose', function () {
        let eventinfo_back = document.querySelectorAll(".eventinfo_back");
        for (let j = 0; j < eventinfo_back.length; j++) {
            eventinfo_back[j].style.display = "none";
        }
    })

    // 檢舉揪團
    //註冊開檢舉燈箱...的click事件
    $(document).on('click', '.lightReport', function showEventReport() {
        let eventreport_back = $('#eventreport_back');
        eventreport_back.css('display', 'flex');
    });

    //註冊關閉檢舉燈箱的click事件
    $(document).on('click', '.reportCancel', function closeEventReport() {
        let eventreport_back = $('#eventreport_back');
        eventreport_back.css('display', 'none');

    });
    //註冊送出檢舉的click事件
    $(document).on('click', '.reportEnter', function insertRow(e) {
        //阻止預設送出事件
        e.preventDefault();

        //先抓取被選到的 揪團編號
        let event_number;
        children = $('#eventinfoLight').children().length; //6
        for (i = 0; i < children; i++) {
            theCSS = $(`.eventinfo_back:nth-child(${i + 1})`).css('display');
            console.log(theCSS)
            if (theCSS == 'flex') {
                event_number = $(`.eventinfo_back:nth-child(${i + 1})`).attr('psn')
            }

        }
        //再抓檢舉原因
        let eventReportReason = $('input[name=reason]:checked').val();
        //先判斷是否有登入會員
        let login = $('.sign').text();
        console.log(login);
        if (login == "登入登入") {  //顯示登入登入--->未登入跳出提醒
            alert("請先登入喔~!");
            return;
        }
        //先判斷是否有選檢舉原因
        if (eventReportReason == null) { //沒選檢舉原因
            alert("原因一定要選喔~~~~");
            return;
        }

        ////把抓到的值放到html中一個隱藏的表單內
        document.getElementById("event_number").value = event_number;
        document.getElementById("event_report_reason").value = eventReportReason;

        //-------------------測試值是否正確放入表單--------------------
        console.log("----------------------");
        console.log(document.getElementById("event_number").value);
        console.log(document.getElementById("event_report_reason").value);
        console.log("----------------------");
        //------------------------------------------------------------

        //用那個表單建立一個JS表單物件
        var updateFormData = new FormData(document.getElementById("eventReportForm"));

        //將表單物件的資料送到insertKeyword.php中執行修改資料內容的SQL指令
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                //alert(xhr.responseText);
            } else {
                alert(xhr.status + "失敗");
            }
        }

        xhr.open("Post", "./php/insertEventReport.php", true);
        xhr.send(updateFormData);
        let eventreport_back = $('#eventreport_back');
        eventreport_back.css('display', 'none');

        alert("檢舉成功!");

    });
    //註冊我要報名click事件
    $(document).on('click', '.btnEnroll', function insertEnroll(e) {
        //阻止預設送出事件
        e.preventDefault();

        //先抓取被選到的 揪團編號+會員編號
        let enroll_event_number = $(this).parent().parent().parent().parent().attr('psn'); //揪團編號
        // let member_number = member_number.memNum; //會員編號


        //先判斷是否有登入會員
        let login = $('.sign').text();
        console.log(login);

        if (login == "登入登入") {  //顯示登入登入--->未登入跳出提醒
            alert("請先登入喔~!");
            return;
        }

        //把抓到的值放到html中一個隱藏的表單內
        document.getElementById("enroll_event_number").value = enroll_event_number;
        // document.getElementById("member_number").value = member_number ;

        // -------------------測試值是否正確放入表單--------------------
        console.log("----------------------");
        console.log(document.getElementById("enroll_event_number").value);
        // console.log(document.getElementById("member_number").value);
        console.log("----------------------");
        // ------------------------------------------------------------

        // 用那個表單建立一個JS表單物件
        var updateFormData = new FormData(document.getElementById("eventEnrollForm"));

        // 將表單物件的資料送到insertKeyword.php中執行修改資料內容的SQL指令
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                alert(xhr.responseText);
            } else {
                alert(xhr.status + "失敗");
            }
        }

        xhr.open("Post", "./php/enrollEvent.php", true);
        xhr.send(updateFormData);
        let eventreport_back = $('.eventinfo_back');
        eventreport_back.css('display', 'none');

        alert("報名成功!");

    });
});




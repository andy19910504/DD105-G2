function $id(id) {
    return document.getElementById(id);
}

// 動態新增卡片資料
function eventCard(event) {
    let cardBox = $id("cardBox");
    let eventTable = JSON.parse(event);//把JSON字串翻譯成JS
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
                <div class="dotWrap lightReport">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
            <div class="eventPicWrap">
                <img src="./img/event/eventPic${eventTable[i].event_cover_url}" class="eventPic">
            </div>
            <div class="cardText">
                <h1>${eventTable[i].event_name}</h1>
                <p>
                    活動日期:${eventTable[i].event_date}<br>
                    報名截止:${eventTable[i].enroll_end_date}<br>
                    集合地點:${eventTable[i].meeting_place}
                </p>
                <span class="lightDetail" id="lightDetail">more</span>
            </div>
        </div> 
        `;
    }
    cardBox.innerHTML = html;
}




// 動態新增卡片詳情燈箱
function LightEventinfo(event) {
    let eventinfoLight = $id("eventinfoLight");
    let eventTable = JSON.parse(event);//把JSON字串翻譯成JS
    let html = "";

    for (i = 0; i < eventTable.length; i++) {
        html += `
        <div class="eventinfo_back" id="eventinfo_back">
            <div class="detailevent lightbox_detaileven">
                <div class="lightbox_detailevent_info">
                    <div class="close">✘</div>
                    <div class="detaileventContent">
                        <div class="detaileventPic">
                            <div class="title">
                                <div class="eventInfotitle">${eventTable[i].event_name}</div>
                                <div class=" dotWrap lightReport ">
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                    <span class="dot"></span>
                                </div>
                            </div>
                            <div class="detaileventPicbox">
                                <img src="./img/event/${eventTable[i].event_cover_url}" alt="">
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
                                    <div>2020-02-28(五)</div>
                                </div>
                                <div class="eventInforow">
                                    <div class="eventrowTitle">集合時間</div>
                                    <div>8:30</div>
                                </div>
                                <div class="eventInforow">
                                    <div class="eventrowTitle">集合地點</div>
                                    <div>信義新光三越</div>
                                </div>
                                <div class="eventInforow">
                                    <div class="eventrowTitle">報名人數上限</div>
                                     <div>5位</div>
                                </div>
                                <div class="eventInforow">
                                    <div class="eventrowTitle">活動介紹</div>
                                    <div>故宮好好玩喔~~</div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="enroll">
                        @@include('./layout/btnRed.html',{
                        "link":"#",
                        "innerText":"我要報名"
                        })
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    eventinfoLight.innerHTML = html;

}
window.addEventListener("load", function () {
    
    let eventinfo_back = document.querySelectorAll(".eventinfo_back");
    let lightDetail = document.querySelectorAll(".lightDetail");
    console.log( lightDetail)
    for (i = 0; i < lightDetail.length; i++) {
        lightDetail[i].addEventListener("click", function () {
            eventinfo_back[i].style.display = 'flex';

        });
    }

});


function check() {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status == 200) {
            //正確到php撈資料
            eventCard(xhr.responseText);
            LightEventinfo(xhr.responseText);

        } else {
            alert(xhr.status);
        }

    };
    xhr.open("Get", "./php/eventCard.php", true);
    xhr.send(null);
}

window.addEventListener("load", function () {
    check();


}, false);
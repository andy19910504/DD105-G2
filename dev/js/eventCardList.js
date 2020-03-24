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
                <div class="dotWrap">
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
                <span id="more${eventTable[i].event_number}" class="lightDetail">more</span>
            </div>
        </div> 
        `;
    }
    cardBox.innerHTML = html;
}

// 確定是否有撈到資料
function check() {
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        if (xhr.status == 200) {
            //正確到php撈資料
            eventCard(xhr.responseText);
        } else {
            alert(xhr.status);
        }

    };
    xhr.open("Get", "./php/eventCard.php", true);
    xhr.send(null);
}


window.addEventListener("load", check());



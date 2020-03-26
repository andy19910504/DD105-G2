//留言 函式
function leaveMsg(){
    alert(111)
}

//動態顯示心情燈箱內資料 函式
function showMoodDatail(moodDatailData){
    let moodLightBox = document.getElementById('moodLightBox');
    let DatailAll = JSON.parse(moodDatailData);
    console.log(DatailAll);
    let html = "";
    html +=`
        <div class="moodDetailBlock">
            <!-- 檢舉按鈕 -->
            <div id="reportBtn">
                <span class="dot1"></span>
                <span class="dot2"></span>
            </div>
            <!-- 叉叉按鈕 -->
            <div id="closeMoodBtn">
                <span class="line1"></span>
                <span class="line2"></span>
            </div>
            <!-- 左邊區塊 -->
            <div class="moodDetailLeftBox">
                <div class="moodDetailInfoBar">
                    <div class="moodDetailMemberPhoto"><img src="./img/memberPhoto/${DatailAll.moodData.member_photo}"></div>
                    <div class="moodDetailInfoWrap">
                        <span class="moodDetailClass">${DatailAll.moodData.mood_class}</span>
                        <div class="moodDetailInfoBox">
                            <span class="moodDetailMemId">${DatailAll.moodData.member_name}</span>
                            <span class="moodDetailDate">${DatailAll.moodData.mood_date}</span>
                        </div>
                    </div>
                </div>

                <div class="moodDetailPhotoWrap">
                    <img src="./img/moodPhoto/${DatailAll.moodData.mood_photo}">
                </div>
                
                <div class="moodDetailContent">
                    ${DatailAll.moodData.mood_content}
                </div>
            </div>
            <!-- 右邊區塊 -->
            <div class="moodDetailRightBox">
                <h2>留言板</h2>
                <div class="messageWrap">`
                    for(m = 0; m<DatailAll.moodMsg.length; m++){
                        html += `
                        <div class="messageBox">
                            <span>${DatailAll.moodMsg[m].message_from}</span> 說: <br>
                            <p>${DatailAll.moodMsg[m].message_content}</p>
                        </div>
                        `
                    }
        html +=`</div>
                <form id="leaveMsgForm">
                    <input type="text" name="leaveMsg" id="leaveMsg" placeholder="寫下留言">
                    <input type="hidden" name="leaveMsgMoodNum" value="${DatailAll.moodData.mood_number}">
                </form>
                <button class="btnPink" id="leaveMsgBtn">送出</button>
            </div>
        </div>

        <!-- 檢舉 燈箱 -->
        <div class="reportLightBox">
            <div class="reportBlock">
                <h2>協助我們了解情況?</h2>
                <form id="reportForm">
                    <div>
                        <input type="radio" name="reportReason" id="reason1" value="色情暴力等不當內容"> <label for="reason1">色情暴力等不當內容</label>
                    </div>
                    <div>
                        <input type="radio" name="reportReason" id="reason2" value="歧視謾罵他人"> <label for="reason2">歧視謾罵他人</label>
                    </div>
                    <div>
                        <input type="radio" name="reportReason" id="reason3" value="其他違規違法項目"> <label for="reason3">其他違規違法項目</label>
                    </div>
                    <input type="hidden" name="reportMoodNum" value="${DatailAll.moodData.mood_number}">
                </form>
                <div>
                    <button class="btnPink" id="newReportBtn">確定</button>
                    <button class="btnPink" id="closeReportBtn">取消</button>
                </div>
            </div>
        </div>
    `
    moodLightBox.innerHTML = html;

    //關燈箱
    $("#closeMoodBtn").on("click", function () {
        $(".moodLightBox").css("display", "none");
    })

    //檢舉 燈箱的開、關----------------------------------
    $("#reportBtn").on("click", function () {
        $(".reportLightBox").css("display", "flex");
    })
    $("#closeReportBtn").on("click", function () {
        $(".reportLightBox").css("display", "none");
    })

    //留言
    $("#leaveMsgBtn").on("click",function(){
        leaveMsg();
    })
}


//動態新增心情卡片 函式
function showCards(moodData){
    let moodCardsWrap = document.getElementById('moodCardsWrap');
    let moodAll = JSON.parse(moodData) //把JSON字串翻譯成JS物件，物件有兩個屬性，屬性的內容是陣列，陣列的一個索引指向一張卡片
    // console.log(moodAll);

    let html = "";
    //根據moodCard的長度數動態新增卡片
    for (i = 0; i < moodAll.moodCard.length; i++) {

        html += `
                <div class="moodCard">
                    <input type="hidden" name="cardMoodNum" class="cardMoodNum" value="${moodAll.moodCard[i].mood_number}">
                    <div class="cardInfoBar">
                        <div class="moodMemberPhoto"><img src="./img/memberPhoto/${moodAll.moodCard[i].member_photo}"></div>
                        <div class="infoTextWrap">
                            <span class="moodClass">#${moodAll.moodCard[i].mood_class}</span>
                            <div class="moodInfoBox">
                                <span class="moodMemId">${moodAll.moodCard[i].member_name}</span>
                                <span class="moodDate">${moodAll.moodCard[i].mood_date}</span>
                            </div>
                        </div>
                    </div>
                    <div class="moodPicWrap">
                        <img src="./img/moodPhoto/${moodAll.moodCard[i].mood_photo}" class="moodPic">
                    </div>
                    <div class="heartBar">
                        <img src="./img/index/moodLikeIconGray.png" class="heartIcon">
                        <span class="heartCountBoard">${moodAll.moodCard[i].mood_heart}</span>
                        <img src="./img/index/moodChatIcon.png"class="chatIcon">
                        <span class="msgCount">${moodAll.moodMsg[i]['moodMsgCount']}</span>
                    </div>
                    <div class="cardText">
                        <p>
                        ${moodAll.moodCard[i].mood_content}
                        </p>
                        <span class="cardMoreBtn">more</span>
                    </div>
                </div>
                `
    }
    moodCardsWrap.innerHTML = html;

    //心情詳細 燈箱的開-------------------------------
    $(".cardMoreBtn").on("click", function () {
        //-------------撈取此張卡片的資料--------------------------
        let thisMoodNum = $(this).parent().parent().children().first().val();
        document.getElementById("moodNumFormInput").value = thisMoodNum;
        let moodNumForm = new FormData(document.getElementById("moodNumForm"));

        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                showMoodDatail(xhr.responseText);
            } else {
                alert(xhr.status + "失敗");
            }
        }

        xhr.open("Post", "./php/getMoodDatail.php", true);
        xhr.send(moodNumForm);
        //----------------------------------------------------
        $(".moodLightBox").css("display", "flex");
    })

    //愛心icon的click事件
    $(".heartIcon").on("click",function(e){
        e.target.src = "./img/index/moodLikeIcon.png"
        let thisMoodNum = $(this).parent().parent().children().first().val();
        let thisHeartCount = $(this).next().text();
        $(this).next().text(parseInt(thisHeartCount) + 1);
        let heartFormData = new FormData();
        heartFormData.append('moodNum',thisMoodNum);
        heartFormData.append('heartCount',thisHeartCount);


        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                //即時更新網頁上的愛心數
                
            } else {
                alert(xhr.status + "失敗");
            }
        }

        xhr.open("Post", "./php/addMoodHeart.php", true);
        xhr.send(heartFormData);

        $(this).off("click");
    })
   
}


//更改排序方式 函式
// function changeOrder(){
//     let moodClass = $(".showFilter")[0].innerText;
//     let whereSql = "where mo.mood_status = 1";
//     if(moodClass != "全部"){
//         whereSql += ` and mo.mood_class = '${moodClass}' `
//     }
//     let orderSelect = $("#orderSelect").val(); 
//     console.log(moodClass,orderSelect,whereSql);

//     // let dataInfo = `whereSql=${whereSql}&orderSelect=${orderSelect}`
//     let Orderform = new FormData()
//     Orderform.append('whereSql',whereSql);
//     Orderform.append('orderSelect',orderSelect);

//     let xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//         if (xhr.status == 200) {
//             alert(xhr.responseText)
//             showCards(xhr.responseText);
//         } else {
//             alert(xhr.status + "失敗");
//         }
//     }
//     xhr.open("Post", "./php/getMoodCardsOrderBy.php", true);
//     xhr.send(Orderform);
// }

//撈取心情卡片 函式
function getMoodCards(moodClass) {
    let xhr = new XMLHttpRequest();
    let url = "./php/getMoodCards" + moodClass + ".php";
    console.log(url);
    xhr.onload = function () {
        if (xhr.status == 200) {
            //到php撈所有心情的資料，送到showCards函式中執行
            showCards(xhr.responseText);
        } else {
            alert(xhr.status + "失敗");
        }
    }
    xhr.open("Get", url, true);
    xhr.send(null);
}




//新增心情 預覽上傳圖片處理函式---------------------------
function imgChange() {
    let file = document.getElementById('inputImg').files[0];
    //============讀取檔案內容(圖片)
    let readFile = new FileReader();  //---物件
    readFile.readAsDataURL(file);
    readFile.addEventListener('load', function () {
        let image = document.getElementById('viewImg');
        image.src = this.result;
    });
}

window.addEventListener('load', function () {
    //撈取心情卡片---------------------------------
    getMoodCards("All");

    //註冊4顆心情分類按鈕的click事件
    $("#filter1").on("click",function(){
        getMoodCards("All");
    });
    $("#filter2").on("click",function(){
        getMoodCards("Type1");
    });
    $("#filter3").on("click",function(){
        getMoodCards("Type2");
    });
    $("#filter4").on("click",function(){
        getMoodCards("Type3");
    });

    //註冊排序方式select的onchange事件
    // $("#orderSelect").on("change",function(){
    //     changeOrder();
    // });
    

    //新增心情 燈箱的開、關--------------------------
    $("#newMoodBtn").on("click", function () {
        $("#newMoodLightBox").css("display", "flex");
    })
    $("#closeNewMoodBtn").on("click", function () {
        $("#newMoodLightBox").css("display", "none");
    })

    //新增心情 註冊預覽上傳圖片---------------------------
    document.getElementById('inputImg').onchange = imgChange;

})

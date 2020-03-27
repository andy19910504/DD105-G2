let memNum;
 

/////////////////////////////////////////////////////////////////////第二頁放路線
function getLineInfo(memNum) {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {

        var geocoder;
        var map;
        var markers = [];
        var addresses = [];
        var spots = [];
        var customRouteName = '';
        var customRouteDesc = '';
        var infowindows = [];
        var styles = [];
        var daytime = [];
        var night = [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ];
        geocoder = new google.maps.Geocoder();
        var center = new google.maps.LatLng(25.0505034, 121.51840949999998);
        var mapOptions = {
            zoom: 12,
            center: center,
            styles: night,
        }







        memberline = JSON.parse(xhr.responseText);
        console.log(memberline);
        console.log(memberline.memberline[1]);
        console.log(memberline.memberlinelist[1]);
        let member_info_line_all = document.getElementById("member_info_line_all");
        let memberlineRow = " ";



          /////////塞地點到各個map
          function addpost(spot, map) {
            // alert("000");
            // console.log(spot);
            geocoder.geocode({ 'address': spot }, function (results, status) {
                console.log(spot);
                console.log(status);
                if (status == 'OK') {
                    var marker = new google.maps.Marker({
                        map: map,
                        position: results[0].geometry.location,
                        animation: google.maps.Animation.DROP
                    });
                    //   console.log(map);
                } else {
                    alert("00");
                }
            });
        }
        for (let i = 0; i < memberline.memberline.length; i++) {
            memberlineRow += `
            <div class="member_info_line_all_all">
                <div class="member_info_line_all_left">
                    <input type="text" value="${memberline.memberline[i].route_name}" readonly>
                    <textarea name="" id="" cols="" rows="" readonly>${memberline.memberline[i].route_information}</textarea>

                 </div>
                <div class="member_info_line_all_right">
                    <div class="btnPink">
                        修改
                    </div>
                    <div style="display: none;" class="btnPink">
                        確認
                    </div>
                    <div class="btnPink">
                        刪除
                    </div>
                </div>
                <div class="member_info_line_all_bottom" id="member_map${memberline.memberline[i].route_number}">
                </div>
                <div>${memberline.memberline[i].route_number}</div>
            </div>
            `;
            member_info_line_all.innerHTML = memberlineRow;
        };
        
        for (let i=0;i<memberline.memberline.length; i++){
            map = new google.maps.Map(document.getElementById(`member_map${memberline.memberline[i].route_number}`), mapOptions);
                 for(let j=0;j<memberline.memberlinelist.length;j++){
                        if(memberline.memberlinelist[j]["route_number"]==memberline.memberline[i]["route_number"]){
                            console.log(memberline.memberlinelist[j]["custom_attraction_name"]);
                            console.log(map);
                            addpost(memberline.memberlinelist[j]["custom_attraction_name"], map);
                        }
                    }
        };
        // for (let i=0;i<memberline.memberline.length; i++){
        //     map =`member_map${memberline.memberline[i].route_number}`;
        //     for(let j=0;j<memberline.memberlinelist.length;j++){
        //         if(memberline.memberlinelist[j]["route_number"]==memberline.memberline[i]["route_number"]){
        //             console.log(memberline.memberlinelist[j]["custom_attraction_name"]);
        //             console.log(map);
        //             addpost(memberline.memberlinelist[j]["custom_attraction_name"], map);
        //         }
        //     }
        // }
    
        //////////刪除&&修改路線資料按鈕
        function memberlinemodify() {
            for (let i = 1; i < 100; i++) {
                //點擊修改
                $(`.member_info_line_all>div:nth-child(${i})>div:nth-child(2)>div:nth-child(1)`).click(function () {
                    $(this).css("display", "none");
                    $(`.member_info_line_all>div:nth-child(${i})>div:nth-child(2)>div:nth-child(2)`).css("display", "inline-block");
                    $(`.member_info_line_all>div:nth-child(${i})>div:nth-child(2)>div:nth-child(3)`).css("display", "none");
                    $(`.member_info_line_all>div:nth-child(${i})>div:nth-child(1)>input:nth-child(1)`).removeAttr("readonly");
                    $(`.member_info_line_all>div:nth-child(${i})>div:nth-child(1)>textarea:nth-child(2)`).removeAttr("readonly");
                    $(`.member_info_line_all>div:nth-child(${i})>div:nth-child(1)>input:nth-child(1)`).css("pointer-events", "auto");
                    $(`.member_info_line_all>div:nth-child(${i})>div:nth-child(1)>textarea:nth-child(2)`).css("pointer-events", "auto");
                    $(`.member_info_line_all>div:nth-child(${i})>div:nth-child(1)>input:nth-child(1)`).focus();

                })
                //修改
                $(`.member_info_line_all>div:nth-child(${i})>div:nth-child(2)>div:nth-child(2)`).click(function () {
                    // alert("00");
                    title = $(`.member_info_line_all>div:nth-child(${i})>div:nth-child(1)>input:nth-child(1)`).val();
                    number = $(`.member_info_line_all>div:nth-child(${i})>div:nth-child(4)`).text();
                    word = $(`.member_info_line_all>div:nth-child(${i})>div:nth-child(1)>textarea:nth-child(2)`).val();
                    // alert(title);
                    // alert(number);
                    // alert(word);
                    let xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status == 200) {
                            //modify here
                            alert(xhr.responseText);
                            location.reload();
                        } else {
                            alert(xhr.status);
                        }
                    }
                    var url = "./php/member/upmemberline.php?number=" + number
                        + "&title=" + title
                        + "&word=" + word;
                    console.log(url);
                    xhr.open("Get", url, true);
                    xhr.send(null);
                })
                //刪除
                $(`.member_info_line_all>div:nth-child(${i})>div:nth-child(2)>div:nth-child(3)`).click(function () {
                    // $(this).css("border","1px solid red")
                    number = $(`.member_info_line_all>div:nth-child(${i})>div:nth-child(4)`).text();
                    let xhr = new XMLHttpRequest();
                    xhr.onload = function () {
                        if (xhr.status == 200) {
                            //modify here
                            alert(xhr.responseText);
                            location.reload();
                        } else {
                            alert(xhr.status);
                        }
                    }
                    var url = "./php/member/delmemberline.php?number=" + number;
                    console.log(url);
                    xhr.open("Get", url, true);
                    xhr.send(null);
                })

            }

        }
        
        //刪除路線資料的js
        memberlinemodify();

    }
    let url = "./php/member/getMemberIine.php?number=" + memNum;
    console.log(url);
    xhr.open("Get", url, true);
    xhr.send(null);

};
//修改會員資料送出
//上傳圖片會顯示
function memberphoto() {
    document.getElementById("photo_up").onchange = function () {
        // alert("00");
        let file = document.getElementById("photo_up").files[0];
        let readFile = new FileReader();
        readFile.readAsDataURL(file);
        readFile.addEventListener("load", function () {
            image = document.getElementById("photoup")
            image.src = this.result;
        })
    };
};
//編輯會員資料的js
function membermodify() {
    $(".pen").click(function () {
        //動畫停止
        $(this).css("animation", "unset")
        // //title變
        // $(".member_info_info_right div:nth-child(1) span").text("資料編輯中")
        //下面按鈕變
        $(".member_info_info_button>a").css("visibility", "visible");

        //右邊資料欄位變可輸入
        $(".member_info_info_right div input").removeAttr("readonly");
        // $(".member_info_info_right div input").focus("border","3px dashed $importantColor");
        // $(".member_info_info_right div input:nth-child(0)").focus();
        //focus在第一個
        $(".member_info_info_right input ").css("pointer-events", "auto");
        $(".member_info_info_right>div:nth-child(3) input").focus();
        // $(".member_info_info_right div input").css("border","1px solid #646464");
        // $(".member_info_info_right div input:focus").css("border","10px solid #646464");
        // alert($(".member_info_info_right div input").attr("readonly"))
        //左邊照相機出現
        // $(".member_info_info_left div div:nth-child(2) label").css("pointer-events","auto");
        $(".member_info_info_left div div:nth-child(2)").css("display", "inline-block");
        // $(".member_info_info_left>label>div").css("border","1px solid #646464");
        $(".member_info_info_left>label").css("pointer-events", "auto");
        $(".member_info_info_left>label>div").click(function () {
            $(this).css("border", "3px dashed #a5361c");
        })
        //focus
        // $(".member_info_info_right input").focus().css("border","3px dashed $importantColor");
    })
    //下方修改確認 全部回復&&送出
    $(".member_info_info_button>a").click(function () {
        // $(this).css("visibility", "hidden");
        // $(".pen").css("animation", "jump 1s infinite linear");
        // $(".member_info_info_right div input").attr("readonly", "true");
        // $(".member_info_info_left div div:nth-child(2)").css("display", "none");
        // $(".member_info_info_left>label").css("pointer-events", "none");
        // $(".member_info_info_right input ").css("pointer-events", "none");
        // $(".member_info_info_left>label>div").css("border", "unset");;


        ////要傳圖 所以要form 傳值
        // alert("123");
        document.getElementById("member_upload").submit();




    })
}
///////////////////////////////////////////////////////////////////////////第一頁放資料
function getMemberInfo(memNum) {
    // alert(memNum);
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        memberinfo = JSON.parse(xhr.responseText);
        console.log(memberinfo);
        //點數更新
        let point = document.getElementById("member_point_point");
        point.innerText = `${memberinfo[0].member_point}`;
        //會員資料更新
        let member_info_info_all = document.getElementById("member_info_info_all");
        member_info_info_all.innerHTML = `
        <form action="./php/member/upmemberinfo.php" method="post" enctype="multipart/form-data" id="member_upload">
                                <div class="member_info_info_left">
                                    <div>
                                        <span>我的資料</span>
                                        <img src="./img/member/memberchange.png" alt="" class="pen">
                                    </div>
                                    <label for="photo_up">
                                        <div>
                                            <div>
                                                <img src="./img/memberPhoto/${memberinfo[0].member_photo}" alt="" id="photoup">
                                            </div>
                                            <div>
                                                <label for="photo_up">上傳大頭照
                                                    <img src="./img/member/membercamera.png" alt="">
                                                </label>
                                                <input style="display: none;" type="file" name="photo_up" id="photo_up">
                                            </div>
                                        </div>
                                    </label>



                                </div>
                                <div class="member_info_info_line"></div>
                                <div class="member_info_info_right">
                                    <div>
                                        <span>我的資料</span>
                                        <img src="./img/member/memberchange.png" alt="" class="pen">

                                    </div>
                                    <input type="text" name="member_number" style="display:none" value="${memberinfo[0].member_number}"></input>
                                    <div>
                                        <label for="">帳號 :</label>
                                        <input type="text" readonly value="${memberinfo[0].member_account}" name="member_account">
                                    </div>
                                    <div>
                                        <label for="">密碼 :</label>
                                        <input type="text" readonly value="${memberinfo[0].member_password}" name="member_password">
                                    </div>
                                    <div>
                                        <label for="">暱稱 :</label>
                                        <input type="text" readonly value="${memberinfo[0].member_name}" name="member_name">
                                    </div>
                                    <div>
                                        <label for="">信箱 :</label>
                                        <input type="text" readonly value="${memberinfo[0].member_email}" name="member_email">
                                    </div>
                                </div>
                                <div class="member_info_info_button ">
                                    <a class="btnPink" style="visibility: hidden;">
                                        確認
                                    </a>
                                </div>
                                </form>`
            ;
        //編輯會員資料的js
        membermodify();
        //上傳圖片會顯示
        memberphoto();
    }
    let url = "./php/member/getMemberInfo.php?number=" + memNum;
    console.log(url);
    xhr.open("Get", url, true);
    xhr.send(null);
}
//去php看登入者是誰 取他編號
function getLoginInfo() {
    // alert("11");
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        member = JSON.parse(xhr.responseText);
        memNum = member.memNum
        alert(memNum);
        getMemberInfo(memNum);
        getLineInfo(memNum);
    }
    xhr.open("get", "./php/loginInfoForFront.php", true);
    xhr.send(null);
}; //
window.addEventListener("load", function () {
    // alert("讀取");
    getLoginInfo();
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
            $(`.member_info>div:nth-child(${i + 1})`).css("display", "block");
            // //自己變大
            // $(this).parent().css("transform","scale(1.2)");
            // $(".member_info_nav ul li img").not(this).parent().css("transform","scale(1)");

        });

    };
});
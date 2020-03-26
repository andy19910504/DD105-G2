$(document).ready(function(){
    if (window.innerWidth >= 576 && localStorage.getItem("hasCodeRunBefore") === null) {
        // show manual-modal
        $('header.fullHeader').addClass('header-backward');
        window.scrollTo(0, 556);
        $('.manual-modal').css({
            top: '556px'
        });
        $('body').addClass('scroll-lock');
        
        localStorage.setItem("hasCodeRunBefore", true);
    } 
    else {
        $('.fullHeader').removeClass('header-backward');
        $('.manual-modal').addClass('hide-manual-modal');
        $('body').removeClass('scroll-lock');
    }
    
    // remove manual-modal
    $('.manual-modal').click(function(){
        $('.fullHeader').removeClass('header-backward');
        $('.manual-modal').addClass('hide-manual-modal');
        $('body').removeClass('scroll-lock');
    });

    var checkpoint = ['日式舊屋行'];
    //route tab
    $('.option').click(function(e){
        $('.option .label').addClass('hide-label');
        $(this).find('.label').toggleClass('hide-label');
        if($(this).find('.route-name').text() == '日式舊屋行'){
            $('.spot1').attr('src', './img/mapgame/spot/route1/青田七六.jpg');
            $('.spot2').attr('src', './img/mapgame/spot/route1/長慶廟.jpg');
            $('.spot3').attr('src', './img/mapgame/spot/route1/紀州庵.jpg');
            $('.spot4').attr('src', './img/mapgame/spot/route1/野草居食屋.jpg');
            $('.spot5').attr('src', './img/mapgame/spot/route1/梁實秋故居.jpg');
            for(var i=0;i<=4;i++){
                $('.check-box').eq(i).find('img').removeClass('show-check');
            }
            $('.spot').eq(0).text('青田七六');
            $('.spot').eq(1).text('長慶廟');
            $('.spot').eq(2).text('紀州庵');
            $('.spot').eq(3).text('野草居食屋');
            $('.spot').eq(4).text('梁實秋故居');
            checkpoint = [];
            checkpoint.push('日式舊屋行');
        } else if($(this).find('.route-name').text() == '文青品味旅'){
            $('.spot1').attr('src', './img/mapgame/spot/route2/宅jai風格生活.jpg');
            $('.spot2').attr('src', './img/mapgame/spot/route2/有肉Succulent_Gift1.jpg');
            $('.spot3').attr('src', './img/mapgame/spot/route2/讀字書店.jpg');
            $('.spot4').attr('src', './img/mapgame/spot/route2/SturnLandingTurkishCoffee2.jpg');
            $('.spot5').attr('src', './img/mapgame/spot/route2/SwellCo.Cafe.jpg');
            for(var i=0;i<=4;i++){
                $('.check-box').eq(i).find('img').removeClass('show-check');
            }
            $('.spot').eq(0).text('宅jai風格生活');
            $('.spot').eq(1).text('有肉專賣');
            $('.spot').eq(2).text('讀字書店');
            $('.spot').eq(3).text('登陸土星');
            $('.spot').eq(4).text('Swell Co.');
            checkpoint = [];
            checkpoint.push('文青品味旅');
        } else if($(this).find('.route-name').text() == '職人散步去'){
            $('.spot1').attr('src', './img/mapgame/spot/route3/小廢墟.jpg');
            $('.spot2').attr('src', './img/mapgame/spot/route3/化南新村.png');
            $('.spot3').attr('src', './img/mapgame/spot/route3/文山公民會館.JPG');
            $('.spot4').attr('src', './img/mapgame/spot/route3/岸汐職人聚落.jpg');
            $('.spot5').attr('src', './img/mapgame/spot/route3/TAIGA針葉林2.jpg');
            for(var i=0;i<=4;i++){
                $('.check-box').eq(i).find('img').removeClass('show-check');
            }
            $('.spot').eq(0).text('小廢墟');
            $('.spot').eq(1).text('化南新村');
            $('.spot').eq(2).text('文山公民會館');
            $('.spot').eq(3).text('岸汐職人聚落');
            $('.spot').eq(4).text('TAIGA 針葉林');
            checkpoint = [];
            checkpoint.push('職人散步去');
        }
    });

    //載入時預設的模式，手機時載入估狗地圖，桌機時載入小遊戲。
    if(window.innerWidth <= 576){
        $('.button').toggleClass('on');
        $('.gameMode').toggleClass('off');
        $('.mapMode').toggleClass('off');
        $('.game-container').toggleClass('hide-container');
        $('.map-container').toggleClass('hide-container');
        if(!($('.map-container').hasClass('hide-container'))){
            //產生地圖和導航功能
            googleMapCreater();
        }
    }

    //小遊戲、地圖切換開關。手機版第一次切換至小遊戲時顯示說明
    $('.switch').click(function(){
        $('.button').toggleClass('on');
        $('.gameMode').toggleClass('off');
        $('.mapMode').toggleClass('off');
        $('.game-container').toggleClass('hide-container');
        $('.map-container').toggleClass('hide-container');
        if (window.innerWidth <= 576 && localStorage.getItem("hasSwitchedToGameBefore") === null) {
            // show manual-modal
            $('header.fullHeader').addClass('header-backward');
            window.scrollTo(0, 800);
            $('.manual-modal').removeClass('hide-manual-modal');
            $('.manual-modal').css({
                top: '800px'
            });
            $('body').addClass('scroll-lock');
            
            localStorage.setItem("hasSwitchedToGameBefore", true);
        } 
        else {
            $('.fullHeader').removeClass('header-backward');
            $('.manual-modal').addClass('hide-manual-modal');
            $('body').removeClass('scroll-lock');
        }
    });

    //full-screen-btn
    $('.full-screen-btn').click(function(){
        $(this).toggleClass('hide-full-screen-btn');
        $('.game-container').css({
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: '0',
            left: '0',
            'z-index': '111'
        });
        $('.fuda-container').css({
            position: 'fixed',
            top: '30px',
            left: '100px',
            'z-index': '111'
        });
        $('body').toggleClass('scroll-lock');
        $('.normal-screen-btn').toggleClass('hide-full-screen-btn');
    });
    $('.normal-screen-btn').click(function(){
        $(this).toggleClass('hide-full-screen-btn');
        $('.game-container').css({
            width: '63%',
            height: '550px',
            position: 'relative',
            'z-index': '0'
        });
        $('.fuda-container').css({
            position: 'absolute',
            top: '390px',
            left: '140px',
            'z-index': '1'
        });
        $('body').toggleClass('scroll-lock');
        $('.full-screen-btn').toggleClass('hide-full-screen-btn');
    });

    //Start button
    $('.btnRed').click(function(e){
        e.preventDefault();
        //按了開始按鈕之後才能按方向鍵移動人物
        $(document).keypress(function(e) {
            return false;
        });
        $(this).hide();
        $(document).keypress(function(e) {
            return true;
        });
        //控制人物方向
        $(window).on('keydown',function(e){
            e.preventDefault();
            //控制不能走出地圖邊界
            var coordX = getTransValues('game-map-container', 'x');
            var coordY = getTransValues('game-map-container', 'y');
            if(e.keyCode == 37 && coordX >= -4126){
                $('.walking').css('transform','scaleX(-1)');
                $('.game-map-container').css('transform', `translate(${coordX+10}px, ${coordY}px)`);
            } else if(e.keyCode == 39 && coordX <= -968){
                $('.walking').css('transform','scaleX(1)');
                $('.game-map-container').css('transform', `translate(${coordX-10}px, ${coordY}px)`);
            } else if(e.keyCode == 38 && coordY <= -704){
                $('.game-map-container').css('transform', `translate(${coordX}px, ${coordY+10}px)`);
            } else if(e.keyCode == 40 && coordY >= -2588){
                $('.game-map-container').css('transform', `translate(${coordX}px, ${coordY-10}px)`);
            }
            //spot1 trigger
            if(coordX >= -2400 && coordY >= -1512 && coordX <= -2210 && coordY <= -1342){
                $('.spot1').css({
                    filter: 'brightness(2.8)'
                });
                setTimeout(function(){
                    if(coordX >= -2400 && coordY >= -1512 && coordX <= -2210 && coordY <= -1342){
                        checkpoint[1] = '';
                        if(checkpoint[0] == '日式舊屋行'){
                            checkpoint[1] = '青田七六';
                        } else if(checkpoint[0] == '文青品味旅'){
                            checkpoint[1] = '宅jai風格生活';
                        } else if(checkpoint[0] == '職人散步去'){
                            checkpoint[1] = '小廢墟';
                        }
                        getQuizContent(checkpoint);
                        $('.game-modal').removeClass('hide-game-modal');
                    }
                }, 3000);
            } else {
                $('.spot1').css({
                    filter: 'brightness(1)'
                });
            }
            //spot2 trigger
            if(coordX >= -1810 && coordY >= -1242 && coordX <= -1560 && coordY <= -1142){
                $('.spot2').css({
                    filter: 'brightness(2.8)'
                });
                setTimeout(function(){
                    if(coordX >= -1810 && coordY >= -1242 && coordX <= -1560 && coordY <= -1142){
                        checkpoint[1] = '';
                        if(checkpoint[0] == '日式舊屋行'){
                            checkpoint[1] = '長慶廟';
                        } else if(checkpoint[0] == '文青品味旅'){
                            checkpoint[1] = '有肉專賣';
                        } else if(checkpoint[0] == '職人散步去'){
                            checkpoint[1] = '化南新村';
                        }
                        getQuizContent(checkpoint);
                        $('.game-modal').removeClass('hide-game-modal');
                    }
                }, 3000);
            } else {
                $('.spot2').css({
                    filter: 'brightness(1)'
                });
            }
            //spot3 trigger
            if(coordX >= -3010 && coordY >= -1242 && coordX <= -2760 && coordY <= -1092){
                $('.spot3').css({
                    filter: 'brightness(2.8)'
                });
                setTimeout(function(){
                    if(coordX >= -3010 && coordY >= -1242 && coordX <= -2760 && coordY <= -1092){
                        checkpoint[1] = '';
                        if(checkpoint[0] == '日式舊屋行'){
                            checkpoint[1] = '紀州庵';
                        } else if(checkpoint[0] == '文青品味旅'){
                            checkpoint[1] = '讀字書店';
                        } else if(checkpoint[0] == '職人散步去'){
                            checkpoint[1] = '文山公民會館';
                        }
                        getQuizContent(checkpoint);
                        $('.game-modal').removeClass('hide-game-modal');
                    }
                }, 3000);
            } else {
                $('.spot3').css({
                    filter: 'brightness(1)'
                });
            }
            //spot4 trigger
            if(coordX >= -2910 && coordY >= -1892 && coordX <= -2810 && coordY <= -1792){
                $('.spot4').css({
                    filter: 'brightness(2.8)'
                });
                setTimeout(function(){
                    if(coordX >= -2910 && coordY >= -1892 && coordX <= -2810 && coordY <= -1792){
                        checkpoint[1] = '';
                        if(checkpoint[0] == '日式舊屋行'){
                            checkpoint[1] = '野草居食屋';
                        } else if(checkpoint[0] == '文青品味旅'){
                            checkpoint[1] = '登陸土星';
                        } else if(checkpoint[0] == '職人散步去'){
                            checkpoint[1] = '岸汐職人聚落';
                        }
                        getQuizContent(checkpoint);
                        $('.game-modal').removeClass('hide-game-modal');
                    }
                }, 3000);
            } else {
                $('.spot4').css({
                    filter: 'brightness(1)'
                });
            }
            //spot5 trigger
            if(coordX >= -1660 && coordY >= -1892 && coordX <= -1560 && coordY <= -1792){
                $('.spot5').css({
                    filter: 'brightness(2.8)'
                });
                setTimeout(function(){
                    if(coordX >= -1660 && coordY >= -1892 && coordX <= -1560 && coordY <= -1792){
                        checkpoint[1] = '';
                        if(checkpoint[0] == '日式舊屋行'){
                            checkpoint[1] = '梁實秋故居';
                        } else if(checkpoint[0] == '文青品味旅'){
                            checkpoint[1] = 'Swell Co.';
                        } else if(checkpoint[0] == '職人散步去'){
                            checkpoint[1] = 'TAIGA 針葉林';
                        }
                        getQuizContent(checkpoint);
                        $('.game-modal').removeClass('hide-game-modal');
                    }
                }, 3000);
            } else {
                $('.spot5').css({
                    filter: 'brightness(1)'
                });
            }
        });

        //get quiz content
        function getQuizContent(checkpoint){
            $('.opt1, .opt2, .opt3').removeClass('click-disabled');
            $('.opt1, .opt2, .opt3').removeClass('right');
            $('.opt1, .opt2, .opt3').removeClass('wrong');
            //AJAX
            // var checkpointString = JSON.stringify(checkpoint);
            // var xhr = new XMLHttpRequest();
            // //POST 送出現在所在的關卡
            // xhr.open('POST', './php/getQuizzes.php', true);
            // xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            // xhr.send(checkpointString);
            // xhr.onload = function(){
            //     if(xhr.status == 200){
            //         console.log('成功送出所在的關卡');
            //     } else {
            //         alert('抱歉，有東西出錯了，客戶端未成功送出所在關卡資訊。請聯繫客服人員！！');
            //     }
            // }
            //GET
            var xhr = new XMLHttpRequest();
            xhr.open('GET', './php/getQuizzes.php', true);
            xhr.send(null);
            xhr.onload = function(){
                if(xhr.status == 200){
                    console.log(JSON.parse(xhr.responseText));
                    var tests = JSON.parse(xhr.responseText);
                    var test = '';
                    var opt1 = '';
                    var opt2 = '';
                    var opt3 = '';
                    var answer = '';
                    for(var i=0;i<tests.length;i++){
                        if(tests[i]['attraction_name'] == checkpoint[1]){
                            test = tests[i]['quiz_content'];
                            opt1 = tests[i]['option1_content'];
                            opt2 = tests[i]['option2_content'];
                            opt3 = tests[i]['option3_content'];
                            answer = tests[i]['answer_item'];
                        }
                    }
                    $('.test').text(test);
                    $('.opt1').text(opt1);
                    $('.opt2').text(opt2);
                    $('.opt3').text(opt3);
                    for(var j=1;j<=3;j++){
                        if($(`.opt${j}`).text() == answer){
                            $(`.opt${j}`).addClass('ans');
                        }
                    }
                } else {
                    alert('抱歉，有東西出錯了，Server未回傳關卡題目。請聯繫客服人員！！');
                }
            }
        }

        //spots' quiz
        $('.opt1, .opt2, .opt3').click(function(){
            if($(this).hasClass('ans')){
                $('.test').text('恭喜答對！！！');
                $(this).addClass('right');
                $('.close-modal').click(function(){
                    $('.game-modal').addClass('hide-game-modal');
                });
                for(var i=0;i<=4;i++){
                    if($('.spot').eq(i).text().toString() == checkpoint[1].toString()){
                        $('.check-box').eq(i).find('img').addClass('show-check');
                    }
                }
                
            } else {
                $('.test').text('你答錯了！！！！正確答案如下藍底選項所示！！');
                $(this).addClass('wrong');
                $('.ans').addClass('right');
                $('.close-modal').click(function(){
                    $('.game-modal').addClass('hide-game-modal');
                });
            }
            //移除解答class，並且不能重選
            $('.opt1, .opt2, .opt3').removeClass('ans');
            $('.opt1, .opt2, .opt3').addClass('click-disabled');
            updateProgress();
        });

        //progress bar update
        function updateProgress(){
            //check checks
            var checks = 0;
            for(var i=0;i<5;i++){
                if($('.check-box').eq(i).find('img').hasClass('show-check')){
                    checks = checks +1;
                }
            }
            //paint progress-bar
            $('.progress').css({
                width: `${(checks-1)*22}%`
            });
            for(var j=0;j<=checks;j++){
                $('.index').eq(j-1).css({
                    'background-color': '#c45c5c'
                });
            }
        }
    });

    //Google map mode
    $('.switch').on('click', function(){
        if(!($('.map-container').hasClass('hide-container'))){
            //產生地圖和導航功能
            googleMapCreater();
        }
    });

    //get translateX&Y's value of an element
    function getTransValues(elementClassName, coord){
        var matrix = $(`.${elementClassName}`).css('transform').replace(/[^0-9\-.,]/g, '').split(',');
        var x = matrix[12] || matrix[4];
        var y = matrix[13] || matrix[5];
        if(coord == 'x'){
            return parseInt(x);
        } else if(coord == 'y'){
            return parseInt(y);
        }
      };

    //google map function
    function googleMapCreater(){
        //Get current position with google api
        var start;
        var geolocation = 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCxHAzDuEADlkr21Aqm0ng4BqfQ3LfmD6c';
        function renewStartPlace() {
            xhr = new XMLHttpRequest();
            xhr.open('POST', geolocation);
            xhr.onload = function () {
                var response = JSON.parse(this.responseText);
                //set start point
                start = response.location;
                //將地標和路線指示清空
                markers = [];
                infowindows = [];
                directions(start, {lat: 25.0213759, lng: 121.5183262}, [
                {location: {lat: 25.0280558, lng: 121.5303483}, stopover: true},
                {location: {lat: 25.0238285, lng: 121.52569}, stopover: true},
                {location: {lat: 25.0250419, lng: 121.519615}, stopover: true},
                {location: {lat: 25.0248451, lng: 121.5194386}, stopover: true}
                ]);
            }
            xhr.send();
            console.log(start);
        }
        //畫出地圖
        var mapOptions = {
                zoom: 12,
                center: start,
                }
        map = new google.maps.Map(document.getElementById('map'), mapOptions);

        renewStartPlace();

        //設定現在位置為地圖的中心
        function setMapCenter(){
            map.setCenter(start);
            console.log('set!');
        }

        //一直更新現在位置的導航
        setInterval(renewStartPlace, 6000);
        setInterval(setMapCenter, 6000);

        //規劃路線
        var markers = [];
        var infowindows = [];
        function directions(origin, dest, waypts){
            let directionService = new google.maps.DirectionsService(),
                directionDisplay = new google.maps.DirectionsRenderer(),
                request = {
                    origin: origin,
                    destination: dest,
                    waypoints: waypts,
                    optimizeWaypoints: true,
                    travelMode: 'WALKING'
                }
            directionDisplay.setMap(map);
            directionService.route(request, (result, status) => {
                if(status == 'OK'){
                    // 回傳路線上每個步驟的細節
                    var steps = result.routes[0].legs[0].steps;
                    steps.forEach((e, i) => {
                        // 加入地圖標記
                        markers[i] = new google.maps.Marker({
                        position: { lat: e.start_location.lat(), lng: e.start_location.lng() },
                        map: map,
                        label: { text: i + '', color: "#fff" }
                        });
                        // 加入資訊視窗
                        infowindows[i] = new google.maps.InfoWindow({
                        content: e.instructions
                        });
                        // 加入地圖標記點擊事件
                        markers[i].addListener('click', function () {
                        if(infowindows[i].anchor){
                            infowindows[i].close();
                        }else{
                            infowindows[i].open(map, markers[i]);
                        }
                        });
                    });
                    directionDisplay.setDirections(result);
                }
            });
        }
    }
});
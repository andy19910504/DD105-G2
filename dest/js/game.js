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

    //route tab
    $('.option').click(function(e){
        $('.option .label').addClass('hide-label');
        $(this).find('.label').toggleClass('hide-label');
        if($(this).find('.route-name').text() == '日式舊屋行'){
            $('.map').replaceWith('<img src="./img/mapgame/map.jpg" alt="" class="map">');
        } else if($(this).find('.route-name').text() == '文青品味旅'){
            $('.map').replaceWith('<img src="./img/mapgame/map1.jpg" alt="" class="map">');
        } else if($(this).find('.route-name').text() == '職人散步去'){
            $('.map').replaceWith('<img src="./img/mapgame/map2.jpg" alt="" class="map">');
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
            console.log(`coordX:${coordX}, coordY:${coordY}`);
            //spot1 trigger
            if(coordX >= -2400 && coordY >= -1512 && coordX <= -2210 && coordY <= -1342){
                $('.spot1').css({
                    filter: 'brightness(2.8)'
                });
                setTimeout(function(){
                    if(coordX >= -2400 && coordY >= -1512 && coordX <= -2210 && coordY <= -1342){
                        $('.game-modal').removeClass('hide-game-modal');
                    }
                }, 3000);
            } else {
                $('.spot1').css({
                    filter: 'brightness(1)'
                });
            }
        });

        //spot1 quiz
        $('.test-area-spot1 .opt1, .test-area-spot1 .opt2, .test-area-spot1 .opt3').click(function(){
            if($(this).hasClass('opt3')){
                $('.test').text('恭喜答對！！！');
                $(this).css({
                    'background-color': '#D3E9F0',
                    border: '1px solid #D3E9F0',
                    'border-radius': '5px'
                });
                $('.close-modal').click(function(){
                    $('.game-modal').addClass('hide-game-modal');
                });
                $('.check-box').eq(1).find('img').addClass('show-check');
            } else {
                $('.test-area-spot1 .test').text('你答錯了！！！！正確答案如下！！');
                $(this).css({
                    'background-color': '#A9381D',
                    border: '1px solid #A9381D',
                    'border-radius': '5px'
                });
                $('.test-area-spot1 .opt3').css({
                    'background-color': '#D3E9F0',
                    border: '1px solid #D3E9F0',
                    'border-radius': '5px'
                });
                $('.close-modal').click(function(){
                    $('.game-modal').addClass('hide-game-modal');
                });
            }
            $('.test-area-spot1 .opt1, .test-area-spot1 .opt2, .test-area-spot1 .opt3').addClass('click-disabled');
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
                width: `${(checks-1)*20}%`
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
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
            //get current location
            navigator.geolocation.getCurrentPosition(succCallback,errorCallback,{
                enableHighAccuracy: false,
                timeout: 200000,
                maximumAge: 0,
            });
            function succCallback(e){
                let lati = e.coords.latitude;
                let longi = e.coords.longitude;
                let accuracy = e.coords.accuracy;

                if(accuracy > 100000){
                    console.log("超過偵測範圍!");
                }else{
                    console.log(`緯度: ${lati}<br>經度: ${longi}<br>準確度: ${accuracy} 公尺`);
                }

                //make a Google map
                let area = document.getElementById('map');
                let position = new google.maps.LatLng(lati, longi);
                let options = {
                    zoom: 16,
                    center: position,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                };

                let map = new google.maps.Map(area,options);
                let marker = new google.maps.Marker({
                    position,
                    map,
                    // icon: 'http://www.oxxostudio.tw/img/articles/201801/google-maps-3-marker-icon.png',
                    title: '我在這裡',
                    // label: 'ㄎㄎ',
                    position: position,
                    map: map,
                    animation: google.maps.Animation.DROP,
                    animation: google.maps.Animation.BOUNCE
                });
            }
            function errorCallback(e){
                alert(`錯誤碼: ${e.code}\n錯誤訊息: ${e.message}`);
            }
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
        window.scrollTo(0, 784);
        $(this).toggleClass('hide-full-screen-btn');
        $('.game-container').css({
            width: '100vw',
            height: '100vh',
            // transform: 'translate(-8.5%, 0)',
            'z-index': '111'
        });
        $('.fuda-container').css({
            bottom: '15px',
            'z-index': '111'
        });
        $('body').toggleClass('scroll-lock');
        $('.normal-screen-btn').toggleClass('hide-full-screen-btn');
        window.scrollTo(2200, 784);
    });
    $('.normal-screen-btn').click(function(){
        $(this).toggleClass('hide-full-screen-btn');
        $('.game-container').css({
            width: '63%',
            height: '550px',
            'z-index': '0'
        });
        $('.fuda-container').css({
            bottom: '15px',
            'z-index': '1'
        });
        $('body').toggleClass('scroll-lock');
        $('.full-screen-btn').toggleClass('hide-full-screen-btn');
    });
    //Start button
    $('.btnRed').click(function(e){
        e.preventDefault();
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
            if(e.keyCode == 37 && parseInt($('.game-map-container').css('left')) <= 1401){
                $('.walking').css('transform','scaleX(-1)');
                var left = parseInt($('.game-map-container').css('left'));
                $('.game-map-container').css('left',left+10);
            } else if(e.keyCode == 39 && parseInt($('.game-map-container').css('left')) >= -837){
                $('.walking').css('transform','scaleX(1)');
                var left = parseInt($('.game-map-container').css('left'));
                $('.game-map-container').css('left',left-10);
            } else if(e.keyCode == 38 && parseInt($('.game-map-container').css('top')) <= 1239){
                var top = parseInt($('.game-map-container').css('top'));
                $('.game-map-container').css('top',top+10);
            } else if(e.keyCode == 40 && parseInt($('.game-map-container').css('top')) >= 109){
                var top = parseInt($('.game-map-container').css('top'));
                $('.game-map-container').css('top',top-10);
            }
            console.log(`Top: ${parseInt($('.game-map-container').css('top'))}, Left: ${parseInt($('.game-map-container').css('left'))}`);
            //spot1 trigger
            if(parseInt($('.game-map-container').css('top')) >= 679 && parseInt($('.game-map-container').css('top')) <= 859 && parseInt($('.game-map-container').css('left')) >= 82 && parseInt($('.game-map-container').css('left')) <= 272){
                $('.spot1').css({
                    filter: 'brightness(2.8)'
                });
                setTimeout(function(){
                    if(parseInt($('.game-map-container').css('top')) >= 679 && parseInt($('.game-map-container').css('top')) <= 859 && parseInt($('.game-map-container').css('left')) >= 82 && parseInt($('.game-map-container').css('left')) <= 272){
                        $('.game-modal').removeClass('hide-game-modal');
                    }
                }, 3000);
            } else {
                $('.spot1').css({
                    filter: 'brightness(1)'
                });
            }
        });
        $('.opt1, .opt2, .opt3').click(function(){
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
                $('.check-box').eq(1).find('img').removeClass('hide-check');
            } else {
                $('.test').text('你答錯了！！！！正確答案如下！！');
                $(this).css({
                    'background-color': '#A9381D',
                    border: '1px solid #A9381D',
                    'border-radius': '5px'
                });
                $('.opt3').css({
                    'background-color': '#D3E9F0',
                    border: '1px solid #D3E9F0',
                    'border-radius': '5px'
                });
                $('.close-modal').click(function(){
                    $('.game-modal').addClass('hide-game-modal');
                });
            }
            $('.opt1, .opt2, .opt3').addClass('click-disabled');
        });
    });
    //Google map
    $('.switch').on('click', function(){
        if(!($('.map-container').hasClass('hide-container'))){
            //get current location
            navigator.geolocation.getCurrentPosition(succCallback,errorCallback,{
                enableHighAccuracy: false,
                timeout: 200000,
                maximumAge: 0,
            });
            function succCallback(e){
                let lati = e.coords.latitude;
                let longi = e.coords.longitude;
                let accuracy = e.coords.accuracy;

                if(accuracy > 100000){
                    console.log("超過偵測範圍!");
                }else{
                    console.log(`緯度: ${lati}<br>經度: ${longi}<br>準確度: ${accuracy} 公尺`);
                }

                //make a Google map
                let area = document.getElementById('map');
                let position = new google.maps.LatLng(lati, longi);
                let options = {
                    zoom: 16,
                    center: position,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                };

                let map = new google.maps.Map(area,options);
                let marker = new google.maps.Marker({
                    position,
                    map,
                    // icon: 'http://www.oxxostudio.tw/img/articles/201801/google-maps-3-marker-icon.png',
                    title: '我在這裡',
                    // label: 'ㄎㄎ',
                    position: position,
                    map: map,
                    animation: google.maps.Animation.DROP,
                    animation: google.maps.Animation.BOUNCE
                });
            }
            function errorCallback(e){
                alert(`錯誤碼: ${e.code}\n錯誤訊息: ${e.message}`);
            }
        }
    });
});
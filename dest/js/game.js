$(document).ready(function(){
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
    //小遊戲、地圖切換開關
    $('.switch .button').click(function(){
        $('.button').toggleClass('on');
        $('.gameMode').toggleClass('off');
        $('.mapMode').toggleClass('off');
        $('.game-container').toggleClass('hide-container');
        $('.map-container').toggleClass('hide-container');
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
        //控制方向
        $(window).on('keydown',function(e){
            e.preventDefault();
            if(e.keyCode == 37){
                $('.walking').css('transform','scaleX(-1)');
                var left = parseInt($('.map').css('left'));
                $('.map').css('left',left+10);
            } else if(e.keyCode == 39){
                $('.walking').css('transform','scaleX(1)');
                var left = parseInt($('.map').css('left'));
                $('.map').css('left',left-10);
            } else if(e.keyCode == 38){
                var top = parseInt($('.map').css('top'));
                $('.map').css('top',top+10);
            } else if(e.keyCode == 40){
                var top = parseInt($('.map').css('top'));
                $('.map').css('top',top-10);
            }
        });
    });
    //Google map
    $('.button').on('click', function(){
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
                let position = new google.maps.LatLng(24.9726123,121.1855099);
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
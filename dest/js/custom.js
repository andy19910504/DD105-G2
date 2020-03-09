$(document).ready(function(){
    //搜尋
    var search = '台北';
    var source = `http://maps.google.com?output=embed&q=${search}`;
    $('.search').keypress(function(e){
        if(e.keyCode == 13){
            search = $('.search').val();
            source = `http://maps.google.com?output=embed&q=${search}`;
            $('#map').attr('src', source);
        }
    });
    $('.btnPink').click(function(e){
        e.preventDefault();
        search = $('.search').val();
        source = `http://maps.google.com?output=embed&q=${search}`;
        $('#map').attr('src', source);
    });
    $('#map').attr('src', source);
    //確認地點
    $('.btnRed').click(function(e){
        e.preventDefault();
       
        // //make a Google map
        // let area = document.getElementById('map');
        // let position = new google.maps.LatLng(25.1365905,121.5049551);
        // let options = {
        //     zoom: 16,
        //     center: position,
        //     mapTypeId: google.maps.MapTypeId.ROADMAP,
        // };
        // //place a mark
        // let map = new google.maps.Map(area,options);
        // let marker = new google.maps.Marker({
        //     position,
        //     map,
        //     // icon: 'http://www.oxxostudio.tw/img/articles/201801/google-maps-3-marker-icon.png',
        //     title: '我在這裡',
        //     // label: 'ㄎㄎ',
        //     position: position,
        //     map: map,
        //     animation: google.maps.Animation.DROP,
        //     animation: google.maps.Animation.BOUNCE
        // });
    });
});
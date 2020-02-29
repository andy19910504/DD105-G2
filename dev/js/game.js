$(document).ready(function(){
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
            $('.map').css('top',top-10);
        } else if(e.keyCode == 40){
            var top = parseInt($('.map').css('top'));
            $('.map').css('top',top+10);
        }
    });
});
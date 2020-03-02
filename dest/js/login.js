
//按右上跳登入
$(".navMember").click(function(e){
    e.preventDefault();
    
    $(".login").attr("style","display:block")
});

//按登入頁的註冊 跳註冊
$(".login_register").click(function(){
    $(".login_all_all").css("display","none");
    $(".register").attr("style","display:block");
})
//按右上XX 關掉登入燈箱
$(".login_close").click(function(){
    $(".login").attr("style","display:none");
    //跳回登入畫面
    $(".login_all_all").css("display","block");
    $(".register").attr("style","display:none");
})
// $(".login").click(function(e){
//     e.stopPropagation();
    
//     $(".login").attr("style","display:none");
//     //跳回登入畫面
//     $(".login_all_all").css("display","block");
//     $(".register").attr("style","display:none");
// })
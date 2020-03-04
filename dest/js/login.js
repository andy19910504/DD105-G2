
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
//按登入頁的找回密碼 跳找回
$(".findpsw").click(function(){
    $(".login_all_all").css("display","none");
    $(".forgetpsw").attr("style","display:block");
})
//按找回密碼頁的返回 跳登入頁
$(".forgetpsw_back").click(function(){
    $(".forgetpsw").attr("style","display:none");
    $(".login_all_all").css("display","block");

})
//按找回註冊頁的返回 跳登入頁
$(".register_back").click(function(){
    $(".register").attr("style","display:none");
    $(".login_all_all").css("display","block");

})
//按右上XX 關掉登入燈箱
$(".login_close").click(function(){
    $(".login").attr("style","display:none");
    //跳回登入畫面
    $(".login_all_all").css("display","block");
    $(".register").attr("style","display:none");
    $(".forgetpsw").attr("style","display:none");
})
// $(".login").click(function(e){
//     e.stopPropagation();
    
//     $(".login").attr("style","display:none");
//     //跳回登入畫面
//     $(".login_all_all").css("display","block");
//     $(".register").attr("style","display:none");
// })
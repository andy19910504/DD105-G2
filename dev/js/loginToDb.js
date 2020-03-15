function $id(id) {
    return document.getElementById(id);
}

function getLoginInfo() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        member = JSON.parse(xhr.responseText);

        if (member.memAcc) {
            // 將會員ICON更換成會員的大頭貼
            $id("memPhoto").src = member.memPhoto;
            // 顯示會員有的點數量
            $(".point").innerText=member.memPoint;
            // 登入 換成 登出
            $(".sign").innerText = "登出";
        }
    }
    xhr.open("get", "getLoginInfo.php", true);
    xhr.send(null);
}; //

window.addEventListener("load", function () {
    // 檢查是否為登入狀態
    getLoginInfo();

    // 按右上 #sign，當是登入...；當是登出時...
    $(".sign").click(function (e) {
        //檢查是登入或是登出狀態
        //如果是登入，就顯示燈箱
        //如果是登出，將登入者資料清除，並且將 #sign 登出改成登入

        if ($('.sign').innerHTML == "登入") {
            e.preventDefault();
            $(".login").attr("style", "display:block");
        } else { // 登出
            // 至 server端，登出 session
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                if (xhr.status == 200) {  //自server正確的登出
                    // 將會員大頭貼換成會員ICON
                    $id("memPhoto").src = "./img/header/navMember.png";
                    // 點數顯示
                    $(".point").innerText="";
                    $('.sign').innerHTML = '登入';
                } else {
                    alert(xhr.status);
                }
            }
            xhr.open("get", "logout.php", true);
            xhr.send(null);
        }
    });

    // 在燈箱按登入
    // step1 判斷登入者帳號、密碼是否填寫正確
    // step2 至server端取得登入者的資訊
    $("#login_login").click(function () {
        //
        let memId = $id("login_acc").value;
        let memPsw = $id("login_psw").value;
        // 登入資訊
        let data_info = `member_account=${memId}&member_password=${memPsw}`;
        if (memId.length == 0) {
            alert("請填寫正確的帳號");
            this.focus();
            return
        }
        if (memPsw.length == 0) {
            alert("請填寫正確的密碼");
            this.focus();
            return
        }
        
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                member = JSON.parse(xhr.responseText);
                // 將會員ICON更換成會員的大頭貼
                $id("memPhoto").src = member.memPhoto;
                // 顯示會員有的點數量
                $(".point").innerText=member.memPoint;
                $(".sign").innerText = "登出";
            } else {
                alert(xhr.status);
            }

        }
        xhr.open("Post", "LoginForm.php", true);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send(data_info);

        // 將登入表單上的資料清空，並隱藏起來
        $id('loginBlock').style.display = 'none';
        $id('login_acc').value = '';
        $id('login_psw').value = '';
    });

    // 按右上close 關掉燈箱
    $(".login_close").click(function () {
        $(".login").attr("style", "display:none");
        // 清出填寫的資訊
        $id('login_acc').value = '';
        $id('login_psw').value = '';
        // 登入初始畫面
        $(".login_all_all").css("display", "block");
        $(".register").attr("style", "display:none");
        $(".forgetpsw").attr("style", "display:none");
    })


})
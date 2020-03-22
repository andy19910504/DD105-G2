
//////////////////////////load建立管理員&&會員
let staff;
window.addEventListener("load", function () {
    // console.log(location.search.split("?")[1]);
    // if(location.search.split("?")[1]=="aaa"){
    //     alert("新增成功!");
    // }

    // getmanager();
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        staff = JSON.parse(xhr.responseText);
        console.log(staff);
        let manager = document.getElementById("manager");
        let staffRow = `<tr>
                <td>編號</td>
                <td>暱稱</td>
                <td>帳號</td>
                <td>密碼</td>
                <td>狀態</td>
                <td></td>
            </tr>`;
        for (i = 0; i < staff.length; i++) {
            staffRow += `
        <tr>
                    <td>${staff[i].staff_number}</td>
                    <td>${staff[i].staff_name}</td>
                    <td>${staff[i].staff_account}</td>
                    <td>${staff[i].staff_password}</td>
                    <td><button>停權</button></td>
                    <td><button>刪除</button></td>
        </tr>
        `;
            manager.innerHTML = staffRow;
            // $(".newma_del").eq(1).css("border", "10px solid red");
        }
        //////////////////////////////刪除管理員
            function delmenager(num) {
                // alert(num);
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
                var url = "./php/member/delma.php?number=" + num;
                console.log(url);
                xhr.open("Get", url, true);
                xhr.send(null);

            }
            for (let i = 1; i < 100; i++) {
                $(`#manager>tbody>tr:nth-child(${i})>td:nth-child(6)>button`).click(function () {
                    // $(this).css("border","10px solid red");
                    let num = $(`#manager>tbody>tr:nth-child(${i})>td:nth-child(1)`).text();
                    // alert(num);
                    delmenager(num);
                })
            }

    }
    xhr.open("get", "./php/member/backmember.php", true);
    xhr.send(null);

    ///////會員資料
    let xhr1 = new XMLHttpRequest();
    xhr1.onload = function () {
        memberall = JSON.parse(xhr1.responseText);
        console.log(memberall);
        let members = document.getElementById("memberall");
        let memberRow = `<tr>
                <td>編號</td>
                <td>暱稱</td>
                <td>帳號</td>
                <td>密碼</td>
                <td>信箱</td>
                <td>頭貼</td>
                <td>點數</td>
                <td>狀態</td>
            </tr>`;
        for (j = 0; j < memberall.length; j++) {
            memberRow += `
            <tr>
                    <td>${memberall[j].member_number}</td>
                    <td>${memberall[j].member_name}</td>
                    <td>${memberall[j].member_account}</td>
                    <td>${memberall[j].member_password}</td>
                    <td>${memberall[j].member_email}</td>
                    <td><img src="${memberall[j].member_photo}" alt=""></td>
                    <td>${memberall[j].member_point}</td>
                    <td><button>停權</button></td>
            </tr>
        `;
            members.innerHTML = memberRow;
        }
    }
    xhr1.open("get", "./php/member/memberall.php", true);
    xhr1.send(null);
    // $("#manager>tbody>tr:nth-child(2)>td:nth-child(6)>button").css("border","10px solid red");
    // $(".newma_del").eq(1).css("border","10px solid red");
})
//////////////////////////////新增管理員
document.getElementById("newma").addEventListener("click", function () {
    if (document.getElementById("newma_nam").value.length == 0) {
        alert("暱稱不能為空");
        document.getElementById("newma_nam").focus();
        return
    }
    if (document.getElementById("newma_acc").value.length == 0) {
        alert("帳號不能為空");
        document.getElementById("newma_acc").focus();
        return
    }
    if (document.getElementById("newma_psw").value.length == 0) {
        alert("密碼不能為空");
        document.getElementById("newma_psw").focus();
        return
    }
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
    var url = "./php/member/newma.php?name=" + document.getElementById("newma_nam").value
        + "&account=" + document.getElementById("newma_acc").value
        + "&password=" + document.getElementById("newma_psw").value;
    console.log(url);
    xhr.open("Get", url, true);
    xhr.send(null);
});






function insertRow(e) {
    //阻止預設送出事件
    e.preventDefault();
    //先抓取新增關鍵字表單內被填入的值
    let keywordWord = $('#keywordInsert').val();
    let keywordAns = $('#answerInsert').val();
    let keywordStatus = $('#satausInsert').val();
    console.log(keywordWord, keywordAns, keywordStatus);

    ////把抓到的值放到html中一個隱藏的表單內
    document.getElementById("keywordWord").value = keywordWord;
    document.getElementById("keywordAns").value = keywordAns;
    document.getElementById("keywordStatus").value = keywordStatus;

    //-------------------測試值是否正確放入表單--------------------
    console.log("----------------------");
    console.log(document.getElementById("keywordWord").value);
    console.log(document.getElementById("keywordAns").value);
    console.log(document.getElementById("keywordStatus").value);
    console.log("----------------------");
    //------------------------------------------------------------

    //用那個表單建立一個JS表單物件
    var updateFormData = new FormData(document.getElementById("myForm"));

    //將表單物件的資料送到insertKeyword.php中執行修改資料內容的SQL指令
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            alert(xhr.responseText);
        } else {
            alert(xhr.status + "失敗");
        }
    }

    xhr.open("Post", "./php/insertKeyword.php", true);
    xhr.send(updateFormData);

    location.reload();
    alert("新增關鍵字成功!");
}


//點擊上下一步


//開燈箱

function showLightBox() {
    $('#eventhold_back').css('display', 'flex');
    step();

}

function step() {
    let curIndex=0;
    let contentLength = $(".stepContent").length; //3
    console.log(curIndex, "關又開燈箱後")

    //上一步
    $(".backStep").click(function () {
        //換div
        curIndex--;
        $(this).parent().parent().prev().css('display', 'flex');

        $(this).parent().parent().css('display', 'none');
        // if (curIndex == 0) {
        //     $(this).parent().parent().prev().css('display', 'flex');

        // }

        console.log(curIndex, "prebtn")
    });

    //下一步
    $(".nextStep").click(function () {
        //換div
        $(this).parent().parent().next().css('display', 'flex');
        $(this).parent().parent().css('display', 'none');

        curIndex++;

        //送出
        if (curIndex == contentLength) {
            $(this).parent().parent().css('display', 'none');
            $('#eventhold_back').css('display', 'none');

            $(this).parent().parent().parent().children().first().css('display', 'flex');
            curIndex = 0;
        }
        console.log(curIndex, "nextbtn")
    });
}

//關燈箱
function closeLightBox() {
    $('#eventhold_back').css('display', 'none');
}

// 開啟燈箱
$(document).on('click', '.eventInsert', showLightBox);

$(document).on('click', '.eventhold_close', closeLightBox);



window.addEventListener("load", function () {
    $(document).on('click', '.btnSave', function editBackAttraction() {
        // 當按下儲存，取得各欄為的資料
        let editNum = $(this).parent().parent().children().first().children().text();
        let editName = $(this).parent().parent().children().first().next().children().children().val();
        let editAddress = $(this).parent().parent().children().first().next().next().children().children().val();
        let eidtInfo1 = $(this).parent().parent().children().first().next().next().next().children().children().first().text();
        let eidtInfo2 = $(this).parent().parent().children().first().next().next().next().children().first().next().text();
        let editLongitude = $(this).parent().parent().children().first().next().next().next().next().next().children().children().first().val();
        let editLatitude = $(this).parent().parent().children().first().next().next().next().next().next().children().first().next().children().val();
        let editStatus = $(this).parent().parent().children().first().next().next().next().next().next().next().children().children().first().next().next().val();

        // 將各欄位的資料放進隱藏的表單中
        document.getElementById("editNumber").value = editNum;
        document.getElementById("editName").value = editName;
        document.getElementById("editAddress").value = editAddress;
        document.getElementById("editInfo1").innerHTML = eidtInfo1;
        document.getElementById("editInfo2").innerHTML = eidtInfo2;
        document.getElementById("editLongitude").value = editLongitude;
        document.getElementById("editLatitude").value = editLatitude;
        document.getElementById("editStatus").value = editStatus;
        // 檢驗
        console.log(document.getElementById("editNumber").value);
        console.log(document.getElementById("editName").value);
        console.log(document.getElementById("editAddress").value);
        console.log(document.getElementById("editInfo1").innerHTML);
        console.log(document.getElementById("editInfo2").innerHTML);
        console.log(document.getElementById("editLongitude").value);
        console.log(document.getElementById("editLatitude").value);
        console.log(document.getElementById("editStatus").value);

        var editForm = new FormData(document.getElementById("editForm"));

        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            if (xhr.status == 200) {
                alert(xhr.responseText);
            } else {
                alert(xhr.status);
            }
        }
        xhr.open("post", "./php/attractionEdit.php", true);
        xhr.send(editForm);
        location.reload();
    });


});



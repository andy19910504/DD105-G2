function showPhoto() {
    let showPhoto = document.getElementsByClassName("showPhoto");
    let btnShow = document.getElementsByClassName("btnShow");
    for (let i = 0; i < showPhoto.length; i++) {
        btnShow[i].onchange = function (e) {
            let file = e.target.files[0];
            let reader = new FileReader();
            reader.onload = function (e) {
                showPhoto[i].src = reader.result;
            }
            reader.readAsDataURL(file);
        }
    }
}

window.addEventListener("load", function () {
    showPhoto();
    // 按下新增按鈕，資料會存到資料庫中
    $(document).on('click', '.btnAdd', function editBackRoute() {
        // 取得新增表單的值
        let options = document.querySelectorAll('.optionAttr');
        let arr = "";
        for (let i = 0; i < options.length; i++) {
            if (options[i].checked == true) {
                arr += options[i].value + "|";
            };
        };
        let routeName = document.getElementById("routeName").value;
        let routeInfo = document.getElementById("routeInfo").value;
        let routePhoto = document.getElementById("routePhoto").files[0];
        let routeAttr = arr;
        let routeStatus = document.getElementById("routeStatus").value;
        // 確認
        console.log(routeName);
        console.log(routeInfo);
        console.log(routePhoto);
        console.log(routeAttr);
        console.log(routeStatus);

        // 建一個表單物件，將值放入表單物件中
        var editForm = new FormData();
        editForm.append('routeName', routeName);
        editForm.append('routeInfo', routeInfo);
        editForm.append('routePhoto', routePhoto);
        editForm.append('routeAttr', routeAttr);
        editForm.append('routeStatus', routeStatus);

        console.log(editForm);

        // let xhr = new XMLHttpRequest();
        // xhr.onload = function () {
        //     if (xhr.status == 200) {
        //         alert('路線新增成功!');

        //     } else {
        //         alert(xhr.status);
        //     }
        // }
        // xhr.open("post", "../php/routeAdd.php", true);
        // xhr.send(editForm); // 傳送表單物件
        // location.reload();
    });
});
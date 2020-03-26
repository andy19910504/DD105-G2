$(document).on('click', '.filter', function filterClick() {
    let routeName = $(this).text();

    let postForm = new FormData;
    postForm.append('routeName', routeName);
    
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            alert(xhr.responseText);
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("post", "./php/routeFrontInfo.php", true);
    xhr.send(editForm);
})
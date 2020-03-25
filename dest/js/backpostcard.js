//////////////////////////load建立管理員&&會員
// let mem_product;
window.addEventListener("load", function () {


    // getmanager();
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        mem_product = JSON.parse(xhr.responseText);
        console.log(mem_product);
        let iconList = document.getElementById("iconList");
        let mem_productRow = ``;
        for (i = 0; i < mem_product.length; i++) {
            mem_productRow += `
            <tr class="row">
                <th class="col-1">${mem_product[i].customized_product_number}</th>
                <th class="col-1">${mem_product[i].customized_product_point}</th>
                <th class="col-4">${mem_product[i].customized_product_url}</th>
                <th class="col-4">
                    <div class="icon"><img class="iconimg" src="${mem_product[i].customized_product_url}" alt="icon1">
                    </div>
                </th>
                <th class="col-2"><button class="btnDelIcon">刪除</button></th>
            </tr>
        `;
            iconList.innerHTML = mem_productRow;
        }
    }
    xhr.open("get", "./php/mem_product.php", true);
    xhr.send(null);
})

document.getElementById("btnAddIcon").addEventListener("click", function () {
    if (document.getElementById("IconPoint").value.length == 0) {
        alert("商品部件點數不能為空");
        document.getElementById("IconPoint").focus();
        return
    }
    if (document.getElementById("IconUrl").value.length == 0) {
        alert("商品部件路徑不能為空");
        document.getElementById("IconUrl").focus();
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
    var url = "./php/newicon.php?point=" + document.getElementById("IconPoint").value +
        "&url=" + document.getElementById("IconUrl").value;
    console.log(url);
    xhr.open("Get", url, true);
    xhr.send(null);
});

// document.getElementById("btnDelIcon").addEventListener("click", function () {
//     console('1')
//     alert('1')
//     let xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//         if (xhr.status == 200) {
//             //modify here
//             alert(xhr.responseText);
//             location.reload();
//         } else {
//             alert(xhr.status);
//         }
//     }
//     var url = "./php/delicon.php?number=" + document.getElementById("IconPoint").value
//         + "&url=" + document.getElementById("IconUrl").value;
//     console.log(url);
//     xhr.open("Get", url, true);
//     xhr.send(null);
// });
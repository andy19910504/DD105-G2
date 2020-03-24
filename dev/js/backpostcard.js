//////////////////////////load建立管理員&&會員
// let mem_product;
window.addEventListener("load", function () {


    // getmanager();
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        mem_product = JSON.parse(xhr.responseText);
        console.log(mem_product);
        let mem_products_icon = document.getElementById("mem_product_icon");
        let mem_productRow = 
        `           <thead>
                         <tr class="row trfirst">
                            <th class="col-1">商品部件編號</th>
                            <th class="col-1">商品部件點數</th>
                            <th class="col-4">商品部件路徑</th>
                            <th class="col-4">商品部件插圖</th>
                            <th class="col-2">編輯</th>
                        </tr>
                    </thead>
        `;
        for (i = 0; i < mem_product.length; i++) {
            mem_productRow += `
            <tbody>
            <tr class="row">
                <th class="col-1">${mem_product[i].customized_product_number}</th>
                <th class="col-1">${mem_product[i].customized_product_point}</th>
                <th class="col-4">${mem_product[i].customized_product_url}</th>
                <th class="col-4">
                    <div class="icon"><img class="iconimg" src="${mem_product[i].customized_product_url}" alt="icon1">
                    </div>
                </th>
                <th class="col-2"><button>刪除</button></th>
            </tbody>
        `;
            mem_product_icon.innerHTML = mem_productRow;
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
    // if (document.getElementById("newma_psw").value.length == 0) {
    //     alert("密碼不能為空");
    //     document.getElementById("newma_psw").focus();
    //     return
    // }
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
    var url = "./php/newicon.php?point=" + document.getElementById("IconPoint").value
        + "&url=" + document.getElementById("IconUrl").value;
    console.log(url);
    xhr.open("Get", url, true);
    xhr.send(null);
});

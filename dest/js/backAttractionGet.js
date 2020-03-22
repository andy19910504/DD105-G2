function checkbox() {

}
function getAttractionInfo(info) {
    let attrTable = document.getElementById("attractionTable");
    let attrInfo = JSON.parse(info);
    // console.log(attrInfo);
    let attrRow = "";
    for (i = 0; i < attrInfo.length; i++) {
        attrRow += `
        <tr>
            <th scope="row"><div>${attrInfo[i].attraction_number}</div></th>
            <td>
                <div><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${attrInfo[i].attraction_name}"></div>
            </td>
            <td>
                <div><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${attrInfo[i].attraction_address}"></div>
            </td>
            <td>
                <div><textarea class="form-control">${attrInfo[i].attraction_information1}</textarea></div>
                <div><textarea class="form-control">${attrInfo[i].attraction_information2}</textarea></div>
            </td>
            <td>
                <div>${attrInfo[i].attraction_photo1}</div>
                <div>${attrInfo[i].attraction_photo2}</div>
            </td>
            <td>
                <div>經度 <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${attrInfo[i].attraction_longitude}"></div>
                <div>緯度 <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${attrInfo[i].attraction_latitude}"></div>
            </td>
            <td>
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input checkMe" id="customSwitch${i}">
                    <label class="custom-control-label" for="customSwitch${i}">開放</label>
                </div>
            </td>
            <td>
            <button type="button" class="btn btn-light btn-sm btnSave">儲存</button>
            <button type="button" class="btn btn-light btn-sm btnDel">刪除</button>
            </td>
        </tr>
        `;
        attrTable.innerHTML = attrRow;
    }
    checkbox();

}

window.addEventListener("load", function () {

    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            alert("資料庫中有 " + JSON.parse(xhr.responseText).length + " 筆景點資料。");
            getAttractionInfo(xhr.responseText);
            // console.log(xhr.responseText);
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("get", "./php/getAttractionInfo.php", true);
    xhr.send(null);
}, false)



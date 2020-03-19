
function getAttractionInfo(info) {
    let attrTable = document.getElementById("attractionTable");
    let attrInfo = JSON.parse(info);
    console.log(attrInfo);
    let attrRow = "";
    for (i = 0; i < attrInfo.length; i++) {
        attrRow += `
        <tr>
            <th scope="row">${attrInfo[i].attraction_number}</th>
            <td>
                <div>${attrInfo[i].attraction_name}</div>
            </td>
            <td>
                <div>${attrInfo[i].attraction_address}</div>
            </td>
            <td>
                <div><textarea cols="40" rows="5">${attrInfo[i].attraction_information1}</textarea></div>
                <div><textarea cols="40" rows="5">${attrInfo[i].attraction_information2}</textarea></div>
            </td>
            <td>
                <div>${attrInfo[i].attraction_photo1}</div>
                <div>${attrInfo[i].attraction_photo2}</div>
            </td>
            <td>
                <div>${attrInfo[i].attraction_latitude}</div>
                <div>${attrInfo[i].attraction_longitude}</div>
            </td>
            <td>
                <div class="custom-control custom-switch">
                    <input type="checkbox" class="custom-control-input checkMe" id="customSwitch${i}">
                    <label class="custom-control-label" for="customSwitch${i}">上架</label>
                </div>
            </td>
            <td><button type="button" class="btn btn-light btn-sm btnDel">刪除</button></td>
        </tr>
        `;
        attrTable.innerHTML = attrRow;
    }
}

window.addEventListener("load", function () {
    let checkBox = document.querySelectorAll(".checkMe");
    for (i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked = "checked") {
            checkBox[i].value = "1";
        } else {
            checkBox[i].value = "0";
        }
    };
console.log(checkBox);   

    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            alert(xhr.responseText);
            getAttractionInfo(xhr.responseText);
            console.log(xhr.responseText);
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("get", "./php/getAttractionInfo.php", true);
    xhr.send(null);
}, false)



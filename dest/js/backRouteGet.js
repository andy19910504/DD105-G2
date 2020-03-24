
function getRouteInfo(info) {
    let routeTable = document.getElementById("routeTable");
    let routeInfo = JSON.parse(info);
    console.log(routeInfo);
    let routeRow = "";
    for (i = 0; i < routeInfo.length; i++) {
        routeRow += `
            <tr>
                <th scope="row"><div>${routeInfo[i].route_number}</div></th>
                <td>
                    <div class="routeNameBlock"><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${routeInfo[i].route_name}"></div>
                </td>
                <td>
                    <div class="routeInfoBlock"><textarea class="form-control">${routeInfo[i].route_information}</textarea></div>
                </td>
                <td>
                    <div class="routePhotoBlock"><img class="routePhoto" src="./img/attractions/${routeInfo[i].route_photo}"></div>
                </td>
                <td>
                    <div>路線各景點名稱
                    <div class="routeAttrName">${routeInfo[i].attraction_name}</div>
                    <div class="routeAttrName">${routeInfo[i].attraction_name}</div>
                    <div class="routeAttrName"></div>
                    <div class="routeAttrName"></div>
                    <div class="routeAttrName"></div>
                    </div>
                </td>
                <td>
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input checkMe" id="customSwitch${i}">
                        <label class="custom-control-label" for="customSwitch${i}">開放</label>
                        <input type="hidden" class="checkRouteStatus" name="checkRouteStatus" id="checkRouteStatus${i}" value="${routeInfo[i].route_status}">
                    </div>
                </td>
                <td>
                <div>${routeInfo[i].member_number}</div>
                </td>
                <td>
                    <button type="button" class="btn btn-light btn-sm btnSave">儲存</button>
                    <button type="button" class="btn btn-light btn-sm btnDel">刪除</button>
                </td>
            </tr>
        `;
        routeTable.innerHTML = routeRow;
    }

}

window.addEventListener("load", function () {

    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            alert("資料庫中有 " + JSON.parse(xhr.responseText).length + " 筆景點資料。");
            getRouteInfo(xhr.responseText);
            checkRouteStatus();
            // console.log(xhr.responseText);
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("get", "./php/getRouteInfo.php", true);
    xhr.send(null);
}, false);

function checkRouteStatus() {
    let checkMeLabels = document.getElementsByClassName("custom-control-label");
    let checkMe = document.getElementsByClassName("checkMe");
    let checkStatus = document.getElementsByClassName("checkRouteStatus");
    for (let i = 0; i < checkMeLabels.length; i++) {
        if (checkStatus[i].value == 0) {
            checkMe[i].checked = false;
        } else {
            checkMe[i].checked = true;
        }
        console.log(checkMe[i].checked)

        // console.log(i);
        checkMeLabels[i].onclick = function (e) {
            if (checkMe[i].checked == true) {
                checkStatus[i].value = 0;
            } else {

                checkStatus[i].value = 1;
            }
            console.log(checkStatus[i].value);
            // console.log(e.target)
        }
    }
}




function getRouteInfo(info) {
    let routeTable = document.getElementById("routeTable");
    let customTable = document.getElementById("customTable");
    let routeInfo = JSON.parse(info);
    console.log(routeInfo)
    console.log(routeInfo.customInfo)
    console.log(routeInfo.routeInfo[0]['route_number']);
    console.log(routeInfo.attractions[1]['route_number']);
    let key = Object.keys(routeInfo.attractions);
    console.log(key)

    console.log(routeInfo.routeInfo.length)
    let routeRow = "";
    for (let i = 0; i < routeInfo.routeInfo.length; i++) {
        routeRow += `
            <tr>
                <th scope="row"><div>${routeInfo.routeInfo[i].route_number}</div></th>
                <td>
                    <div class="routeNameBlock"><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${routeInfo.routeInfo[i].route_name}"></div>
                </td>
                <td>
                    <div class="routeInfoBlock"><textarea class="form-control" value="${routeInfo.routeInfo[i].route_information}">${routeInfo.routeInfo[i].route_information}</textarea></div>
                </td>
                <td>
                    <div class="routePhotoBlock"><img class="routePhoto" src="./img/routes/${routeInfo.routeInfo[i].route_photo}"></div>
                </td>
                <td>
                    <div>
                `
        for (let j = 0; j < key.length; j++) {

            if (routeInfo.routeInfo[i]['route_number'] == routeInfo.attractions[j]['route_number']) {
                routeRow += `
                    <div class="routeAttrName">${routeInfo.attractions[j]['attraction_name']}</div>
                            `
            }
        }
        routeRow +=
            `
                    </div>
                </td>
                <td>
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input checkMe" id="customSwitch${i}i">
                        <label class="custom-control-label" for="customSwitch${i}i">開放</label>
                        <input type="hidden" class="checkRouteStatus" name="checkRouteStatus" id="checkRouteStatus${i}i" value="${routeInfo.routeInfo[i].route_status}">
                    </div>
                </td>
                <td>
                <div>${routeInfo.routeInfo[i].member_number}</div>
                </td>
                <td>
                    <button type="button" class="btn btn-light btn-sm btnSave">儲存</button>
                    <button type="button" class="btn btn-light btn-sm btnDel">刪除</button>
                </td>
            </tr>
        `;
        routeTable.innerHTML = routeRow;
    }

    let customRow = "";
    for (let c = 0; c < routeInfo.customInfo.length; c++) {
        customRow += `
            <tr>
                <th scope="row"><div>${routeInfo.customInfo[c].route_number}</div></th>
                <td>
                    <div class="routeNameBlock"><input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value="${routeInfo.customInfo[c].route_name}"></div>
                </td>
                <td>
                    <div class="routeInfoBlock"><textarea class="form-control" value="${routeInfo.customInfo[c].route_information}">${routeInfo.customInfo[c].route_information}</textarea></div>
                </td>
            
                <td>
                    <div>
                `
        for (let n = 0; n < key.length; n++) {

            if (routeInfo.customInfo[c]['route_number'] == routeInfo.attractions[n]['route_number']) {
                customRow += `
                    <div class="routeAttrName">${routeInfo.attractions[n]['attraction_name']}</div>
                            `
            }
        }
        customRow +=
            `
                    </div>
                </td>
                <td>
                    <div class="custom-control custom-switch">
                        <input type="checkbox" class="custom-control-input checkMe" id="customSwitch${c}c">
                        <label class="custom-control-label" for="customSwitch${c}c">開放</label>
                        <input type="hidden" class="checkRouteStatus" name="checkRouteStatus" id="checkRouteStatus${c}c" value="${routeInfo.customInfo[c].route_status}">
                    </div>
                </td>
                <td>
                <div>${routeInfo.customInfo[c].member_number}</div>
                </td>
                <td>
                    <button type="button" class="btn btn-light btn-sm btnSave">儲存</button>
                    <button type="button" class="btn btn-light btn-sm btnDel">刪除</button>
                </td>
            </tr>
        `;
        customTable.innerHTML = customRow;
    }

}

window.addEventListener("load", function () {

    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            alert("資料庫中有 " + JSON.parse(xhr.responseText).routeInfo.length + " 筆景點資料。");
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


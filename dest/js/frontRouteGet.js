// 路線的分類filter，有幾條官方路線就要顯示幾個 filter
function getFilterName(info) {
    let routeInfo = JSON.parse(info);
    console.log(routeInfo)
    let filter = document.querySelector('.filterAll');
    let filterRows = "";

    for (let i = 0; i < routeInfo.length; i++) {
        filterRows += `
        <li id="filter${i}" class="filter">${routeInfo[i].route_name}</li>
        `
    }
    filter.innerHTML = filterRows;

    // 傳送地一個filter的值來取得第一條路線資訊
    let firstRoute = document.getElementById('filter0').innerHTML;
    console.log(firstRoute)
    let firstRouteForm = new FormData();
    firstRouteForm.append('firstRoute', firstRoute);

    let xhr2 = new XMLHttpRequest();
    xhr2.onload = function () {
        if (xhr2.status == 200) {
            let firstRouteInfo = JSON.parse(xhr2.responseText);
            // console.log(firstRouteInfo);

            let routeAttractionBlock = document.querySelectorAll('.routeAttractionBlock');
            let routeTilteBlock = document.querySelector('.routeTilteBlock');

            routeTilteBlock.innerHTML =
                `<img src="./img/routes/${firstRouteInfo[0].route_photo}"></img>`;

            routeAttractionBlock[0].innerHTML =
                `
    <div class="attractionTitle">
        <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
        <p>${firstRouteInfo[0].attraction_name}</p>
    </div>
    <div class="attractionImageBlock">
        <div class="attractionImage">
        <div class="attractionMask"><img src="./img/attractions/${firstRouteInfo[0].attraction_photo1}"></div>
        </div>
    </div>
        `;
            routeAttractionBlock[1].innerHTML =
                `
    <div class="attractionTitle">
        <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
        <p>${firstRouteInfo[1].attraction_name}</p>
    </div>
    <div class="attractionImageBlock">
        <div class="attractionImage">
        <div class="attractionMask"><img src="./img/attractions/${firstRouteInfo[1].attraction_photo1}"></div>
        </div>
    </div>
    `;
            routeAttractionBlock[2].innerHTML =
                `
    <div class="attractionTitle">
        <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
        <p>${firstRouteInfo[2].attraction_name}</p>
    </div>
    <div class="attractionImageBlock">
        <div class="attractionImage">
        <div class="attractionMask"><img src="./img/attractions/${firstRouteInfo[2].attraction_photo1}"></div>
        </div>
    </div>
    `;
            routeAttractionBlock[3].innerHTML =
                `
    <div class="attractionTitle">
        <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
        <p>${firstRouteInfo[3].attraction_name}</p>
    </div>
    <div class="attractionImageBlock">
        <div class="attractionImage">
        <div class="attractionMask"><img src="./img/attractions/${firstRouteInfo[3].attraction_photo1}"></div>
        </div>
    </div>
    `;
            routeAttractionBlock[4].innerHTML =
                `
    <div class="attractionTitle">
        <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
        <p>${firstRouteInfo[4].attraction_name}</p>
    </div>
    <div class="attractionImageBlock">
        <div class="attractionImage">
        <div class="attractionMask"><img src="./img/attractions/${firstRouteInfo[4].attraction_photo1}"></div>
        </div>
    </div>
    `;
        } else {
            alert(xhr2.status);
        }

    }
    xhr2.open("Post", "./php/firstRouteGet.php", true);
    xhr2.send(firstRouteForm);
    
    // 點選 filter
    document.querySelectorAll('.filter')[0].setAttribute('class', 'filter showFilter');
    $('.filterAll li').click(function (e) {
        e.preventDefault();

        $(this).closest("ul.filterAll").find("li.filter").removeClass("showFilter");
        $(this).addClass("showFilter");
    });
}

// 取得一開始顯示在頁面上路線的資訊


window.addEventListener("load", function () {

    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            getFilterName(xhr.responseText);

        } else {
            alert(xhr.status);
        }
    }
    xhr.open("get", "./php/frontRouteFilter.php", true);
    xhr.send(null);
}, false);
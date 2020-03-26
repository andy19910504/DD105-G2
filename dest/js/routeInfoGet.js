function getFilter(info) {
    let routeInfo = JSON.parse(info);
    let filter = document.querySelector('.filterBlock');
    let filterRows = "";

    filterRows += `
    <ul class="filterAll">
    `
    for (let i = 0; i < routeInfo.routeInfo.length; i++) {
        filterRows += `
        <li id="filter${i}" class="filter">${routeInfo.routeInfo[i].route_name}</li>
        `
    }
    filterRows += `    
    </ul>
    <img src="./img/route/filterBgimage.png" class="filterBgImage">    
        `
    filter.innerHTML = filterRows;
    document.querySelectorAll('.filter')[0].setAttribute('class', 'filter showFilter');

    $('.filterAll li').click(function (e) {
        e.preventDefault();

        $(this).closest("ul.filterAll").find("li.filter").removeClass("showFilter");
        $(this).addClass("showFilter");
    });
}
function getRouteInfo(info) {
    let routeInfo = JSON.parse(info);
    let routeAttractionBlock = document.querySelectorAll('.routeAttractionBlock');
    routeAttractionBlock[0].innerHTML =
        `
<div class="attractionTitle">
    <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
    <p>${routeInfo.attractions[0]['attraction_name']}</p>
</div>
<div class="attractionImageBlock">
    <div class="attractionImage">
    <div class="attractionMask"><img src="./img/attractions/${routeInfo.attractions[0]['attraction_photo1']}"></div>
    </div>
</div>
    `;
    routeAttractionBlock[1].innerHTML =
        `
<div class="attractionTitle">
    <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
    <p>${routeInfo.attractions[1]['attraction_name']}</p>
</div>
<div class="attractionImageBlock">
    <div class="attractionImage">
    <div class="attractionMask"><img src="./img/attractions/${routeInfo.attractions[1]['attraction_photo1']}"></div>
    </div>
</div>
`;
    routeAttractionBlock[2].innerHTML =
        `
<div class="attractionTitle">
    <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
    <p>${routeInfo.attractions[2]['attraction_name']}</p>
</div>
<div class="attractionImageBlock">
    <div class="attractionImage">
    <div class="attractionMask"><img src="./img/attractions/${routeInfo.attractions[2]['attraction_photo1']}"></div>
    </div>
</div>
`;
    routeAttractionBlock[3].innerHTML =
        `
<div class="attractionTitle">
    <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
    <p>${routeInfo.attractions[3]['attraction_name']}</p>
</div>
<div class="attractionImageBlock">
    <div class="attractionImage">
    <div class="attractionMask"><img src="./img/attractions/${routeInfo.attractions[3]['attraction_photo1']}"></div>
    </div>
</div>
`;
    routeAttractionBlock[4].innerHTML =
        `
<div class="attractionTitle">
    <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
    <p>${routeInfo.attractions[4]['attraction_name']}</p>
</div>
<div class="attractionImageBlock">
    <div class="attractionImage">
    <div class="attractionMask"><img src="./img/attractions/${routeInfo.attractions[4]['attraction_photo1']}"></div>
    </div>
</div>
`;

}

window.addEventListener("load", function () {

    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            getFilter(xhr.responseText);
            getRouteInfo(xhr.responseText);
            // console.log(xhr.responseText);
        } else {
            alert(xhr.status);
        }
    }
    xhr.open("get", "./php/getRouteInfo.php", true);
    xhr.send(null);
}, false);
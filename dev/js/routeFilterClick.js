$(document).on('click', '.filter', function filterClick() {
    let routeName = $(this).text();
    console.log(routeName)
    let editForm = new FormData;
    editForm.append('routeName', routeName);

    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (xhr.status == 200) {
            let routeInfo = JSON.parse(xhr.responseText);
            console.log(routeInfo)
            let routeAttractionBlock = document.querySelectorAll('.routeAttractionBlock');
            let routeTilteBlock = document.querySelector('.routeTilteBlock');

            routeTilteBlock.innerHTML =
                `<img src="./img/routes/${routeInfo[0].route_photo}"></img>`;

            routeAttractionBlock[0].innerHTML =
                `
    <div class="attractionTitle">
        <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
        <p>${routeInfo[0].attraction_name}</p>
    </div>
    <div class="attractionImageBlock">
        <div class="attractionImage">
        <div class="attractionMask"><img src="./img/attractions/${routeInfo[0].attraction_photo1}"></div>
        </div>
    </div>
        `;
            routeAttractionBlock[1].innerHTML =
                `
    <div class="attractionTitle">
        <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
        <p>${routeInfo[1].attraction_name}</p>
    </div>
    <div class="attractionImageBlock">
        <div class="attractionImage">
        <div class="attractionMask"><img src="./img/attractions/${routeInfo[1].attraction_photo1}"></div>
        </div>
    </div>
    `;
            routeAttractionBlock[2].innerHTML =
                `
    <div class="attractionTitle">
        <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
        <p>${routeInfo[2].attraction_name}</p>
    </div>
    <div class="attractionImageBlock">
        <div class="attractionImage">
        <div class="attractionMask"><img src="./img/attractions/${routeInfo[2].attraction_photo1}"></div>
        </div>
    </div>
    `;
            routeAttractionBlock[3].innerHTML =
                `
    <div class="attractionTitle">
        <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
        <p>${routeInfo[3].attraction_name}</p>
    </div>
    <div class="attractionImageBlock">
        <div class="attractionImage">
        <div class="attractionMask"><img src="./img/attractions/${routeInfo[3].attraction_photo1}"></div>
        </div>
    </div>
    `;
            routeAttractionBlock[4].innerHTML =
                `
    <div class="attractionTitle">
        <img src="./img/route/landMark.png" alt="" srcset="" class="landMark">
        <p>${routeInfo[4].attraction_name}</p>
    </div>
    <div class="attractionImageBlock">
        <div class="attractionImage">
        <div class="attractionMask"><img src="./img/attractions/${routeInfo[4].attraction_photo1}"></div>
        </div>
    </div>
    `;


        } else {
            alert(xhr.status);
        }
    }
    xhr.open("post", "./php/frontRouteInfo.php", true);
    xhr.send(editForm);
})
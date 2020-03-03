// // /*第一支程式: 操作畫面步驟一(換背景)
// //   (1)換背景 (2)加框框標示*/
// // //建立html連結:背景圖
function doFirst() {
    let canvas = document.getElementById('postcardCanvas');
    let context = canvas.getContext('2d');


    let img = new Image();
    let postBGC_1 = document.getElementById("postBGC_1");
    let postBGC_2 = document.getElementById("postBGC_2");
    let postBGC_3 = document.getElementById("postBGC_3");

    $(document).ready(function () {
        $(postBGC_1).click(function () {
            img.src = './img/postcard/hip-square.png';
            context.drawImage(img, 0, 0, canvas.clientWidth, canvas.height); //drawImage(img,x,y,width,height)
        });
        $(postBGC_2).click(function () {
            img.src = './img/postcard/squared_metal_@2X.png';
            context.drawImage(img, 0, 0, canvas.clientWidth, canvas.height); //drawImage(img,x,y,width,height)
        });
        $(postBGC_3).click(function () {
            img.src = './img/postcard/p0126_m.png';
            context.drawImage(img, 0, 0, canvas.clientWidth, canvas.height); //drawImage(img,x,y,width,height)
        });
    });
}
window.addEventListener('load', doFirst);

function doFirst() {

    let bgc = document.getElementById('postWhiteBack');
    let Oval = document.getElementById('Oval');
    let postBGC_1 = document.getElementById("postBGC_1");
    let postBGC_2 = document.getElementById("postBGC_2");
    let postBGC_3 = document.getElementById("postBGC_3");

    $(document).ready(function () {
        $(postBGC_1).click(function () {
            bgc.style.backgroundImage="url('./img/postcard/hip-square.png')";
            Oval.style.backgroundImage="url('./img/postcard/hip-square.png')";
        });
        $(postBGC_2).click(function () {
            bgc.style.backgroundImage="url('./img/postcard/squared_metal_@2X.png')";
            Oval.style.backgroundImage="url('./img/postcard/squared_metal_@2X.png')";
        });
        $(postBGC_3).click(function () {
            bgc.style.backgroundImage="url('./img/postcard/p0126_m.png')";
            Oval.style.backgroundImage="url('./img/postcard/p0126_m.png')";
        });
    });
}
window.addEventListener('load', doFirst);

//背景1
function PostcardChangeBGI_1() {
    document.getElementById("postBGC_1").classList.add("postBGC_1_Selected");
    document.getElementById("postBGC_2").classList.remove("postBGC_2_Selected");
    document.getElementById("postBGC_3").classList.remove("postBGC_3_Selected");
}
//背景2
function PostcardChangeBGI_2() {
    document.getElementById("postBGC_1").classList.remove("postBGC_1_Selected");
    document.getElementById("postBGC_2").classList.add("postBGC_2_Selected");
    document.getElementById("postBGC_3").classList.remove("postBGC_3_Selected");
}

//背景3
function PostcardChangeBGI_3() {
    document.getElementById("postBGC_1").classList.remove("postBGC_1_Selected");
    document.getElementById("postBGC_2").classList.remove("postBGC_2_Selected");
    document.getElementById("postBGC_3").classList.add("postBGC_3_Selected");
}
function postcardInit() {
    document.getElementById("postBGC_1").addEventListener("click", PostcardChangeBGI_1);
    document.getElementById("postBGC_2").addEventListener("click", PostcardChangeBGI_2);
    document.getElementById("postBGC_3").addEventListener("click", PostcardChangeBGI_3);
}

window.addEventListener("load", postcardInit);

//步驟2_________________________________________________________________________________

//風景1
function PhotoChangeBGI_1() {
    document.getElementById("postphoto_1").classList.add("postphoto_1_Selected");
    document.getElementById("postphoto_2").classList.remove("postphoto_2_Selected");
    document.getElementById("postphoto_3").classList.remove("postphoto_3_Selected");
    document.getElementById("postphoto_4").classList.remove("postphoto_4_Selected");
}
//風景2
function PhotoChangeBGI_2() {
    document.getElementById("postphoto_1").classList.remove("postphoto_1_Selected");
    document.getElementById("postphoto_2").classList.add("postphoto_2_Selected");
    document.getElementById("postphoto_3").classList.remove("postphoto_3_Selected");
    document.getElementById("postphoto_4").classList.remove("postphoto_4_Selected");
}

//風景3
function PhotoChangeBGI_3() {
    document.getElementById("postphoto_1").classList.remove("postphoto_1_Selected");
    document.getElementById("postphoto_2").classList.remove("postphoto_2_Selected");
    document.getElementById("postphoto_3").classList.add("postphoto_3_Selected");
    document.getElementById("postphoto_4").classList.remove("postphoto_4_Selected");
}

//風景4
function PhotoChangeBGI_4() {
    document.getElementById("postphoto_1").classList.remove("postphoto_1_Selected");
    document.getElementById("postphoto_2").classList.remove("postphoto_2_Selected");
    document.getElementById("postphoto_3").classList.remove("postphoto_3_Selected");
    document.getElementById("postphoto_4").classList.add("postphoto_4_Selected");
}
function postcardInit2() {
    document.getElementById("postphoto_1").addEventListener("click", PhotoChangeBGI_1);
    document.getElementById("postphoto_2").addEventListener("click", PhotoChangeBGI_2);
    document.getElementById("postphoto_3").addEventListener("click", PhotoChangeBGI_3);
    document.getElementById("postphoto_4").addEventListener("click", PhotoChangeBGI_4);
}

window.addEventListener("load", postcardInit2);


// // /*第二支程式: 操作畫面步驟二(換風景圖)
// //   (1)換圖片 (2)加框框標示*/
// // //建立html連結:背景圖
function doFirst2() {
    let canvas = document.getElementById('postcardCanvas');
    let context = canvas.getContext('2d');

    let cw = window.innerWidth - 800;
    let ch = cw * (3 / 4);
    canvas.width = cw;
    canvas.height = ch;

    let img = new Image();
    let postphoto_1 = document.getElementById("postphoto_1");
    let postphoto_2 = document.getElementById("postphoto_2");
    let postphoto_3 = document.getElementById("postphoto_3");
    let postphoto_4 = document.getElementById("postphoto_4");

    $(document).ready(function () {
        $(postphoto_1).click(function () {
            img.src = './img/postcard/taipei101-1.jpg';
            context.drawImage(img, 0, 0,cw, ch); //drawImage(img,x,y,width,height)
        });
        $(postphoto_2).click(function () {
            img.src = './img/postcard/taipei101-2.jpg';
            context.drawImage(img, 0, 0,cw, ch); //drawImage(img,x,y,width,height)
        });
        $(postphoto_3).click(function () {
            img.src = './img/postcard/taipei101-3.jpg';
            context.drawImage(img, 0, 0,cw, ch); //drawImage(img,x,y,width,height)
        });
        $(postphoto_4).click(function () {
            img.src = './img/postcard/event_slider3.png';
            context.drawImage(img, 0, 0,cw, ch); //drawImage(img,x,y,width,height)
        });
    });
}
window.addEventListener('load', doFirst2);




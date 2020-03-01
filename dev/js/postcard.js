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

// // /*第三支程式: 操作畫面步驟一(換背景)
// //   (1)換背景 (2)加框框標示*/
// // //建立html連結:背景圖
// // let postBGC_1 = document.getElementById("postBGC_1");
// // let postBGC_2 = document.getElementById("postBGC_2");
// // let postBGC_3 = document.getElementById("postBGC_3");


// // //建立html連結:demo畫面, 第四支程式裡另外用postcardCanvas抓一個套件Fabric.js的畫布, 怕打架
// // var canvas1 = document.getElementById("postcardCanvas");

// // //抓父層RWD之後的大小去設定畫布大小
// // var postFather = document.getElementById("postWhiteBack");
// // var canvas1W = postFather.offsetWidth - 20;
// // var canvas1H = (postFather.offsetWidth - 20) * 350 / 530;
// // console.log(canvas1W);
// // console.log(canvas1H);


// // /*==三-1.只要點擊更換背景,無條件先畫一次*/
// // //背景1
// // function PostcardChangeBGI_1(){
// // 	//用這個方法不能一起存取在客製明信片照片
// // 	canvas1.style.backgroundImage = "url(./img/postcard/hip-square.png)";

// // 	postBGC_1.classList.add("postBGC_1_Selected");
// // 	postBGC_2.classList.remove("postBGC_2_Selected");
// // 	postBGC_3.classList.remove("postBGC_3_Selected");
// // }

// // //背景2
// // function PostcardChangeBGI_2(){
// // 	canvas1.style.backgroundImage = "url(./img/postcard/squared_metal_@2X.png)";

// // 	postBGC_1.classList.remove("postBGC_1_Selected");
// // 	postBGC_2.classList.add("postBGC_2_Selected");
// // 	postBGC_3.classList.remove("postBGC_3_Selected");
// // }

// // //背景3
// // function PostcardChangeBGI_3(){
// // 	canvas1.style.backgroundImage = "url(./img/postcard/p0126_m.png)";

// // 	postBGC_1.classList.remove("postBGC_1_Selected");
// // 	postBGC_2.classList.remove("postBGC_2_Selected");
// // 	postBGC_3.classList.add("postBGC_3_Selected");
// // }


// // }
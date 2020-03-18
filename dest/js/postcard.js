function doFirst() {

    // /*第一支程式: 切換步驟窗格--點擊時需要(1)切換postRight  (2)切換步驟的黃底postStepYellow
    $(document).ready(function () {
        $("#postRight_1").css("display", "block");
        $("#postRight_2").css("display", "none");
        $("#postRight_3").css("display", "none");
        $("#postRight_4").css("display", "none");
        $("#postRight_5").css("display", "none");
        $("#step1").addClass("step_yellow");
        /*步驟1~步驟2*/
        $("#step_btn1").on("click", function () {
            $("#postRight_1").css("display", "none");
            $("#postRight_2").css("display", "block");
            $("#step2").addClass("step_yellow");
            $("#step1").removeClass("step_yellow");
        });
        /*步驟2~步驟1*/
        $("#step_btn2").on("click", function () {
            $("#postRight_1").css("display", "block");
            $("#postRight_2").css("display", "none");
            $("#step1").addClass("step_yellow");
            $("#step2").removeClass("step_yellow");
        });
        /*步驟2~步驟3*/
        $("#step_btn3").on("click", function () {
            $("#postRight_2").css("display", "none");
            $("#postRight_3").css("display", "block");
            $("#step3").addClass("step_yellow");
            $("#step2").removeClass("step_yellow");
        });
        /*步驟3~步驟2*/
        $("#step_btn4").on("click", function () {
            $("#postRight_2").css("display", "block");
            $("#postRight_3").css("display", "none");
            $("#step2").addClass("step_yellow");
            $("#step3").removeClass("step_yellow");
        });
        /*步驟3~步驟4*/
        $("#step_btn5").on("click", function () {
            $("#postRight_3").css("display", "none");
            $("#postRight_4").css("display", "block");
            $("#step4").addClass("step_yellow");
            $("#step3").removeClass("step_yellow");
        });
        /*步驟4~步驟3*/
        $("#step_btn6").on("click", function () {
            $("#postRight_4").css("display", "none");
            $("#postRight_3").css("display", "block");
            $("#step3").addClass("step_yellow");
            $("#step4").removeClass("step_yellow");
        });
        /*步驟4~步驟5*/
        $("#step_btn7").on("click", function () {
            $("#postRight_4").css("display", "none");
            $("#postRight_5").css("display", "block");
            $("#step5").addClass("step_yellow");
            $("#step4").removeClass("step_yellow");
        });
        /*步驟5~步驟4*/
        $("#step_btn8").on("click", function () {
            $("#postRight_5").css("display", "none");
            $("#postRight_4").css("display", "block");
            $("#step4").addClass("step_yellow");
            $("#step5").removeClass("step_yellow");
        });
        /*完成*/
        $("#step_btn9").on("click", function () {
            // $("#postRight_5").css("display", "none");
            // $("#postRight_4").css("display", "block");
            // $("#step4").addClass("step_yellow");
            // $("#step5").removeClass("step_yellow");
        });
    });

    // // /*第二支程式: 操作畫面步驟一(換背景)
    // //   (1)換背景 (2)加框框標示*/

    // function doFirst3() {
    //     let canvas = document.getElementById('postcardCanvas2');
    //     let context = canvas.getContext('2d');
    //     let cw = window.innerWidth;
    //     let ch = window.innerHeight;
    //     canvas.width = cw;
    //     canvas.height = ch;



    //     let pic = new Image();
    //     pic.src = '../img/postcard/postcardLOGO.png';
    //     pic.addEventListener('load', function () {
    //         context.drawImage(pic, 0, 0, canvas.width, canvas.height);
    //     });
    // }
    // window.addEventListener('load', doFirst3);

    /*步驟一畫圖 */


    $(document).ready(function () {
        let canvas = document.getElementById('postcardCanvas');
        let context = canvas.getContext('2d');
        // let context2 = canvas.getContext('2d');

        let cw = window.innerWidth - 800;
        let ch = cw * (3 / 4);
        canvas.width = cw;
        canvas.height = ch;
        let img = new Image();
        img.src = './img/postcard/postcardBGI_1.png';
        let img2 = new Image();
        img2.src = './img/postcard/postcardBGI_2.png';
        let img3 = new Image();
        img3.src = './img/postcard/postcardBGI_3.png';
        


        let postBGC_1 = document.getElementById("postBGC_1");
        let postBGC_2 = document.getElementById("postBGC_2");
        let postBGC_3 = document.getElementById("postBGC_3");


        let postphoto_1 = document.getElementById("postphoto_1");
        let postphoto_2 = document.getElementById("postphoto_2");
        let postphoto_3 = document.getElementById("postphoto_3");
        let postphoto_4 = document.getElementById("postphoto_4");


        let icon_1 = document.getElementById("icon_1");
        let icon_2 = document.getElementById("icon_2");
        let icon_3 = document.getElementById("icon_3");
        let icon_4 = document.getElementById("icon_4");
        // context2.globalCompositeOperation = 'destination-over';
        // context.globalCompositeOperation = 'copy';
        
        

        $(postBGC_1).click(function () {
            
            context.drawImage(img, 0, 0, canvas.width, canvas.height); //drawImage(img,x,y,width,height)
        });
        $(postBGC_2).click(function () {
            
            context.drawImage(img2, 0, 0, canvas.width, canvas.height); //drawImage(img,x,y,width,height)
        });
        $(postBGC_3).click(function () {
            
            context.drawImage(img3, 0, 0, canvas.width, canvas.height); //drawImage(img,x,y,width,height)
        });


        $(postphoto_1).click(function () {
            let bgi = new Image();
            bgi.src = './img/postcard/taipei101-1.jpg';
            context.drawImage(bgi, 0, 0, canvas.width, canvas.height); //drawImage(img,x,y,width,height)
        });
        $(postphoto_2).click(function () {
            let bgi2 = new Image();
            bgi2.src = './img/postcard/taipei101-2.jpg';
            context.drawImage(bgi2, 0, 0, canvas.width, canvas.height); //drawImage(img,x,y,width,height)
        });
        $(postphoto_3).click(function () {
            let bgi3 = new Image();
            bgi3.src = './img/postcard/taipei101-3.jpg';
            context.drawImage(bgi3, 0, 0, canvas.width, canvas.height); //drawImage(img,x,y,width,height)
        });
        $(postphoto_4).click(function () {
            let bgi4 = new Image();
            bgi4.src = './img/postcard/event_slider3.png';
            context.drawImage(bgi4, 0, 0, canvas.width, canvas.height); //drawImage(img,x,y,width,height)
            
        });














        $(icon_1).click(function () {

            img.src = './img/postcard/postIcon01.png';
            context.drawImage(img, 0, 0, canvas.width, canvas.height); //drawImage(img,x,y,width,height)
        });
        $(icon_2).click(function () {
            img.src = './img/postcard/postIcon02.png';
            context.drawImage(img, 0, 0, canvas.width, canvas.height); //drawImage(img,x,y,width,height)
        });
        $(icon_3).click(function () {
            img.src = './img/postcard/postIcon03.png';
            context.drawImage(img, 0, 0, canvas.width, canvas.height); //drawImage(img,x,y,width,height)
        });
        $(icon_4).click(function () {
            img.src = './img/postcard/postIcon06.png';
            context.drawImage(img, 0, 0, canvas.width, canvas.height); //drawImage(img,x,y,width,height)
        });
    });
    resizeCanvas();

    function resizeCanvas() {
        canvas.width = previewArea.clientWidth; //第一個canvas的寬 = 父層div的寬
        canvas.height = previewArea.clientHeight; //第一個canvas的高 = 父層div的高
        imgRatio = 1000 / 1000; //圖片寬高比例
        imgWidth = previewArea.clientWidth * 0.7; //圖片寬度參數
        imgHeight = imgWidth * imgRatio; //圖片高度參數
        // imgOffsetX = (canvas.width - imgWidth) / 2; //圖片X位移量
        // imgOffsetY = (canvas.height - imgHeight) / 2; //圖片Y位移量
        if (window.innerWidth <= 414) { //RWD
            imgWidth = previewArea.clientWidth * 1;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = -15;
        } else if (window.innerWidth < 576) {
            imgWidth = previewArea.clientWidth * 1;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.width - imgWidth) / 10;
        } else if (window.innerWidth < 768) {
            imgWidth = previewArea.clientWidth * 0.7;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2.2;
            imgOffsetY = (canvas.width - imgWidth) / 10;
        } else if (window.innerWidth < 992) {
            imgWidth = previewArea.clientWidth * 1.1;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
        } else if (window.innerWidth < 1200) {
            imgWidth = previewArea.clientWidth * 1;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
        } else if (window.innerWidth < 1500) {
            imgWidth = previewArea.clientWidth * 0.9;
            imgHeight = imgWidth * imgRatio;
            imgOffsetX = (canvas.width - imgWidth) / 2;
            imgOffsetY = (canvas.height - imgHeight) / 2;
        }
    }
    window.addEventListener('resize', resizeCanvas);









    //操作畫面步驟一(選背景)
    //步驟1_________________________________________________________________________________

    //背景1
    function PostcardChangeBGI_1() {
        document.getElementById("postBGC_1").classList.add("postBGC_1_Selected");
        document.getElementById("postBGC_2").classList.remove("postBGC_2_Selected");
        document.getElementById("postBGC_3").classList.remove("postBGC_3_Selected");
    }
    //背景2
    function PostcardChangeBGI_2() {
        document.getElementById("postBGC_1").classList.remove("postBGC_1_Selected");
        document.getElementById("postBGC_1_foucs").classList.remove("postBGC_1_foucs");
        document.getElementById("postBGC_2").classList.add("postBGC_2_Selected");
        document.getElementById("postBGC_3").classList.remove("postBGC_3_Selected");
    }
    //背景3
    function PostcardChangeBGI_3() {
        document.getElementById("postBGC_1").classList.remove("postBGC_1_Selected");
        document.getElementById("postBGC_2").classList.remove("postBGC_2_Selected");
        document.getElementById("postBGC_3").classList.add("postBGC_3_Selected");
        document.getElementById("postBGC_1_foucs").classList.remove("postBGC_1_foucs");
    }
    $(document).ready(function () {
        document.getElementById("postBGC_1").addEventListener("click", PostcardChangeBGI_1);
        document.getElementById("postBGC_2").addEventListener("click", PostcardChangeBGI_2);
        document.getElementById("postBGC_3").addEventListener("click", PostcardChangeBGI_3);
    });


    //操作畫面步驟二(選風景)
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

    $(document).ready(function () {
        document.getElementById("postphoto_1").addEventListener("click", PhotoChangeBGI_1);
        document.getElementById("postphoto_2").addEventListener("click", PhotoChangeBGI_2);
        document.getElementById("postphoto_3").addEventListener("click", PhotoChangeBGI_3);
        document.getElementById("postphoto_4").addEventListener("click", PhotoChangeBGI_4);
    });

    //操作畫面步驟三(選插圖)
    //步驟3_________________________________________________________________________________

    //ICON1
    function IconChangeBGI_1() {
        document.getElementById("icon_1").classList.add("icon_1_Selected");
        document.getElementById("icon_2").classList.remove("icon_2_Selected");
        document.getElementById("icon_3").classList.remove("icon_3_Selected");
        document.getElementById("icon_4").classList.remove("icon_4_Selected");
    }
    //ICON2
    function IconChangeBGI_2() {
        document.getElementById("icon_1").classList.remove("icon_1_Selected");
        document.getElementById("icon_2").classList.add("icon_2_Selected");
        document.getElementById("icon_3").classList.remove("icon_3_Selected");
        document.getElementById("icon_4").classList.remove("icon_4_Selected");
    }

    //ICON3
    function IconChangeBGI_3() {
        document.getElementById("icon_1").classList.remove("icon_1_Selected");
        document.getElementById("icon_2").classList.remove("icon_2_Selected");
        document.getElementById("icon_3").classList.add("icon_3_Selected");
        document.getElementById("icon_4").classList.remove("icon_4_Selected");
    }

    //ICON4
    function IconChangeBGI_4() {
        document.getElementById("icon_1").classList.remove("icon_1_Selected");
        document.getElementById("icon_2").classList.remove("icon_2_Selected");
        document.getElementById("icon_3").classList.remove("icon_3_Selected");
        document.getElementById("icon_4").classList.add("icon_4_Selected");
    }

    $(document).ready(function () {
        document.getElementById("icon_1").addEventListener("click", IconChangeBGI_1);
        document.getElementById("icon_2").addEventListener("click", IconChangeBGI_2);
        document.getElementById("icon_3").addEventListener("click", IconChangeBGI_3);
        document.getElementById("icon_4").addEventListener("click", IconChangeBGI_4);
    });

}
window.addEventListener('load', doFirst);
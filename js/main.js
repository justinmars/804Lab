//滚动时间开始===================================
$(window).scroll(function () {
    headerInit();
});


function headerInit() {
        if($(this).scrollTop()>0){
            $("body").addClass("fixed-header-on");
        }else {
            $("body").removeClass("fixed-header-on");
        }
        console.log("run");
}

    headerInit();


//滚动时间结束===================================
//index时间开始===================================
var images = ["img/bg1.jpg"];

$(".index").backstretch(images,{
    fade:750,
    duration:5000,
    preload:1,
    start:1
});

//index时间结束===================================

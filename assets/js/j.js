//循环所有的一级菜单取到li的个数，添加鼠标悬停事件   鼠标滑上去显示子菜单 鼠标离开隐藏子菜单
var lis = document.getElementsByClassName('myl');
var dls = document.getElementsByTagName("dl")[0];
var lib = document.getElementsByClassName("buys");
var dl = document.getElementsByClassName("buy")[0];
var lic = document.getElementsByClassName("cutomer");
var cus = document.getElementsByClassName("cus")[0];
var navs = document.getElementsByClassName("navgate");
var item = document.getElementsByClassName("urlnav ")[0];

for (i = 0; i < lis.length; i++) {
    lis[i].onmouseover = function () {
        dls.style.display = "block"
    }
    lis[i].onmouseout = function () {
        dls.style.display = "none"
    }

    lib[i].onmouseover = function () {
        dl.style.display = "block"
    }
    lib[i].onmouseout = function () {
        dl.style.display = "none"
    }

    lic[i].onmouseover = function () {
        cus.style.display = "block"

    }
    lic[i].onmouseout = function () {
        cus.style.display = "none"

    }
    navs[i].onmouseover = function () {
        item.style.display = "block"

    }
    navs[i].onmouseout = function () {
        item.style.display = "none"

    }
}


// var b = document.getElementsByClassName("logoimg")[0];
// b.onmouseover = function () {
//     console.log(123)
//     this.style.backgroundImage = "url(../images/1.gif)"
// }

// /首页轮播图模块
$(function () {
    var lis = $(".col2 .imgs li");
    //小圆点对应出现样式
    $(".circle li").mouseover(function () {
        // console.log(1)
        $(this).addClass("circle_active").siblings().removeClass("circle_active")//给小圆点添加样式
        index=$(this).index()//获取当前点击小圆点的索引
        lis.eq(index).fadeIn(800).siblings().fadeOut(800)//小圆点对应的图片出现

    })
    //右边箭头模块
    var index = 0;
    $('.arrr').click(function () {
        index++;
        if (index == lis.length) {
            index = 0
        }
        $(".circle li").eq(index).addClass("circle_active").siblings().removeClass("circle_active")//小圆点对应
        lis.eq(index).fadeIn(800).siblings().fadeOut(800);//图片对应

    })

    //左边箭头
    $('.arrl').click(function () {
        index--;
        if (index == -1) {
            index = lis.length - 1;
        }
        $(".circle li").addClass("circle_active").siblings().removeClass("circle_active")
        lis.eq(index).fadeIn(800).siblings().fadeOut(800);

    })
    //设置定时执行
    var run=function () {
        index++;
        if (index == lis.length) {
            index = 0
        }
        $(".circle li").eq(index).addClass("circle_active").siblings().removeClass("circle_active")//小圆点对应
        lis.eq(index).fadeIn(800).siblings().fadeOut(800);//图片对应
    }
   var time=setInterval(run,2500)

    //鼠标放上去，显示箭头,清除定时执行
    $(".col2").mouseover(function () {
    $(".arr").show()
        clearInterval(time)
    })
    //鼠标离开，隐藏箭头 开始自动播放
    $(".col2").mouseout(function () {
        $(".arr").hide()
        time=setInterval(run,2500)
    })

})

//倒计时
// $(function(){
//     window.setInterval(getTimer,10);/*设置不间断定时器执行getTimer函数*/
// })
//
// function getTimer() {
//     var endtime = new Date("2019/07/13 00:00:00");  /*定义结束时间*/
//     var nowtime = new Date();/*获取当前时间*/
//     var cha = endtime.getTime() - nowtime.getTime();/*得到它们相差的时间*/
//     // var day = Math.floor(cha / 1000 / 60 / 60 / 24); /*划分出时分秒*/
//     var hour = Math.floor(cha / 1000 / 60 / 60 % 24);
//     var minute = Math.floor(cha / 1000 / 60 % 60);
//     var second = Math.floor(cha / 1000 % 60);
//     if (minute <= 9) minute = minute;
//     if (second <= 9) second =  second;
//     if (hour <= 9) hour = hour;
//     // $("#t_day").html(day + "天"); /*写到页面中*/
//     $(".hour").html("0"+hour );
//     $(".minute").html("0"+minute );
//     $(".second").html(second );
//
// }
function set() {

    //倒计时=终止时间-现在的时间
    var EndTime = new Date('2019/07/16 11:00:00');
    var NowTime = new Date();

//时间差  getTime时间函数，获取时分秒
    var t = EndTime.getTime() - NowTime.getTime();
    // console.log(t)

//天  时  分  秒
    var d = 0;
    var h = 0;
    var m = 0;
    var s = 0;
//
// //   计算倒计时t  固定写法
    if (t >= 0){
        d = Math.floor(t/1000/60/60/24);//获取剩余天数
        h = Math.floor(t/1000/60/60%24);//获取剩余小时
        m = Math.floor(t/1000/60%60);//获取剩余分钟
        s = Math.floor(t/1000%60);//获取剩余秒数
    }


    //如果天数大于一天及小于一天的样式
    var c = d + '天';

    if(d>0){
        document.getElementById('day').style.display='c';
    }else document.getElementById('day').style.display='none';

//     //改变时分秒的样式
//     d =checkTime(d);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);

    //注意事件带参啊i
    function checkTime(i) {
        if (i<10){
            i = '0'+i
        } return i
    }


//将倒计时赋值给div中
    document.getElementById('day').innerHTML = c;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = s;
}
setInterval(set,1000);


//右侧固定导航滑动
 $(function () {
    $('.top').mouseover(function(){
        // console.log(123)
        $(this).addClass("red").siblings().removeClass("red");
        index=$(this).index()
        //对应文字出现
        console.log(index)
        $("em").eq(index).addClass("z-jdm-tbar-tab-hover").siblings().removeClass("z-jdm-tbar-tab-hover");

        $(".redcircle").hide()//移除小圆点
    })
    $('.top').mouseout(function(){
        // console.log(123)
        $(this).removeClass("red");
        $("em").eq(index).removeClass("z-jdm-tbar-tab-hover");
        $(".redcircle").show()
    })
     //返回顶部部分
     $(".J-trigger").mouseenter(function () {
         console.log(123)
         $('.tab-foote ').addClass("movea")
     })
     $(".J-trigger").mouseleave(function () {
         console.log(123)
         $('.tab-foote ').removeClass("movea")
     })

})

//话费模块
$(function () {
    $(".jd-service .on").mouseenter(function () {
        index=$(this).index()
        // console.log(index)
        $(".jd-service").fadeOut();//首先滑出去
        $(".content .show").eq(index).show().siblings().hide()//首页滑到对应的文字出现对应的详情
        $(".title li").eq(index).addClass("active").siblings().removeClass("active")//给详情页文字添加下划线
    });
    //点击关闭首页淡入
    $(".close").click(function () {
        console.log(123)
        $(".jd-service").fadeIn()
    })
    //点击内页对应模块出现对应内容
$(".title li").mouseover(function () {
    index1=$(this).index()
    console.log(123)
    $(".content .show").eq(index1).show().siblings().hide()
    $(this).addClass('active').siblings().removeClass("active")
})

    //点击话费充值内页模块出现对应内容
    $(".tab-iframe li").click(function () {
        x=$(this).index()
        console.log(x)
        $(this).addClass('active').siblings().removeClass("active")
        $(" .huafei1").eq(x).show().siblings().hide()

    })
})


//秒杀部分右侧箭头
$(function () {
    $(".arr2").click(function () {
        $('.slider_wrapper')
    })
    
})
//秒杀部分轮播图
var arrl=document.getElementsByClassName("arr1")[0]
var arrr=document.getElementsByClassName("arr2")[0]
var imgs=document.getElementsByClassName("sk_list")[0]
// var lis=document.getElementsByClassName(".sk_list")[0]


var index=0;
var running=false;

var run=function(){
    index = index >= 2 ? 0 : index;
    index = index<0? 1 : index;

    running = true;
    var target = -765 * index;
    timer = setInterval(function () {
        var step = (target - imgs.offsetLeft)/50
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        imgs.style.left = imgs.offsetLeft + step + 'px'
        if (imgs.offsetLeft === target) {
            clearInterval(timer);
            running = false
        }
    })
}

arrr.onclick = function () {
    console.log(123)
    if (!running) {
        index++;
        run()
    };
}
arrl.onclick=function () {
    console.log(123)
    if (!running) {
        index--;
        run()
    }
}

//头部动态图
$(function () {

    var run=function () {
        $(".logo_gif span").show()
        var time=setInterval(run,1500)
    }

    $(".logoimg").mouseenter(function () {
        $(this).css("display","none")//静态图隐藏
       $(".logo_gif").show()//动态图出现
        time=setInterval(run,1500)

    })



})







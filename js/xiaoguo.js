/**
 * Created by Yuejiaqun on 2018/3/2.
 */

$(document).ready(function () {


    //轮播图
    let n=0;
    let lis=$(".img_box li");
    let box=$(".banner");
    let left=$(".banner_left");
    let right=$(".banner_right");
    let btnbox=$(".btn_box li");
    function move() {
      n++;
      if(n>=lis.length){
          n=0;
      }
      lis.eq(n).addClass("active").siblings().removeClass("active");
      btnbox.eq(n).addClass("active").siblings(btnbox).removeClass("active");
    }
    let t=setInterval(move,4000);
    box.on("mouseover",function () {
        clearInterval(t);
    }).on("mouseout",function () {
        t=setInterval(move,4000);
    })
    left.on('click',function () {
        n--;
        if (n<0){
            n=lis.length-1;
        }
        lis.eq(n).addClass("active").siblings().removeClass("active");
        btnbox.eq(n).addClass("active").siblings(btnbox).removeClass("active");
    })
    right.on("click",function () {
        move();
    })
    btnbox.on("click",function () {
        n=$(this).index()-1;
        move();
    })

    //banner测展示
    let tab=$(".tab");
    let is_active=false;
    tab.on("mouseover",function () {
        if(is_active){
            return
        }
        is_active=true;
        $(this).children('.chil').attr('class','chil tab_active');

    }).on("mouseout",function () {
        is_active=false;
        $(this).children('.chil').attr('class','chil');
    })

    //楼层选项卡
    function tabs(arr,brr) {
        arr.find(".rm").mouseover(function () {
            let index=$(this).index();
            $(this).addClass("rm_active").siblings().removeClass("rm_active");
            brr.find(".bottom_right").eq(index).show().siblings().hide();
        })
    }
    let jd=$("#jiadian");  let jdmenu=$("#jiadian .jdbt");
    let zn=$("#zhineng");  let znmenu=$("#zhineng .jdbt");
    let dp=$("#dapei");    let dpmenu=$("#dapei .jdbt");
    let pj=$("#peijian");   let pjmenu=$("#peijian .jdbt");
    let zb=$("#zhoubian");   let zbmenu=$("#zhoubian .jdbt");
    tabs(jd,jdmenu);
    tabs(zn,znmenu);
    tabs(dp,dpmenu);
    tabs(pj,pjmenu);
    tabs(zb,zbmenu);

    //购物车
   let gwt;
    $(".nk_rightRight").on("mouseenter",function () {
        gwt=setTimeout(function () {
            $(".cart").css("padding","15px 0 0").stop(true,true).slideDown("fast");
        },300)
    }).on("mouseleave",function () {
        clearTimeout(gwt);
        $(".cart").stop(true,true).slideUp("fast");
    })


    //nav

    $(".nav").on("mouseleave",function () {
        $(this).find(".navbox").stop(true,true).slideUp("fast");
    });
    $(".navtab").each(function () {
        $(this).on("mouseenter",function () {
            $(this).siblings(".navbox").stop(true,true).slideDown("fast");
            let nvaindex=$(this).index(".navtab");
            $(this).addClass("active").siblings().removeClass("active");
            $(".navmenu").eq(nvaindex).show().siblings().hide();
        })
    });

    $(".linlei").each(function () {
        $(this).on("mouseenter",function () {
            $(this).siblings(".navbox").stop(true,true).slideUp("fast");
        })
    })

    //小米明星单品
    //另一
    let starIndex = 1,
        starBox = $('.mi_start_shops'),
        zuokuang = $('.dianji .zuokuang'),
        youkuang = $('.dianji .youkuang'),
        shop1 = $('.shops_1'),
        shop2 = $('.shops_2');

    starBox.on('mouseover',function(){
        clearInterval(starTimer);
    }).on('mouseout',function(){
        starTimer = setInterval(dpmove, 5000);
    });

    zuokuang.on('click',function(){
        if(starIndex == 1){
            return
        }
        zuokuang.addClass('kuangCant');
        youkuang.removeClass('kuangCant');
        shop1.css('left',0);
        shop2.css('left','100%');
        starIndex = 1;
    }).on('mouseover',function(){
        clearInterval(starTimer);
    }).on('mouseout',function(){
        starTimer = setInterval(dpmove, 5000);
    });
    youkuang.on('click',function(){
        if(starIndex == 2){
            return
        }
        youkuang.addClass('kuangCant');
        zuokuang.removeClass('kuangCant');
        shop1.css('left', '-100%');
        shop2.css('left', '0');
        starIndex = 2;
    }).on('mouseover',function(){
        clearInterval(starTimer);
    }).on('mouseout',function(){
        starTimer = setInterval(dpmove, 5000);
    });

    function dpmove(){
        if (starIndex == 1) {
            youkuang.addClass('kuangCant');
            zuokuang.removeClass('kuangCant');
            shop1.css('left', '-100%');
            shop2.css('left', '0');
            starIndex = 2;
        } else {
            zuokuang.addClass('kuangCant');
            youkuang.removeClass('kuangCant');
            shop1.css('left', 0);
            shop2.css('left', '100%');
            starIndex = 1;
        }
    }
    let starTimer = setInterval(dpmove,5000);

    //为你推荐
    let wntjbox=$(".wntj");
    let wntj=$(".wntj_bottom");
    let yk=$("#yk");
    let tjnow=0;
    let tjnext=0;
    function wntjmove() {
        tjnext = tjnow + 1;
        if (tjnext >= wntj.length) {
            tjnext = 0;
        }
        wntj.eq(tjnext).css({left:"100%"});
        wntj.eq(tjnow).animate({left:"-100%"});
        wntj.eq(tjnext).animate({left:"0"});
        tjnow=tjnext;
    }
    $("#zk").click(function () {
        tjnext = tjnow - 1;
        if (tjnext <0 ) {
            tjnext = wntj.length-1;
        }
        wntj.eq(tjnext).css({left:"-100%"});
        wntj.eq(tjnow).animate({left:"100%"});
        wntj.eq(tjnext).animate({left:"0"});
        tjnow=tjnext;
    })
    $("#yk").click(function () {
        wntjmove();
    })


    //图书
    function nnlb(cc) {
        let box=$(cc);
        let neis=$("li",box);
        let tud=$(".tushu_bodian .dian",box);
        let width=box.width();
        let now=0;
        let next=0;
        $(".nrright",box).click(function () {
            next = now + 1;
            if (next >= neis.length) {
                return;
            }
            neis.eq(now).animate({left:-width},"fast");
            neis.eq(next).animate({left:"0"},"fast");
            tud.eq(now).removeClass("active").end().eq(next).addClass("active");
            now=next;
        })
        $(".nrleft",box).click(function () {
            next = now - 1;
            if (next <0)  {
                return;
            }
            neis.eq(now).animate({left:width},"fast");
            neis.eq(next).animate({left:"0"});
            tud.eq(now).removeClass("active").end().eq(next).addClass("active");
            now=next;
        })
        tud.each(function (index) {
            $(this).click(function () {
                if(index>now){
                    next=index;
                    neis.eq(next).css({"left":"100%"});
                    neis.eq(now).animate({left:-width},"fast");
                    neis.eq(next).animate({left:"0"},"fast");
                    tud.eq(now).removeClass("active").end().eq(next).addClass("active");
                    now=next;
                }else if(index<now){
                    next=index;
                    neis.eq(next).css({"left":"-100%"});
                    neis.eq(now).animate({left:width},"fast");
                    neis.eq(next).animate({left:"0"},"fast");
                    tud.eq(now).removeClass("active").end().eq(next).addClass("active");
                    now=next;
                }
            })
        })

    }
    nnlb("#list1");
    nnlb("#list2");
    nnlb("#list3");
    nnlb("#list4");



















})

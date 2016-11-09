/**
 * Created by my on 2016/8/20.
 */
$(document).ready(function(){

    $("#top").mouseenter(function(){
        $("#top").css("cursor","pointer")
    })
    $("#butt1").mouseenter(function(){
        $("#butt1").css("cursor","pointer")
    })


        var flag=0;
        $("#butt1").click(function(){
            if(flag==0){
                $("#butt1").html("收起")
                $("#butt1").css("background-image",
                    "url(resource/indeximages/clink2.jpg)").css("background-position","bottom")
                    .css("background-repeat","no-repeat")

                $("#top").children(0).attr("src","resource/indeximages/img1.jpg")
                $("#top").children(0).css("height","305px")
                $("#top").animate({
                    height:305
                })
                flag=1;
            }else{
                $("#butt1").html("展开")
                $("#butt1").css("background-image",
                    "url(resource/indeximages/clink1.jpg)").css("background-position","bottom")
                    .css("background-repeat","no-repeat")
                $("#top").animate({
                    height:102
                },function(){
                    $("#top").children(0).attr("src","resource/indeximages/5203239.jpg")
                    $("#top").children(0).css("height","102px")

                })
                flag=0;
            }

        })

        $(".speciallyli-2").mouseenter(function(){

            $(".speciallyli-2").css("background-image",
                "url(resource/indeximages/123.gif)")

        })
        $(".speciallyli-2").mouseleave(function(){
            $(".speciallyli-2").css("background","")
        })


        //$("#newdropdown").css({
        //    top:$("#huoqu").offset().top+$("#huoqu").height(),
        //    left:$("#huoqu").offset().left-$("#huoqu").width()
        //})
        var bool=0;
        if(bool==0){
            $("#huoqu").mouseenter(function(){
                $("#huoqu").css("background","#00647f")
                $("#newdropdown").css({
                    top:$("#huoqu").offset().top+$("#huoqu").height(),
                    left:$("#huoqu").offset().left-$("#huoqu").width(),
                    height:0
                }).show().animate({
                    height:266
                })
            })
            bool=1;
        }


        if(bool==1){
            $("#huoqu").mouseleave(function(){
                $("#huoqu").css("background","")
                $("#newdropdown").animate({
                    height:0
                },function(){
                    $("#newdropdown").hide()
                })
            })

            bool=0;
        }

        $(".ul-2").on("mouseenter","li",function(){

            if($(this).index()===3){
                $(this).css("cursor","pointer").animate({
                    width:115
                })
            }else{
                $(this).css("cursor","pointer").animate({
                    width:79
                })
            }

        })
        $(".ul-2").on("mouseleave","li",function(){
            $(this).animate({
                width:24
            })
        })


    $("#shop").mouseenter(function(){
        alert()
    })

})//ready
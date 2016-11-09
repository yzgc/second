/**
 * Created by my on 2016/8/18.
 */
 $(document).ready(function(){
     var flag=false;
     $("#li1").mouseenter(function(){
         $("#li1").css("background","white").css("background-image",
             "url(resource/images/Login/img2.jpg)").css("background-position","right")
             .css("background-repeat","no-repeat")

         $("#menu1").css({
             top:$("#li1").offset().top+$("#li1").height(),
             left:$("#li1").offset().left,
             height:0
         }).show().animate({
             height:90
         })
         flag=true;
     })

     $("#li3").mouseenter(function(){
         $("#li3").css("background","white").css("background-image",
             "url(resource/images/Login/img2.jpg)").css("background-position","right")
             .css("background-repeat","no-repeat")
         $("#menu2").css({
             top:$("#li3").offset().top+$("#li3").height(),
             left:$("#li3").offset().left,
             height:0
         }).show().animate({
             height:90
         })
         flag=true;
     })



     $("#li4").mouseenter(function(){
         $("#li4").css("background","white").css("background-image",
             "url(resource/images/Login/img2.jpg)").css("background-position","right")
             .css("background-repeat","no-repeat")

         $("#menu3").css({
             top:$("#li4").offset().top+$("#li4").height(),
             left:$("#li4").offset().left,
             height:0
         }).show().animate({
             height:90
         })
         flag=true;
     })


     if(flag=true){
         $("#li1").mouseleave(function(){
             $("#li1").css("background","")
             $("#menu1").animate({
                 height:0
             },function(){
                 $("#menu1").hide()
             });
         })

         $("#li3").mouseleave(function(){
             $("#li3").css("background","")
             $("#menu2").animate({
                 height:0
             },function(){
                 $("#menu2").hide()
             });
         })


         $("#li4").mouseleave(function(){
             $("#li4").css("background","")

             $("#menu3").animate({
                 height:0
             },function(){
                 $("#menu3").hide()
             });
         })

     }






 })//ready



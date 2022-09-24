$( document ).ready(function() {
    $(".ayam").css("background-color","orange");
    $(".ayam").click(function(){
        $(".ayam").css({
            background : "url(img/anakAyam.jpg)"
        });
        $("<audio></audio>").attr({
            'src' : "Audio/anakayam.mp3",
            'volume' : 0.4 ,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".angsa").css("background-color","red");
    $(".angsa").click(function(){
        $(".angsa").css({
            background : "url(img/angsa.jpg) no-repeat center"
        });
        $("<audio></audio>").attr({
            'src' : "Audio/angsa.mp3",
            'volume' : 0.5 ,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".kalkun").css("background-color","green");
    $(".kalkun").click(function(){
        alert("Audionya agak lama jadi harus di refresh lagi jika tidak berhenti");
        $(".kalkun").css({
            background : "url(img/kalkun.jpg) no-repeat center"
        });
        $("<audio></audio>").attr({
            'src' : "Audio/kalkun.mp3",
            'volume' : 0.4 ,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".merak").css("background-color","Aqua");
    $(".merak").click(function(){
        alert("Mohon tunggu dan dengarkan baik - baik, karena belum sempat di edit audio nya");
        $(".merak").css({
            background : "url(img/Merak.jpg) no-repeat center"
        });
        $("<audio></audio>").attr({
            'src' : "Audio/merak.mp3",
            'volume' : 0.4 ,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".sapi").css("background-color","Crimson");
    $(".sapi").click(function(){
        $(".sapi").css({
            background : "url(img/sapi.jpg) no-repeat center"
        });
        $("<audio></audio>").attr({
            'src' : "Audio/sapi.mp3",
            'volume' : 0.4 ,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".kambing").css("background-color","DarkBlue");
    $(".kambing").click(function(){
        $(".kambing").css({
            background : "url(img/kambing.jpg) no-repeat center"
        });
        $("<audio></audio>").attr({
            'src' : "Audio/kambing.mp3",
            'volume' : 0.4 ,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".itik").css("background-color","DarkCyan");
    $(".itik").click(function(){
        $(".itik").css({
            background : "url(img/itik.jpg) no-repeat center"
        });
        $("<audio></audio>").attr({
            'src' : "Audio/bebek.mp3",
            'volume' : 0.4 ,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".kerbau").css("background-color","DarkGoldenRod");
    $(".kerbau").click(function(){
        alert("Mohon tunggu dan dengarkan baik - baik, karena belum sempat di edit audio nya");
        $(".kerbau").css({
            background : "url(img/kerbau.jpg) no-repeat center"
        });
        $("<audio></audio>").attr({
            'src' : "Audio/kerbau.mp3",
            'volume' : 0.4 ,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".harimau").css("background-color","DarkOrchid");
    $(".harimau").click(function(){
        $(".harimau").css({
            background : "url(img/Harimau.jpg) no-repeat center"
        });
        $("<audio></audio>").attr({
            'src' : "Audio/macan.mp3",
            'volume' : 0.4 ,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".srigala").css("background-color","DarkSlateBlue");
    $(".srigala").click(function(){
        $(".srigala").css({
            background : "url(img/Srigala.jpg) no-repeat center"
        });
        $("<audio></audio>").attr({
            'src' : "Audio/srigala.mp3",
            'volume' : 0.4 ,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".singa").css("background-color","DimGrey");
    $(".singa").click(function(){
        $(".singa").css({
            background : "url(img/Singa.jpg) no-repeat center"
        });
        $("<audio></audio>").attr({
            'src' : "Audio/singa.mp3",
            'volume' : 0.4 ,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    $(".cheetah").css("background-color","FireBrick");
    $(".cheetah").click(function(){
        $(".cheetah").css({
            background : "url(img/Cheetah.jpg) no-repeat center"
        });
        $("<audio></audio>").attr({
            'src' : "Audio/Cheetah.mp3",
            'volume' : 0.4 ,
            'autoplay' : "autoplay"
        }).appendTo("body");
    });
    
});
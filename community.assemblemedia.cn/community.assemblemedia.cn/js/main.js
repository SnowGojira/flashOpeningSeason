/**
 * Created by hakuh on 8/31/2018.
 */

"use strict";

var swiper = '';
var currentProblem = 0; //记录当前是第几个场景;

/*preload Images
* */
var imgNum = 0;
var images = [];


$(function(){
    /* preloadImg is an IIFE */
    (function preloadImg() {
        imgLoader();
        $.imgpreload(images, {
            each: progress,
            all: handlerComplete
        });
    })();


});

/********************preloadImg Reference Func ********************/
function imgLoader() {
    let imgs;
    imgs = document.images;
    for(let i = 0; i < imgs.length; i++) {
        images.push(imgs[i].src);
    }
}
function progress() {
    /*this will be called after each image loaded*/
    let status = $(this).data('loaded') ? 'success' : 'error';
    if(status === "success") {
        let v = (parseFloat(++imgNum) / images.length).toFixed(2);
        $("#percentShow").html(Math.round(v * 100) + "<sup>%</sup>");
    }
}
function handlerComplete() {
    /*this will be called after all images loaded*/
    $("#percentShow ").html("100<sup>%</sup>");

    $(".top-container").hide();
    $(".gender-container").show();
    // bcaudio();
    // $("#bgbtn").show();*/
}

function bgmPlay() { //背景音乐
    let myaudio = document.getElementById("bc");
    myaudio.play();
    document.addEventListener("WeixinJSBridgeReady", function bgmPlay(){
        myaudio.play();
    }, false);
}

//*为什么这有一步莫名其貌的再次播放？*/
// $(function() {
//     //preloadImg();
//     var m =document.getElementById("bc");
//     bc.play();
// });




/*PageOne
* todo 1. display logic  2. animation logic*/
var animImgsBoy = 0;
var animImgsGirl = 0;
var boyMove = 1;
var girlMove = 0;
var startAnimation = false;

$(function() {
     /*First Page Animation*/

    $(".girlclass").click(function() { //女
        girlMove = 1;
        boyMove = 0;
        $(".sex_people").hide();
        $(".sex_woman").show();
        var inputs = document.getElementById("username"); //通过id获取文本框对象
        let sexs = $(this).html();
        let userinfo = {
            uName: inputs.value,
            //			sex: sexs,
            sexid: 1
        }
        if(infomessage.length != 0) {

            infomessage.shift();
        }

        infomessage.push(userinfo);
        console.log(infomessage);
        if(unames.length != 0) {
            $(".start_game").show();
            $(".start_logo").hide();

            console.log(infomessage)
        } else {
            $(".start_game").hide();
            $(".start_logo").show();
        }

    });
    $(".boyclass").click(function() { //男
        $(".sex_people").show();
        $(".sex_woman").hide();
        girlMove = 0;
        boyMove = 1;
        var inputs = document.getElementById("username"); //通过id获取文本框对象
        let sexs = $(this).html();
        let userinfo = {
            uName: inputs.value,
            sex: sexs,
            sexid: 0
        }
        if(infomessage.length != 0) {

            infomessage.shift();
        }
        infomessage.push(userinfo);
        /*
         if(unames.length == 1) {
         $(".start_game").show();
         } else {
         $(".start_game").hide();
         }
         */
    });

    var animImages = setInterval(function() {

        if (startAnimation === false) return;
        if(boyMove) {
            animImgsBoy++;
            if(animImgsBoy >= 8) {
                animImgsBoy = 1;
            }
            $(".animImgsBoy").hide();
            $(".animImgsBoy" + animImgsBoy).show();
        }

        if(girlMove) {
            animImgsGirl++;
            if(animImgsGirl >= 8) {
                animImgsGirl = 1;
            }
            $(".animImgsgirl").hide();
            $(".animImgsgirl" + animImgsGirl).show();
        }
    }, 100);
});




$(".rankingss").hide();




Array.prototype.indexOf = Array.prototype.indexOf ||
    function(what, index) {
        index = index || 0;
        var L = this.length;
        while(index < L) {
            if(this[index] === what) return index;
            ++index;
        }
        return -1;
    };


let infomessage = []; //性别
let unames = []; //姓名
console.log(infomessage);


//看一下在哪一步可以显示


infomessage = [{
    uName: "",
    sex: 0,
    sexid: 0}];

$('input').keyup(function() {




    var inputs = document.getElementById("username"); //通过id获取文本框对象
    let unameinfo = inputs.value;
    if(unames.length != 0) {
        unames.shift();
    }
    startAnimation = true;
    unames.push(unameinfo);

    if(infomessage.length == 1 && unames[0] !== "") {
        infomessage[0].uName = unames[0];
        $(".start_game").show();
        $(".start_logo").hide();
        console.log(unames);
    } else {
        $(".start_game").hide();
        $(".start_logo").show();
    }
});
$(".start_game").click(function(e) {
    //wechat
    // getWXConfig();

    //游戏开始
    var btnmps = document.getElementById("btnmp");
    btnmps.play();
//		bcaudio();
    $(".sex").hide();
    $(".content").show();
    console.log(infomessage, "你在印度玩泥巴");
    console.log(unames, "你在印度玩泥巴！");
    var inputs = document.getElementById("username"); //通过id获取文本框对象
    unames[0] = inputs.value;
    infomessage[0].uName = inputs.value;
});


var correctAnswer = [];
$(".tag_piece1").hide();
$(".tag_piece2").hide();
$(".tag_piece3").hide();
$(".veseion").hide();
var chioceClick = 0;

/*slide的动画*/
$(function(){
    var slide = 1;
    var slideAnim = setInterval(function () {
        slide++;
        if (slide > 3) {
            slide = 1;
        }
        $(".slideAnim").hide();
        $(".slide" + slide).show();
    }, 200);

    /*x向下滑动的时候，下方的gif消失掉*/
    var touchstartY = "";
    window.ontouchstart = function(event) {

        touchstartY = event.changedTouches[0].screenY;//得到手指按下点的Y轴值
    };

    var touchmoveY = "";
    window.ontouchmove = function(event) {
        touchmoveY = event.changedTouches[0].screenY;//不断监听下拉过程中手指的位置
        $('#slide_down').hide();

    };
});





/*得到分数事件*/
var score = 0;

function getScore() {
    for(var i = 0; i < correctAnswer.length; i++) {
        score += parseInt(correctAnswer[i]);
    }
    console.log(score, "我是总分")
    return score;

}

function getBook() { //领取证书
    $(".answer_over").hide();
    $(".allPic").hide();
    $(".waiM").hide(); //关闭综艺场景图
    $(".tvups").hide(); //动漫场景图
    $(".comicup").hide();
    $(".lifeup").hide();
    //		综艺up主
    $("#tipUpanims").hide();
    //嗨剧upzhu
    $("#tipUptv").hide();
    //动漫
    $("#tipUpcomic").hide();
    //生活
    $("#tipUplife").hide();
    //		男女主角
    $("#tipUpanimsman").hide();
    $("#tipUpanimswo").hide();
    //排行图
    preloadImgs()//加载图片资源
    $("#post").show();
    $("#backView").show();

    //海报页gif
    $("#imgGif").show();
    setTimeout(function(){
        $("#imgGif").hide();
    },5000);

    //		音效
    var btnmps = document.getElementById("btnmp");
    btnmps.play();
    //		得分
    getScore();
    ranking();
    $(".sace").show();

    $("#bgbtn").hide(); //部署时去掉
    //		var bc
    //		$("#bc").pause();
    var backMusic = document.getElementById("bc");
    backMusic.play();
    $("#paperButton").show();
    downFile(); //下载图
    preloadImgs();
    //		downloadFile();

}

function startAnswer(e) {
    let sTips;
    let imgsex;
    //		e=1 综艺   startTipOne  tipUpanim
    //		2 嗨剧   startTip1	 	tipUpanim1
    //		3 动漫   startTip2		tipUpanim2
    //		4 生活   startTip3		tipUpanim3
    //console.log(e,"当前")
    var startTipTmp = (e == 1 ? startTipOne : (e == 2 ? startTipTwo : (e == 3 ? startTipThree : (e == 4 ? startTipFour : startTipOne))));
    var startTipAsk = (e == 1 ? startTipOne : (e == 2 ? startTip1 : (e == 3 ? startTip2 : (e == 4 ? startTip3 : startTipOne))));
    if(boyMove == 1) { //boy in
        //			imgsex = startTipAsk.imgUrl;
        $("#tipUpanimsman").show();
    } else {
        //			imgsex = startTipAsk.imgUrls;
        $("#tipUpanimswo").show();
    }
    if(e == 1) {
        $("#tipUpanims").show();
    } else if(e == 2) {
        $("#tipUptv").show();
    } else if(e == 3) {
        $("#tipUpcomic").show();
    } else if(e == 4) {
        $("#tipUplife").show();
    }
    console.log(startTipTmp, "信息")
    console.log(startTipAsk, "当前得信心")
    var Startanswers = document.getElementById("startTips");
    var answers = "";
    answers += "<div class='answer_tipss' style='background:url(" + startTipAsk.imgbacks + "); position: absolute;width: 100%;height: 100%;background-attachment: fixed;background-position: center;background-size: 100% 100%; '>"
    answers += "<img src=" + startTipAsk.imgcloud + " style=''class='beginBox'>"
    answers += "<div class='smell_tip'>"
    answers += "<div class='answer_tips'>"
    answers += "<div class='tips_title'><p>" + startTipAsk.titles + "</p></div>"
    answers += "<div class='btns'>"
    answers += "<div class='waitse' onclick='waitse()'>" + startTipAsk.waits + "</div>"
    answers += "<div class='beginAnswer' onclick='beginAnswer(" + e + ")'>" + startTipAsk.comeOn + "</div>"
    answers += "</div>"
    answers += "</div>"
    answers += "</div>"
    answers += "</div>"
    Startanswers.innerHTML = answers;
    setTimeout(function() {
        $(".beginBox").show();
        $(".smell_tip").show();

    }, 500)

}

function ranking() {
    console.log(score, "怎么回事呢")
    var nickname = unames[0];
    console.log(infomessage[0], "renrenren");
    var sex = (boyMove == 1 ? 'male' : 'female');
    var gameover = document.getElementById("ranking");
    var gamebutton = document.getElementById("paperButton");
    var defaults_tmp = 0;
    var currentProblemDes = '';
    var gen = '';
    if(currentProblem == 1) {
        defaults_tmp = defaultsOne;
        currentProblemDes = "fan";
    } else if(currentProblem == 2) {
        defaults_tmp = defaultsTwo;
        currentProblemDes = "tv";
    } else if(currentProblem == 3) {
        defaults_tmp = defaultsThree;
        currentProblemDes = "anim";
    } else {
        defaults_tmp = defaultsFour;
        currentProblemDes = "so";
    }

    var oldBanner = ""; //80海报页面
    let oldButton = ""; //海报按钮
    oldBanner += "<div class='overImgs'>"
    oldBanner += "<image class = 'lastpageimg' src='./img/lastpage/" + currentProblemDes + "_" + sex + "_80.png'/>"
    oldBanner += "<div class='ranking_over'>" + defaults_tmp.worst + nickname + "</div></div> "

    oldButton +="<div class='font-lastpage'>长按保存图片分享，让小伙伴评评理</div>"
    oldButton += "<img  onclick='eventPage()' style='left: 5vw;height: 9vw;' src='img/button_link.png'  />"
    oldButton += "<img  onclick='reloads()' style='margin-left: 4.5vw;height: 9vw;' src='img/button_replay.png'  />"

    var midBanner = ""; //90页面
    midBanner += "<div class='overImgs'>"
    midBanner += "<image class = 'lastpageimg' src='./img/lastpage/" + currentProblemDes + "_" + sex + "_90.png'/>"
    midBanner += "<div class='ranking_over'>" + defaults_tmp.good + nickname + "</div></div>"
    //		midBanner = "";

    //				midBanner += "<img  style='position: absolute;bottom: 11vw;left: 5vw;height: 9vw;' src='./img/lastpage/button_link.png'  />"
    //				midBanner += "<img  style='position: absolute;bottom: 11vw;right: 4.5vw;height: 9vw;' src='./img/lastpage/button_replay.png'  />"

    var youngBanner = ""; //00页面
    youngBanner += "<div class='overImgs'>"
    youngBanner += "<image class = 'lastpageimg' src='./img/lastpage/" + currentProblemDes + "_" + sex + "_00.png'/>"
    youngBanner += "<div class='ranking_over'>" + defaults_tmp.perfect + nickname + "</div></div>"
    //		youngBanner += ""
    //		let oldButton = "";
    //				youngBanner += "<img  style='position: absolute;bottom: 11vw;left: 5vw;height: 9vw;' src='./img/lastpage/button_link.png'  /> "
    //				youngBanner += "<img  style='position: absolute;bottom: 11vw;right: 4.5vw;height: 9vw;' src='./img/lastpage/button_replay.png'  />"
    gamebutton.innerHTML = oldButton; //按钮
    if(score <= 5) {
        $(".one_answer").hide();
        $("#ranking").show();
        console.log("没毛病");

        //			<div class='ranking_over' >总分：" + score + "</div>
        gameover.innerHTML = oldBanner;
        preloadImgs();
        console.log(oldBanner);
        //		console.log(defaults.worst)
    } else if(score <= 11) {
        $(".one_answer").hide();
        $("#ranking").show();
        gameover.innerHTML = midBanner;
        preloadImgs();
        console.log("没毛病1");
        console.log(midBanner);
        //		console.log(defaults.worst)
    } else {
        $(".one_answer").hide();
        $("#ranking").show();
        gameover.innerHTML = youngBanner;
        preloadImgs();
        console.log("没毛病2");
        console.log(youngBanner);

    }
}


    $(".sex").hide();
$(".top").show();
$(".content").hide();
//		社团入驻
$(".one_path").hide();
$(".two_path").hide();
$(".three_path").hide();
$(".four_path").hide();
$(".five_path").hide();
$(".one_answer").hide();
//	question_a
$("#question_a").hide();
$("#question_b").hide(); //第二道题


function beginAnswer(id) {
    //微信第二步
    shareAjax();

    //进入答题
    var btnmps = document.getElementById("btnmp");
    currentProblem = id;
    btnmps.play();
    var init = "";
    //第一题开始初始化
    if(id == 1) {
        init = init1;
        $(".allPic").show(); //场景图父级
        $(".waiM").show(); //综艺场景图
    } else if(id == 2) {
        init = init2;
        $(".allPic").show(); //场景图父级
        $(".tvups").show(); //动漫场景图
    } else if(id == 3) {
        init = init3;
        $(".allPic").show(); //场景图父级
        $(".comicup").show(); //场景图
    } else {
        init = init4;
        $(".allPic").show(); //场景图父级
        $(".lifeup").show(); //场景图
    }
    var alldata = init.questions
    var superContainer = $(this);
    var correctAnswers = [];
    var answer = "";
    var firstBox = document.getElementById("swiper-wrapper");
    var worningTips = document.getElementById("worning-answer");
    //	let worningTitle = ""
    for(var i in init.questions) {
        answer += " <div class='swiper-slide'>"
        answer += "	<div class='question-wrap'>"

        answer += "<div class='question-no'><div><div class='question-no-num '>" + init.questions[i].title + "</div><div class='question-no-type5 animate5'></div></div></div>  ";
        answer += "<div class='question'><div class='question-title_parent'>";
        answer +="<img src='img/answerbox/chuti.png' class='questiontitles_box' style='display: none;' />";
        answer +="<div class='question-title '><p>" + init.questions[i].question + "</p></div>";
        answer += "<div class='question-select bounceInUp2' style='position:relative;display:none;top:-38%;'><ul style='position: absolute;top: 45vh;'>";
        for(var m in init.questions[i].answers) {
            answer += "<li id='choices" + m + "' class='bounceInUp" + m + "' onclick='choicese(" + init.questions[i].correctAnswer + "," + m + "," + i + ")' style='padding:0.1rem 0.1rem'>" + init.questions[i].answers[m] + "</li>"
        }
        answer += "</ul><img src='img/answerbox/datianniu.png' class='huida_box' style='display: none;' /></div>";

        for(var p in init.questions[i].worning) {
            answer += "<div class='woringsTitle' style='position:relative;top:4vh;display:none'>";
            answer += "<div class='falseTips' style='position: absolute;top:4vh;'>" + init.questions[i].worning[p].falseTips + "</div>";
            answer += "<img src='img/answerbox/dati.png' class='answertitles_box' style='display: none;' />";
            answer += "<div class='next' style='position:absolute;top:69vh;'></div>";
            answer += "</div>";
            //继续聊
            console.log(init.questions[i].worning[p].falseTips);
        }
        answer += "</div></div></div></div>";
        correctAnswers.push(init.questions[i].correctAnswer);
    }
    //			answer += "<div>" + init.questions[i].worning[p].reply + "</div>"
    console.log(correctAnswers);
    $(".swiper-wrapper").html(answer);
    preloadImgs();
    if(swiper && swiper != "" && swiper.destory()) {

    }
    swiper = new Swiper('.swiper-container');
    $(".next").click(function() {

        //继续聊
        //			debugger;
        swiper.onResize();
        $(".question-no-num").hide();
        var btnmps = document.getElementById("btnmp");
        btnmps.play();
        //			chioceClick =0;
        swiper.slideTo(swiper.activeIndex + 1);
        $(".answertitles_box").hide();
        setTimeout(function() { //预先显示问题
            $(".questiontitles_box").show();
            $(".question-title").show();
            $(".question-no-num").show();
        }, 300);
        setTimeout(function() { //问题加载完成后再出现选项
            $(".huida_box").show();
            $(".bounceInUp2").show();
            $(".question-select").show();

            //				chioceClick.shift();
            //				chioceClick.push(0);
        }, 500);

        if(infomessage[0].sexid == 0) {
            $("#tipUpanimsman").show();
        } else {
            $("#tipUpanimswo").show();
        }
        console.log(swiper.activeIndex, "我是页面数量3");

        $(".woringsTitle").hide();
        //			$(".swiper-slide").css("display", "none");
        //			$(".swiper-slide-active").css("display", "block");
    })

    //第一题结束
    //		console.log(infomessage, "111infomessage");
    $("#startTips").hide();
    $(".one_answer").show();

    $(".questiontitles_box").show();

    setTimeout(function() {

        $(".huida_box").show();
        $(".bounceInUp2").show();
    }, 500);
    if(infomessage[0].sexid == '0') {
        $(".allPic").show();
        //			$(".waiW").hide();
        //			$(".waiM").show();
    } else {
        //			$(".allPic").show();
        //			$(".waiW").show();
    }
};

function waitse() {
    preloadImgs();
    var btnmps = document.getElementById("btnmp");
    btnmps.play();
    //		综艺up主
    $("#tipUpanims").hide();
    //嗨剧upzhu
    $("#tipUptv").hide();
    //动漫
    $("#tipUpcomic").hide();
    //生活
    $("#tipUplife").hide();

    //		男女主角
    $("#tipUpanimsman").hide();
    $("#tipUpanimswo").hide();

    //		内容
    $("#startTips").hide();
    $(".content").show();

};

function reloads() { //重载页面
    /*window.location.reload();
    console.log("reload is on click");*/

    var vipurl = 'https://film.qq.com/vip/act/cy/HcZNeYnt.html?ptag=hiopera.1809';

    window.location.href = vipurl;

};

function eventPage() {//跳转专题页
    var url = 'http://v.qq.com/cy/ifeTFkgE.html';

    window.location.href = url;
}



/**
 *微信调用模块*/
function WeChat() {
    console.log('点击weChat');
    $.ajax(
        {type:'get',
            url:'ajax_getconfig.php',
            success:function(data){
                console.log("ajax success:"+data);
                console.log("ajax success:"+JSON.parse(data).appId);
                console.log("ajax success:"+JSON.parse(data).timestamp);
                console.log("ajax success:"+JSON.parse(data).nonceStr);
                console.log("ajax success:"+JSON.parse(data).signature);

                wx.config({
                    debug: false,
                    appId:JSON.parse(data).appId,
                    timestamp: JSON.parse(data).timestamp,
                    nonceStr: JSON.parse(data).nonceStr,
                    signature: JSON.parse(data).signature,
                    jsApiList: [
                        // 所有要调用的 API 都要加到这个列表中
                        'checkJsApi',
                        'onMenuShareTimeline',//
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo'

                    ]
                });

            }
        });

}

function getWXConfig(){
    console.log("点击getWXConfig");
    $.getJSON("https://www.infish.cn/wmsApi/assemble/getSignature?url=" + encodeURIComponent(window.location.href) + "&callback=?",function(data){
        wx.config({
            debug: false,
            appId: data.appId,
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            signature: data.signature,
            jsApiList: ["onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","startRecord","stopRecord","onVoiceRecordEnd","playVoice","pauseVoice","stopVoice","translateVoice","uploadVoice"]
        });
    });
}

function shareAjax(){
    /**
     * url需要更改为正式服务器的地址
     */


    console.log("点击分享Ajax了");



}

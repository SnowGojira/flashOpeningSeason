$(function() { //红旗
	var animImg = 0;
	var animImages = setInterval(function() {
		animImg++;
		if(animImg >= 8) {
			animImg = 1;
		}
		$(".animImg").hide();
		$(".animImg" + animImg).show();
	}, 100);
});
$(function() { //综艺
	var animImgs = 0;
	var animImages = setInterval(function() {
		animImgs++;
		if(animImgs >= 6) {
			animImgs = 1;
		}
		$(".animImgs").hide();
		$(".animImgs" + animImgs).show();
	}, 100);
});
$(function() { //嗨剧
	var animImgsa = 0;
	var animImages = setInterval(function() {
		animImgsa++;
		if(animImgsa >= 8) {
			animImgsa = 1;
		}
		$(".animImgsa").hide();
		$(".animImgsa" + animImgsa).show();
	}, 100);
});
$(function() { //动漫
	var animImgsaq = 0;
	var animImages = setInterval(function() {
		animImgsaq++;
		if(animImgsaq >= 8) {
			animImgsaq = 1;
		}
		$(".animImgsaq").hide();
		$(".animImgsaq" + animImgsaq).show();
	}, 100);
});
$(function() { //s生活
	var animImglife = 1;
	var animImages = setInterval(function() {
		animImglife++;
		if(animImglife >= 6) {
			animImglife = 1;
		}
		$(".animImglife").hide();
		$(".animImglife" + animImglife).show();
	}, 100);
});

$(function() { //加载
	var animImgload = 1;
	var animImages = setInterval(function() {
		animImgload++;
		if(animImgload >= 4) {
			animImgload = 1;
		}
		$(".animImgload").hide();
		$(".animImgload" + animImgload).show();
	}, 100);
});
$(function() { //综艺 up主 动画
	var tipUpanim = 1;
	var tipUpanimes = setInterval(function() {
		tipUpanim++;
		if(tipUpanim >= 3) {
			tipUpanim = 1;
		}
		$(".tipUpanim").hide();
		$(".tipUpanim" + tipUpanim).show();
	}, 1000);
});
$(function() { //嗨剧 up主 动画
	var tipUptvs = 1;
	var tipUptvse = setInterval(function() {
		tipUptvs++;
		if(tipUptvs >= 3) {
			tipUptvs = 1;
		}
		$(".tipUptvs").hide();
		$(".tipUptvs" + tipUptvs).show();
	}, 1000);
});
$(function() { //动漫 up主 动画
	var tipUpcomics = 1;
	var tipUpcomice = setInterval(function() {
		tipUpcomics++;
		if(tipUpcomics >= 3) {
			tipUpcomics = 1;
		}
		$(".tipUpcomics").hide();
		$(".tipUpcomics" + tipUpcomics).show();
	}, 1000);
});
$(function() { //生活 up主 动画
	var tipUplifes = 1;
	var tipUplifee = setInterval(function() {
		tipUplifes++;
		if(tipUplifes >= 3) {
			tipUplifes = 1;
		}
		$(".tipUplifes").hide();
		$(".tipUplifes" + tipUplifes).show();
	}, 1000);
});
$(function() { //男主角动画
	var tipUpanimsmans = 1;
	var tipUpanimsmanse = setInterval(function() {
		tipUpanimsmans++;
		if(tipUpanimsmans >= 3) {
			tipUpanimsmans = 1;
		}
		$(".tipUpanimsmans").hide();
		$(".tipUpanimsmans" + tipUpanimsmans).show();
	}, 1000);
});
$(function() { //男主角动画
	var tipUpanimswos = 1;
	var tipUpanimswose = setInterval(function() {
		tipUpanimswos++;
		if(tipUpanimswos >= 3) {
			tipUpanimswos = 1;
		}
		$(".tipUpanimswos").hide();
		$(".tipUpanimswos" + tipUpanimswos).show();
	}, 1000);
});
	var bcs = document.getElementById("bc");
	var varietys = document.getElementById("variety");
	var movies = document.getElementById("movie");
	var comics = document.getElementById("comic");
	var lifes = document.getElementById("life");

	//触摸隐藏事件
	$('#slides').on('touchmove', function(e) { //滑动屏幕
		$(".dialog_fan").hide();
		$(".dialog_tv").hide();
		$(".dialog_anim").hide();
		$(".dialog_life").hide();
		varietys.pause();
		movies.pause();
		comics.pause();
		lifes.pause();
	});
	//// 	首页点击显示弹窗
	//$(".content_one").click(function(){ //综艺
	//	$(".dialog_fan").show();
	//	
	//})
	//$(".content_two").click(function(){ //嗨剧
	//	$(".dialog_tv").show();
	//	
	//})
	//$(".content_three").click(function(){ //动漫
	//	$(".dialog_anim").show();
	//	
	//})
	//$(".content_four").click(function(){ //嗨剧
	//	$(".dialog_life").show();
	//	
	//})

	$(".content_one").on('touchmove', function(e) { //滑动 综艺
		$(".dialog_fan").hide();
		$(".dialog_tv").hide();
		$(".dialog_anim").hide();
		$(".dialog_life").hide();
		varietys.pause();
		lifes.pause();
		comics.pause();
		movies.pause();
	})
	$(".content_two").on('touchmove', function(e) { //滑动 电影
		$(".dialog_fan").hide();
		$(".dialog_tv").hide();
		$(".dialog_anim").hide();
		$(".dialog_life").hide();
		varietys.pause();
		lifes.pause();
		comics.pause();
		movies.pause();
	})
	$(".content_three").on('touchmove', function(e) {
		$(".dialog_fan").hide();
		$(".dialog_tv").hide();
		$(".dialog_anim").hide();
		$(".dialog_life").hide();
		varietys.pause();
		lifes.pause();
		comics.pause();
		movies.pause();
		lifes.pause();
	})
	$(".content_four").on('touchmove', function(e) {
		$(".dialog_fan").hide();
		$(".dialog_tv").hide();
		$(".dialog_anim").hide();
		$(".dialog_life").hide();
		varietys.pause();
		lifes.pause();
		comics.pause();
		movies.pause();
	})

	//点击事件

	$(".content_one").click(function() { //综艺
		$(".dialog_fan").toggle();
		$(".dialog_tv").hide();
		$(".dialog_anim").hide();
		$(".dialog_life").hide();
		lifes.pause();
		movies.pause();
		comics.pause();
		if(varietys.paused == true) {
			varietys.play();
			//				bcs.play();
		} else {
			varietys.pause();
			//				bcs.pause();
		}

	});

	$(".content_two").click(function() { //电影 嗨剧
		$(".dialog_tv").toggle();
		$(".dialog_fan").hide();
		$(".dialog_anim").hide();
		$(".dialog_life").hide();
		varietys.pause();
		comics.pause();
		lifes.pause();
		if(movies.paused == true) {
			movies.play();
			//				bcs.play();
		} else {
			movies.pause();
			//				bcs.pause();
		}

	});

	$(".content_three").click(function() { //动漫
		$(".dialog_anim").toggle();
		$(".dialog_fan").hide();
		$(".dialog_tv").hide();
		$(".dialog_life").hide();
		varietys.pause();
		movies.pause();
		lifes.pause();
		if(comics.paused == true) {
			comics.play();
			//				bcs.play();
		} else {
			comics.pause();
			//				bcs.pause();
		}

	});

	$(".content_four").click(function() {
		$(".dialog_life").toggle();

		$(".dialog_fan").hide();
		$(".dialog_tv").hide();
		$(".dialog_anim").hide();
		varietys.pause();
		movies.pause();
		comics.pause();
		if(lifes.paused == true) {
			lifes.play();
			//				bcs.play();
		} else {
			lifes.pause();
			//				bcs.pause();
		}
	});

	//
	//				$(".dialog_fan").hide();
	//		$(".dialog_tv").hide();
	//		$(".dialog_anim").hide();
	//		$(".dialog_life").hide();
	//		
	$("#bgbtn").click(function(){
		console.log("click");
		if(bcs.paused==true){
			$("#bgbtn").attr("src","img/on.png")//部署时去掉
			bcs.play();
		}else{
			$("#bgbtn").attr("src","img/off.png");//部署时去掉
			bcs.pause();
		}
	});
		
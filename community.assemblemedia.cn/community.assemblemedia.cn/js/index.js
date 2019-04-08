

//		e=1 综艺   startTipOne  tipUpanim
//		2 嗨剧   startTip1	 	tipUpanim1
//		3 动漫   startTip2		tipUpanim2
//		4 生活   startTip3		tipUpanim3	
	function login(sid) {
		console.log(sid);
			var btnmps =document.getElementById("btnmp");
			btnmps.play();
		listId = sid;
		if(sid == 1) { //社团一（综艺）
			startAnswer(sid);
			$(".content").hide();
			$("#startTips").show();
			$(".one_answer").hide();

		} else if(sid == 2) { //社团二（嗨剧社）
			startAnswer(sid);
			$(".content").hide();
			$("#startTips").show();
			$(".one_answer").hide();
		} else if(sid == 3) { //社团三（中二）
			startAnswer(sid);
			$(".content").hide();
			$("#startTips").show();
			$(".one_answer").hide();
		} else if(sid == 4) { //社团四（生活）
			startAnswer(sid);
			$(".content").hide();
			$("#startTips").show();
			$(".one_answer").hide();
		}
		return sid
	}
function choicese(correctNum, key, all) {
		//			correctNum  正确答案
		//			key  当前选项id
		//  		all  问题id
	    swiper.onResize();
		if((chioceClick == 0 && swiper.activeIndex == 0)) {
			chioceClick = 1;
			let that = this;
			console.log(correctNum, key);
			console.log(swiper.activeIndex, "我是页面数量1");
			var correct = "bounceInUp" + key;
			var choic = "choices" + key;
			if(correctNum == key) { //选择正确
				$("." + correct + "").addClass('right');
				$("#" + choic + "").unbind("click");

				setTimeout(function() {
					if(swiper.activeIndex == 1) {
						$(".tag_piece1").show();
					} else if(swiper.activeIndex == 2) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
					} else if(swiper.activeIndex == 3) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
						$(".tag_piece3").show();

					} else if(swiper.activeIndex == 4) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
						$(".tag_piece3").show();
						$(".veseion1").hide();
						$(".veseion").show();
					}
					if(swiper.activeIndex == 0 || swiper.activeIndex == 1 || swiper.activeIndex == 2 || swiper.activeIndex == 3) {
						console.log(chioceClick, "正确，第一次点击")
						$("." + correct + "").removeClass('right');
						swiper.slideTo(swiper.activeIndex + 1);
						$(".questiontitles_box").hide();
						$(".question-title").hide();
												$(".question-no-num").hide();
						$(".huida_box").hide();
						$(".bounceInUp2").hide();
						$(".question-select").hide();
						setTimeout(function() { //预先显示问题
							$(".questiontitles_box").show();
							$(".question-title").show();
														$(".question-no-num").show();
						}, 600);
						setTimeout(function() { //问题加载完成后再出现选项
							$(".huida_box").show();
							$(".bounceInUp2").show();
							$(".question-select").show();
						}, 1200)
					}
					if(swiper.activeIndex == 4) {
						console.log(chioceClick, "正确，第一次点击")
						$(".over").show();
						$(".questiontitles_box").show();
						$(".question-title").show();
												$(".question-no-num").show();
						$(".huida_box").show();

						$(".bounceInUp2").show();
						$(".question-select").show();
					}
					console.log(swiper.activeIndex, "我是页面数量2");
				}, 1500)

				correctAnswer.push(3);
				console.log(correctAnswer)
			} else { //选择 错误
				$("#" + choic + "").unbind("click");
				//			问题和选项
				if(swiper.activeIndex == 1) { //箭头
					$(".tag_piece1").show();
				} else if(swiper.activeIndex == 2) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
				} else if(swiper.activeIndex == 3) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
					$(".tag_piece3").show();
				} else if(swiper.activeIndex == 4) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
					$(".tag_piece3").show();
					$(".veseion1").hide();
					$(".veseion").show();
				}
				//			答案
				setTimeout(function() { //隐藏男女主脚
					if(infomessage[0].sexid == 0) {
						$("#tipUpanimsman").hide();
					} else {
						$("#tipUpanimswo").hide();
					}
				}, 300);
				setTimeout(function() {
					//显示错误提示框 两个定时器  实现动效
					$(".answertitles_box").show();
					$(".woringsTitle").show();
				}, 800);
				var mission = document.getElementById("miss");
				miss.play();
				var corrects = "bounceInUp" + correctNum;
				$("." + corrects + "").addClass('right');
				$("." + correct + "").addClass('wrong');
				setTimeout(function() {
					$(".question-select").hide();
					$(".question-title").hide();
					$(".questiontitles_box").hide();
					$(".bounceInUp2").hide();
					$(".huida_box").hide();
					if(swiper.activeIndex == 0 || swiper.activeIndex == 1 || swiper.activeIndex == 2 || swiper.activeIndex == 3) {
						console.log(infomessage, "infomessage");
						console.log(chioceClick, "错误，第一次点击")
						$("." + corrects + "").removeClass('right');
						$("." + correct + "").removeClass('wrong');
					}
					if(swiper.activeIndex == 4) {
						$(".over").show();
						console.log(chioceClick, "错误，第一2次点击")
					}

				}, 800)

				if(key == 0) {
					correctAnswer.push(0);
				} else {
					correctAnswer.push(1);
				}
			}
			if(swiper.activeIndex == 4) {
				$(".next").hide();
				var correct = "bounceInUp" + key;
				$("." + corrects + "").addClass('right');
				console.log(correctAnswer);
				$(".over").hide();
					$(".over").html("<div onclick='getBook()' class='answer_over'><img src='img/result_button.png' class='over_btn'><div class='over_text'></div></div>");
//				$(".over").html("<div onclick='getBook()' class='answer_over'><img src='img/result_button.png' class='over_btn'><div class='over_text'></div></div>");
			}
		} else if(chioceClick == 1 && swiper.activeIndex == 1) {
			chioceClick = 2
			let that = this;
			console.log(correctNum, key);
			console.log(swiper.activeIndex, "我是页面数量1");
			var correct = "bounceInUp" + key;
			var choic = "choices" + key;
			if(correctNum == key) { //选择正确
				$("." + correct + "").addClass('right');
				$("#" + choic + "").unbind("click");

				setTimeout(function() {
					if(swiper.activeIndex == 1) {
						$(".tag_piece1").show();
					} else if(swiper.activeIndex == 2) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
					} else if(swiper.activeIndex == 3) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
						$(".tag_piece3").show();

					} else if(swiper.activeIndex == 4) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
						$(".tag_piece3").show();
						$(".veseion1").hide();
						$(".veseion").show();
					}
					if(swiper.activeIndex == 0 || swiper.activeIndex == 1 || swiper.activeIndex == 2 || swiper.activeIndex == 3) {
						console.log(chioceClick, "正确，第一次点击")
						$("." + correct + "").removeClass('right');
						swiper.slideTo(swiper.activeIndex + 1);
						$(".questiontitles_box").hide();
						$(".question-title").hide();
												$(".question-no-num").hide();
						$(".huida_box").hide();
						$(".bounceInUp2").hide();
						$(".question-select").hide();
						setTimeout(function() { //预先显示问题
							$(".questiontitles_box").show();
							$(".question-title").show();
														$(".question-no-num").show();
						}, 600);
						setTimeout(function() { //问题加载完成后再出现选项
							$(".huida_box").show();
							$(".bounceInUp2").show();
							$(".question-select").show();
						}, 1200)
					}
					if(swiper.activeIndex == 4) {
						console.log(chioceClick, "正确，第一次点击")
						$(".over").show();
						$(".questiontitles_box").show();
						$(".question-title").show();
												$(".question-no-num").show();
						$(".huida_box").show();

						$(".bounceInUp2").show();
						$(".question-select").show();
					}
					console.log(swiper.activeIndex, "我是页面数量2");
				}, 1500)

				correctAnswer.push(3);
				console.log(correctAnswer)
			} else { //选择 错误
				$("#" + choic + "").unbind("click");
				//			问题和选项
				if(swiper.activeIndex == 1) { //箭头
					$(".tag_piece1").show();
				} else if(swiper.activeIndex == 2) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
				} else if(swiper.activeIndex == 3) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
					$(".tag_piece3").show();
				} else if(swiper.activeIndex == 4) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
					$(".tag_piece3").show();
					$(".veseion1").hide();
					$(".veseion").show();
				}
				//			答案
				setTimeout(function() { //隐藏男女主脚
					if(infomessage[0].sexid == 0) {
						$("#tipUpanimsman").hide();
					} else {
						$("#tipUpanimswo").hide();
					}
				}, 300);
				setTimeout(function() {
					//显示错误提示框 两个定时器  实现动效
					$(".answertitles_box").show();
					$(".woringsTitle").show();
				}, 800);
				var mission = document.getElementById("miss");
				miss.play();
				var corrects = "bounceInUp" + correctNum;
				$("." + corrects + "").addClass('right');
				$("." + correct + "").addClass('wrong');
				setTimeout(function() {
					$(".question-select").hide();
					$(".question-title").hide();
					$(".questiontitles_box").hide();
					$(".bounceInUp2").hide();
					$(".huida_box").hide();
					if(swiper.activeIndex == 0 || swiper.activeIndex == 1 || swiper.activeIndex == 2 || swiper.activeIndex == 3) {
						console.log(infomessage, "infomessage");
						console.log(chioceClick, "错误，第一次点击")
						$("." + corrects + "").removeClass('right');
						$("." + correct + "").removeClass('wrong');
					}
					if(swiper.activeIndex == 4) {
						$(".over").show();
						console.log(chioceClick, "错误，第一2次点击")
					}

				}, 800)

				if(key == 0) {
					correctAnswer.push(0);
				} else {
					correctAnswer.push(1);
				}
			}
			if(swiper.activeIndex == 4) {
				$(".next").hide();
				var correct = "bounceInUp" + key;
				$("." + corrects + "").addClass('right');
				console.log(correctAnswer);
				$(".over").hide();
					$(".over").html("<div onclick='getBook()' class='answer_over'><img src='img/result_button.png' class='over_btn'><div class='over_text'></div></div>");
//				$(".over").html("<div onclick='getBook()' class='answer_over'><img src='img/result_button.png' class='over_btn'><div class='over_text'></div></div>");
			}
		} else if(chioceClick == 2 && swiper.activeIndex == 2) {
			chioceClick = 3;
			let that = this;
			console.log(correctNum, key);
			console.log(swiper.activeIndex, "我是页面数量1");
			var correct = "bounceInUp" + key;
			var choic = "choices" + key;
			if(correctNum == key) { //选择正确
				$("." + correct + "").addClass('right');
				$("#" + choic + "").unbind("click");

				setTimeout(function() {
					if(swiper.activeIndex == 1) {
						$(".tag_piece1").show();
					} else if(swiper.activeIndex == 2) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
					} else if(swiper.activeIndex == 3) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
						$(".tag_piece3").show();

					} else if(swiper.activeIndex == 4) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
						$(".tag_piece3").show();
						$(".veseion1").hide();
						$(".veseion").show();
					}
					if(swiper.activeIndex == 0 || swiper.activeIndex == 1 || swiper.activeIndex == 2 || swiper.activeIndex == 3) {
						console.log(chioceClick, "正确，第一次点击")
						$("." + correct + "").removeClass('right');
						swiper.slideTo(swiper.activeIndex + 1);
						$(".questiontitles_box").hide();
						$(".question-title").hide();
												$(".question-no-num").hide();
						$(".huida_box").hide();
						$(".bounceInUp2").hide();
						$(".question-select").hide();
						setTimeout(function() { //预先显示问题
							$(".questiontitles_box").show();
							$(".question-title").show();
														$(".question-no-num").show();
						}, 600);
						setTimeout(function() { //问题加载完成后再出现选项
							$(".huida_box").show();
							$(".bounceInUp2").show();
							$(".question-select").show();
						}, 1200)
					}
					if(swiper.activeIndex == 4) {
						console.log(chioceClick, "正确，第一次点击")
						$(".over").show();
						$(".questiontitles_box").show();
						$(".question-title").show();
												$(".question-no-num").show();
						$(".huida_box").show();

						$(".bounceInUp2").show();
						$(".question-select").show();
					}
					console.log(swiper.activeIndex, "我是页面数量2");
				}, 1500)

				correctAnswer.push(3);
				console.log(correctAnswer)
			} else { //选择 错误
				$("#" + choic + "").unbind("click");
				//			问题和选项
				if(swiper.activeIndex == 1) { //箭头
					$(".tag_piece1").show();
				} else if(swiper.activeIndex == 2) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
				} else if(swiper.activeIndex == 3) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
					$(".tag_piece3").show();
				} else if(swiper.activeIndex == 4) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
					$(".tag_piece3").show();
					$(".veseion1").hide();
					$(".veseion").show();
				}
				//			答案
				setTimeout(function() { //隐藏男女主脚
					if(infomessage[0].sexid == 0) {
						$("#tipUpanimsman").hide();
					} else {
						$("#tipUpanimswo").hide();
					}
				}, 300);
				setTimeout(function() {
					//显示错误提示框 两个定时器  实现动效
					$(".answertitles_box").show();
					$(".woringsTitle").show();
				}, 800);
				var mission = document.getElementById("miss");
				miss.play();
				var corrects = "bounceInUp" + correctNum;
				$("." + corrects + "").addClass('right');
				$("." + correct + "").addClass('wrong');
				setTimeout(function() {
					$(".question-select").hide();
					$(".question-title").hide();
					$(".questiontitles_box").hide();
					$(".bounceInUp2").hide();
					$(".huida_box").hide();
					if(swiper.activeIndex == 0 || swiper.activeIndex == 1 || swiper.activeIndex == 2 || swiper.activeIndex == 3) {
						console.log(infomessage, "infomessage");
						console.log(chioceClick, "错误，第一次点击")
						$("." + corrects + "").removeClass('right');
						$("." + correct + "").removeClass('wrong');
					}
					if(swiper.activeIndex == 4) {
						$(".over").show();
						console.log(chioceClick, "错误，第一2次点击")
					}

				}, 800)

				if(key == 0) {
					correctAnswer.push(0);
				} else {
					correctAnswer.push(1);
				}
			}
			if(swiper.activeIndex == 4) {
				$(".next").hide();
				var correct = "bounceInUp" + key;
				$("." + corrects + "").addClass('right');
				console.log(correctAnswer);
				$(".over").hide();
//				$(".over").html("<div onclick='getBook()' class='answer_over'><img src='img/result_button.png' class='over_btn'><div class='over_text'></div></div>");
	$(".over").html("<div onclick='getBook()' class='answer_over'><img src='img/result_button.png' class='over_btn'><div class='over_text'></div></div>");
			}
		} else if(chioceClick == 3 && swiper.activeIndex == 3) {
			chioceClick = 4;
			let that = this;
			console.log(correctNum, key);
			console.log(swiper.activeIndex, "我是页面数量1");
			var correct = "bounceInUp" + key;
			var choic = "choices" + key;
			if(correctNum == key) { //选择正确
				$("." + correct + "").addClass('right');
				$("#" + choic + "").unbind("click");

				setTimeout(function() {
					if(swiper.activeIndex == 1) {
						$(".tag_piece1").show();
					} else if(swiper.activeIndex == 2) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
					} else if(swiper.activeIndex == 3) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
						$(".tag_piece3").show();

					} else if(swiper.activeIndex == 4) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
						$(".tag_piece3").show();
						$(".veseion1").hide();
						$(".veseion").show();
					}
					if(swiper.activeIndex == 0 || swiper.activeIndex == 1 || swiper.activeIndex == 2 || swiper.activeIndex == 3) {
						console.log(chioceClick, "正确，第一次点击")
						$("." + correct + "").removeClass('right');
						swiper.slideTo(swiper.activeIndex + 1);
						$(".questiontitles_box").hide();
						$(".question-title").hide();
												$(".question-no-num").hide();
						$(".huida_box").hide();
						$(".bounceInUp2").hide();
						$(".question-select").hide();
						setTimeout(function() { //预先显示问题
							$(".questiontitles_box").show();
							$(".question-title").show();
														$(".question-no-num").show();
						}, 600);
						setTimeout(function() { //问题加载完成后再出现选项
							$(".huida_box").show();
							$(".bounceInUp2").show();
							$(".question-select").show();
						}, 1200)
					}
					if(swiper.activeIndex == 4) {
						console.log(chioceClick, "正确，第一次点击")
						$(".over").show();
						$(".questiontitles_box").show();
						$(".question-title").show();
												$(".question-no-num").show();
						$(".huida_box").show();

						$(".bounceInUp2").show();
						$(".question-select").show();
					}
					console.log(swiper.activeIndex, "我是页面数量2");
				}, 1500)

				correctAnswer.push(3);
				console.log(correctAnswer)
			} else { //选择 错误
				$("#" + choic + "").unbind("click");
				//			问题和选项
				if(swiper.activeIndex == 1) { //箭头
					$(".tag_piece1").show();
				} else if(swiper.activeIndex == 2) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
				} else if(swiper.activeIndex == 3) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
					$(".tag_piece3").show();
				} else if(swiper.activeIndex == 4) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
					$(".tag_piece3").show();
					$(".veseion1").hide();
					$(".veseion").show();
				}
				//			答案
				setTimeout(function() { //隐藏男女主脚
					if(infomessage[0].sexid == 0) {
						$("#tipUpanimsman").hide();
					} else {
						$("#tipUpanimswo").hide();
					}
				}, 300);
				setTimeout(function() {
					//显示错误提示框 两个定时器  实现动效
					$(".answertitles_box").show();
					$(".woringsTitle").show();
				}, 800);
				var mission = document.getElementById("miss");
				miss.play();
				var corrects = "bounceInUp" + correctNum;
				$("." + corrects + "").addClass('right');
				$("." + correct + "").addClass('wrong');
				setTimeout(function() {
					$(".question-select").hide();
					$(".question-title").hide();
					$(".questiontitles_box").hide();
					$(".bounceInUp2").hide();
					$(".huida_box").hide();
					if(swiper.activeIndex == 0 || swiper.activeIndex == 1 || swiper.activeIndex == 2 || swiper.activeIndex == 3) {
						console.log(infomessage, "infomessage");
						console.log(chioceClick, "错误，第一次点击")
						$("." + corrects + "").removeClass('right');
						$("." + correct + "").removeClass('wrong');
					}
					if(swiper.activeIndex == 4) {
						$(".over").show();
						console.log(chioceClick, "错误，第一2次点击")
					}

				}, 800)

				if(key == 0) {
					correctAnswer.push(0);
				} else {
					correctAnswer.push(1);
				}
			}
			if(swiper.activeIndex == 4) {
				$(".next").hide();
				var correct = "bounceInUp" + key;
				$("." + corrects + "").addClass('right');
				console.log(correctAnswer);
				$(".over").hide();
					$(".over").html("<div onclick='getBook()' class='answer_over'><img src='img/result_button.png' class='over_btn'><div class='over_text'></div></div>");
//				$(".over").html("<div onclick='getBook()' class='answer_over'><img src='img/result_button.png' class='over_btn'><div class='over_text'></div></div>");
			}
		} else if(chioceClick == 4 && swiper.activeIndex == 4) {
			chioceClick = 5;
			let that = this;
			console.log(correctNum, key);
			console.log(swiper.activeIndex, "我是页面数量1");
			var correct = "bounceInUp" + key;
			var choic = "choices" + key;
			if(correctNum == key) { //选择正确
				$("." + correct + "").addClass('right');
				$("#" + choic + "").unbind("click");

				setTimeout(function() {
					if(swiper.activeIndex == 1) {
						$(".tag_piece1").show();
					} else if(swiper.activeIndex == 2) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
					} else if(swiper.activeIndex == 3) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
						$(".tag_piece3").show();

					} else if(swiper.activeIndex == 4) {
						$(".tag_piece1").show();
						$(".tag_piece2").show();
						$(".tag_piece3").show();
						$(".veseion1").hide();
						$(".veseion").show();
					}
					if(swiper.activeIndex == 0 || swiper.activeIndex == 1 || swiper.activeIndex == 2 || swiper.activeIndex == 3) {
						console.log(chioceClick, "正确，第一次点击")
						$("." + correct + "").removeClass('right');
						swiper.slideTo(swiper.activeIndex + 1);
						$(".questiontitles_box").hide();
						$(".question-title").hide();
												$(".question-no-num").hide();
						$(".huida_box").hide();
						$(".bounceInUp2").hide();
						$(".question-select").hide();
						setTimeout(function() { //预先显示问题
							$(".questiontitles_box").show();
							$(".question-title").show();
														$(".question-no-num").show();
						}, 600);
						setTimeout(function() { //问题加载完成后再出现选项
							$(".huida_box").show();
							$(".bounceInUp2").show();
							$(".question-select").show();
						}, 1200)
					}
					if(swiper.activeIndex == 4) {
						console.log(chioceClick, "正确，第一次点击")
						$(".over").show();
						$(".questiontitles_box").show();
						$(".question-title").show();
												$(".question-no-num").show();
						$(".huida_box").show();

						$(".bounceInUp2").show();
						$(".question-select").show();
					}
					console.log(swiper.activeIndex, "我是页面数量2");
				}, 1500)

				correctAnswer.push(3);
				console.log(correctAnswer)
			} else { //选择 错误
				$("#" + choic + "").unbind("click");
				//			问题和选项
				if(swiper.activeIndex == 1) { //箭头
					$(".tag_piece1").show();
				} else if(swiper.activeIndex == 2) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
				} else if(swiper.activeIndex == 3) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
					$(".tag_piece3").show();
				} else if(swiper.activeIndex == 4) {
					$(".tag_piece1").show();
					$(".tag_piece2").show();
					$(".tag_piece3").show();
					$(".veseion1").hide();
					$(".veseion").show();
				}
				//			答案
				setTimeout(function() { //隐藏男女主脚
					if(infomessage[0].sexid == 0) {
						$("#tipUpanimsman").hide();
					} else {
						$("#tipUpanimswo").hide();
					}
				}, 300);
				setTimeout(function() {
					//显示错误提示框 两个定时器  实现动效
					$(".answertitles_box").show();
					$(".woringsTitle").show();
				}, 800);
				var mission = document.getElementById("miss");
				miss.play();
				var corrects = "bounceInUp" + correctNum;
				$("." + corrects + "").addClass('right');
				$("." + correct + "").addClass('wrong');
				setTimeout(function() {
					$(".question-select").hide();
					$(".question-title").hide();
					$(".questiontitles_box").hide();
					$(".bounceInUp2").hide();
					$(".huida_box").hide();
					if(swiper.activeIndex == 0 || swiper.activeIndex == 1 || swiper.activeIndex == 2 || swiper.activeIndex == 3) {
						console.log(infomessage, "infomessage");
						console.log(chioceClick, "错误，第一次点击")
						$("." + corrects + "").removeClass('right');
						$("." + correct + "").removeClass('wrong');
					}
					if(swiper.activeIndex == 4) {
						$(".over").show();
						console.log(chioceClick, "错误，第一2次点击")
					}

				}, 800)

				if(key == 0) {
					correctAnswer.push(0);
				} else {
					correctAnswer.push(1);
				}
			}
			if(swiper.activeIndex == 4) {
				$(".next").hide();
				var correct = "bounceInUp" + key;
				$("." + corrects + "").addClass('right');
				console.log(correctAnswer);
				$(".over").hide();
					$(".over").html("<div onclick='getBook()' class='answer_over'><img src='img/result_button.png' class='over_btn'><div class='over_text'></div></div>");
//				$(".over").html("<div onclick='getBook()' class='answer_over'><img src='img/result_button.png' class='over_btn'><div class='over_text'></div></div>");
			}
		}
		//		chioceClick++;
	}

(function($) {
    $.fn.jquizzy = function(settings) {
        var defaults = {
            questions: null,
            startImg: 'images/start.gif',
            endText: '已结束!',
            shortURL: null,
            sendResultsURL: null,
            resultComments: {
                perfect: '你是爱因斯坦么?',
                excellent: '非常优秀!',
                good: '很好，发挥不错!',
                average: '一般般了。',
                bad: '太可怜了！',
                poor: '好可怕啊！',
                worst: '悲痛欲绝！'
            }
        };
       
        var config = $.extend(defaults, settings);
         console.log(config.questions[0].answers[0]);
         console.log(config);
         var correctAnswers = [];
         var answer = "";
         var firstBox = document.getElementById("quiz-container");
//    		let i,m;
         for( let i = 0;i<=config.questions.length;i++){
         	answer += "	<div class='question-wrap'>"
         	answer += "<div class='question-no'><div><div class='question-no-num animate'>"+(i+1)+"/"+(config.questions.length+1)+"</div><div class='question-no-type animate'>("+config.questions.question+")</div></div></div>  "
         	answer +="<div class='question'><div><div class='question-title bounceInUp1'><p>"+config.questions[i].question+"</div>"
         	answer += "<div class='question-select bounceInUp2'><ul>"
//       	for(var m in config.questions[i].answers.length)
//       	for( let m=0;m<=config.questions[i].answers.length;m++){
//       		answer += "<li class='bounceInUp"+(2+i)+"' >"+config.questions[i].answers[m]+"</li>"
//       	}
//       	<li class='bounceInUp2' style='margin-top: 1rem;'>"+config.questions[i].answers[1]+"</li><li class='bounceInUp3'>"+config.questions[i].answers[2]+"</li><li class='bounceInUp4'>"+config.questions[i].answers[3]+"</li>
         	
         	answer +="</ul></div></div></div>"
         	answer +="</div>"
//       correctAnswers.push(config.questions[i].correctAnswer);
         }
         firstBox.innerHTML=answer;
						
		
//      if (config.questions === null) {
//          $(this).html('<div class="intro-container slide-container"><h2 class="qTitle">Failed to parse questions.</h2></div>');
//          return;
//      }
//      var superContainer = $(this),
//      answers = [],
//		contentFob = '',
//      questionsIteratorIndex,
//      answersIteratorIndex;
//      superContainer.addClass('main-quiz-holder');
//      for (questionsIteratorIndex = 0; questionsIteratorIndex < config.questions.length; questionsIteratorIndex++) {
//          contentFob += '<div class="slide-container"><div class="question-number">' + (questionsIteratorIndex + 1) + '/' + config.questions.length + '</div><div class="question">' + config.questions[questionsIteratorIndex].question + '</div><ul class="answers">';
//          for (answersIteratorIndex = 0; answersIteratorIndex < config.questions[questionsIteratorIndex].answers.length; answersIteratorIndex++) {
//              contentFob += '<li>' + config.questions[questionsIteratorIndex].answers[answersIteratorIndex] + '</li>';
//          }
//          contentFob += '</ul><div class="nav-container">';
//          if (questionsIteratorIndex !== 0) {
//              contentFob += '<div class="prev"><a class="nav-previous" href="#">&lt; 上一题</a></div>';
//          }
//          if (questionsIteratorIndex < config.questions.length - 1) {
//              contentFob += '<div class="next"><a class="nav-next" href="#">下一题 &gt;</a></div>';
//          } else {
//              contentFob += '<div class="next final"><a class="nav-show-result" href="#">完成</a></div>';
//          }
//          contentFob += '</div></div>';
//          answers.push(config.questions[questionsIteratorIndex].correctAnswer);
//      }
//      superContainer.html(contentFob );
//      var progress = superContainer.find('.progress'),
//      progressKeeper = superContainer.find('.progress-keeper'),
//      notice = superContainer.find('.notice'),
//      progressWidth = progressKeeper.width(),
//      userAnswers = [],
//      questionLength = config.questions.length,
//      slidesList = superContainer.find('.slide-container');
//      function checkAnswers() {
//          var resultArr = [],
//          flag = false;
//          for (i = 0; i < answers.length; i++) {
//              if (answers[i] == userAnswers[i]) {
//                  flag = true;
//              } else {
//                  flag = false;
//              }
//              resultArr.push(flag);
//          }
//          return resultArr;
//      }
//      function roundReloaded(num, dec) {
//          var result = Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
//          return result;
//      }
//      function judgeSkills(score) {
//          var returnString;
//          if (score === 100) return config.resultComments.perfect;
//          else if (score > 90) return config.resultComments.excellent;
//          else if (score > 70) return config.resultComments.good;
//          else if (score > 50) return config.resultComments.average;
//          else if (score > 35) return config.resultComments.bad;
//          else if (score > 20) return config.resultComments.poor;
//          else return config.resultComments.worst;
//      }
//      progressKeeper.hide();
//      notice.hide();
//      slidesList.hide().first().fadeIn(500);
//      superContainer.find('li').click(function() {
//          var thisLi = $(this);
//          if (thisLi.hasClass('selected')) {
//              thisLi.removeClass('selected');
//          } else {
//              thisLi.parents('.answers').children('li').removeClass('selected');
//              thisLi.addClass('selected');
//          }
//      });
//      superContainer.find('.nav-start').click(function() {
//          $(this).parents('.slide-container').fadeOut(500,
//          function() {
//              $(this).next().fadeIn(500);
//              progressKeeper.fadeIn(500);
//          });
//          return false;
//      });
//      superContainer.find('.next').click(function() {
//          if ($(this).parents('.slide-container').find('li.selected').length === 0) {
//              notice.fadeIn(300);
//              return false;
//          }
//          notice.hide();
//          $(this).parents('.slide-container').fadeOut(500,
//          function() {
//              $(this).next().fadeIn(500);
//          });
//          progress.animate({
//              width: progress.width() + Math.round(progressWidth / questionLength)
//          },
//          500);
//          return false;
//      });
//      superContainer.find('.prev').click(function() {
//          notice.hide();
//          $(this).parents('.slide-container').fadeOut(500,
//          function() {
//              $(this).prev().fadeIn(500);
//          });
//          progress.animate({
//              width: progress.width() - Math.round(progressWidth / questionLength)
//          },
//          500);
//          return false;
//      });
//      superContainer.find('.final').click(function() {
//          if ($(this).parents('.slide-container').find('li.selected').length === 0) {
//              notice.fadeIn(300);
//              return false;
//          }
//          superContainer.find('li.selected').each(function(index) {
//              userAnswers.push($(this).parents('.answers').children('li').index($(this).parents('.answers').find('li.selected')) + 1);
//          });
//          if (config.sendResultsURL !== null) {
//              var collate = [];
//              for (r = 0; r < userAnswers.length; r++) {
//                  collate.push('{"questionNumber":"' + parseInt(r + 1, 10) + '", "userAnswer":"' + userAnswers[r] + '"}');
//              }
//              $.ajax({
//                  type: 'POST',
//                  url: config.sendResultsURL,
//                  data: '{"answers": [' + collate.join(",") + ']}',
//                  complete: function() {
//                      console.log("OH HAI");
//                  }
//              });
//          }
//          progressKeeper.hide();
//          var results = checkAnswers(),
//          resultSet = '',
//          trueCount = 0,
//          shareButton = '',
//          score,
//          url;
//          if (config.shortURL === null) {
//              config.shortURL = window.location
//          };
//          for (var i = 0,
//          toLoopTill = results.length; i < toLoopTill; i++) {
//              if (results[i] === true) {
//                  trueCount++;
//                  isCorrect = true;
//              }
//              resultSet += '<div class="result-row">' + (results[i] === true ? "<div class='correct'>#"+(i + 1)+"<span></span></div>": "<div class='wrong'>#"+(i + 1)+"<span></span></div>");
//              resultSet += '<div class="resultsview-qhover">' + config.questions[i].question;
//              resultSet += "<ul>";
//              for (answersIteratorIndex = 0; answersIteratorIndex < config.questions[i].answers.length; answersIteratorIndex++) {
//                  var classestoAdd = '';
//                  if (config.questions[i].correctAnswer == answersIteratorIndex + 1) {
//                      classestoAdd += 'right';
//                  }
//                  if (userAnswers[i] == answersIteratorIndex + 1) {
//                      classestoAdd += ' selected';
//                  }
//                  resultSet += '<li class="' + classestoAdd + '">' + config.questions[i].answers[answersIteratorIndex] + '</li>';
//              }
//              resultSet += '</ul></div></div>';
//          }
//          score = roundReloaded(trueCount / questionLength * 100, 2);
//          
//          resultSet = '<h2 class="qTitle">' + judgeSkills(score) + '<br/> 您的分数： ' + score + '</h2>' + shareButton + '<div class="jquizzy-clear"></div>' + resultSet + '<div class="jquizzy-clear"></div>';
//          superContainer.find('.result-keeper').html(resultSet).show(500);
//          superContainer.find('.resultsview-qhover').hide();
//          superContainer.find('.result-row').hover(function() {
//              $(this).find('.resultsview-qhover').show();
//          },
//          function() {
//              $(this).find('.resultsview-qhover').hide();
//          });
//          $(this).parents('.slide-container').fadeOut(500,
//          function() {
//              $(this).next().fadeIn(500);
//          });
//          return false;
//      });
    };
})(jQuery);
function go( url ){

  var questionNum = 1;
  //首次赋值题号
  $('.question-no-num').html(questionNum+"/5");
  var num = 0;
   // 下一题动画
  var rightAnswerNum = 1 ;
  var n = 0; //控制点击次数
  $('li').on('click',function(){
    n++;
    if(n >= 2){
      console.log(n)
      return;
    }
    var that = $(this);
    questionNum++;

    if(questionNum == 5){ //答题结束
//     location.href = './'+url+'.html';
   }
    
      var selectIndex = that.index();
      console.log(that.index());
      if(selectIndex == rightAnswerNum){
          that.addClass('right');
          $("#question_b").show();
         	$("#question_a").hide();
          setTimeout(addclass1,2000) 

      }else{
          that.addClass('wrong');
          $('li').eq(rightAnswerNum).addClass('right');
      }
      removeclass()
       
  });

  //添加动画效果
  function addclass(){
    $('.question-no-num').html(questionNum+"/5");
    $('.question-no-bg img').addClass('animate');
    $('.question-no-num').addClass('animate');
    $('.question-no-type').addClass('animate');
    $('.question-title').addClass('bounceInUp1');
    $('li').attr('class','');
    $('li').eq(0).addClass('bounceInUp2');
    $('li').eq(1).addClass('bounceInUp3');
    $('li').eq(2).addClass('bounceInUp4');
    n = 0;
  }
    function addclass1(){
    $('.question-no-num').html(questionNum+"/5");
    $('.question-no-bg img').addClass('animate');
    $('.question-no-num').addClass('animate');
    $('.question-no-type').addClass('animate');
    $('.question-title1').addClass('bounceInUp1');
    $('li').attr('class','');
    $('li').eq(0).addClass('bounceInUp21');
    $('li').eq(1).addClass('bounceInUp31');
    $('li').eq(2).addClass('bounceInUp41');
    n = 0;
}
  //清除动画效果
  function removeclass(){
    
    $('.question-no-num').removeClass('animate');
    $('.question-no-type').removeClass('animate');
    $('.question-no-bg img').removeClass('animate');
    $('.question-title').removeClass('bounceInUp1');
    $('li').eq(0).removeClass('bounceInUp2');
    $('li').eq(1).removeClass('bounceInUp3');
    $('li').eq(2).removeClass('bounceInUp4');
  }
    }

// $(".enter").click(function() {
//     $(".container").hide();
//     $(".sace").show();
//
// });

// $('.saveImg').click(function(){
function downFile() {
		console.log(".................")
    var targetDom = $(".rankingss");
    var copyDom = targetDom.clone();
    var cwidth=targetDom.width();
    var cheight=targetDom.height();
    console.log(cwidth);
    console.log(cheight);
//
    //要将 canvas 的宽高设置成容器宽高的 2 倍
    var canvas = document.createElement("canvas");
    canvas.width = cwidth * 2;
    canvas.height = cheight * 2;
    canvas.style.width = cwidth + "px";
    canvas.style.height = cheight + "px";
    var context = canvas.getContext("2d");
    //然后将画布缩放，将图像放大两倍画到画布上
    context.scale(2,2);

    html2canvas($(".rankingss"),{
        // $(".myImg")是你要复制生成canvas的区域，可以自己选
        allowTaint: true,
        taintTest: true,
        canvas:canvas,
        onrendered:function(canvas){
            dataURL =canvas.toDataURL("image/png");
//           $("body").append(canvas);
            console.log(dataURL);
            $('#imgShow').attr('src',dataURL);
            $(".rankingss").hide();
          	 $('#imgShow').show();
        },
        width:cwidth*2,
        height:cheight*2
    })

}

//function saveImg() {  //
  //  $('#imgShow').show();
//}

// });

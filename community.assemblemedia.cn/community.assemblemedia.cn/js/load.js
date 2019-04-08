function preloadImgs() {
		var imgs = document.images;
		for(var i = 0; i < imgs.length; i++) {
			images.push(imgs[i].src);
		}
		//get all images in style
		var cssImages = getallBgimages();
		for(var j = 0; j < cssImages.length; j++) {
			images.push(cssImages[j]);
		}

		$.imgpreload(images, {
			each: function() {
				/*this will be called after each image loaded*/
				var status = $(this).data('loaded') ? 'success' : 'error';
				if(status == "success") {
					var v = (parseFloat(++imgNum) / images.length).toFixed(2);
					$("#percentShow").html(Math.round(v * 100) + "<sup>%</sup>");
				}
			},
			all: function() {
				/*this will be called after all images loaded*/
				$("#percentShow ").html("100<sup>%</sup>");

				//          $("percentShow").fadeOut(10000);            
				// $(".top").hide();
				
			}
		});

	}

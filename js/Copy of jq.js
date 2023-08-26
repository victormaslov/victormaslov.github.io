jQuery(document).ready( function($) {
		var imgHeights=new Array("109","427","377","667","399","600","450","391","600","670","634");
		
		function getImgHeightById(imgId){
			var aHeight = imgHeights[imgId - 1];
			return aHeight;
		}
		
		function getVisibleHeight(){
			var w=window,d=document,e=d.documentElement,g=d.getElementsByTagName('body')[0],x=w.innerWidth||e.clientWidth||g.clientWidth,y=w.innerHeight||e.clientHeight||g.clientHeight;
			return y;
		}

		function defintTopMargin(imgH, scrH){
			var margin = 0;
			if(imgH < scrH){
				margin = (scrH - imgH) / 2;
			}
			return margin;
		}
		
		$(".framePhoto").mouseover(function(){
			var divID = '#' + $(this).attr("id");
			$(divID).css('cursor','pointer');
		});

		$(".framePhoto").click(function(){
			var intId = $(this).attr("id").replace("pfimg", "");
			var imgSrc = "/static/img/photo_frame/full/" + intId + "_full.jpg";
			margin = defintTopMargin(getImgHeightById(intId), getVisibleHeight());
			$("div.fullPhoto").show();
			$("div.fullPhoto").html("<img id=\"fullimg" + intId + "\" src=\"" + imgSrc + "\" border=\"0\" alt=\"\" />");
			$("div.fullPhoto img").css('margin-top',margin);
		});  
		
		$("div.fullPhoto").click(function(){
			$("div.fullPhoto").hide();
		});
		
		$("div.fullPhoto").mouseenter(function(){
			$(this).css('cursor','pointer'); 
		});

		$("div.flag_ru, div.flag_uk").click(function () {
			var url = $(this).attr("url");
			window.location = url;
		});
		
		//Read article
		$("div.long").hide();
		$("div.short, div.long").css('font-size','15px');
		
		$("div.readMore").click(function(){
			$("div.long").show();
			$("div.readMore").hide();
		});
		
		//Menu
		$("#sm1, #sm3").hide();
		
		$(".menu1").mouseenter(function(){
			$("#sm1").show();
			$("#m1").css('background','url(/static/img/white60.png)').css('cursor','pointer').css('color','#292929')
		}).mouseleave(function(){
			$("#sm1").hide();
		});	
		
		/* $("#m1").mouseenter(function(){
			$("#m1").css('color','#292929')
			$("#sm1").css('display','inline');
		}).mouseleave(function(){
			if($("#sm1").hover()) {
				$("#m1").css('color','#FFF');
				$("#sm1").css('display','none');
			}
		});
		
		$("#sm1").mouseenter(function(){
			$("#m1").css('background','url(/static/img/white60.png)').css('color','#292929');
		}).mouseleave(function(){
			if($("#m1").is(":hover") == false) {
				$("#m1").css('color','#FFF');
			}
			$("#sm1").css('display','none');
			$("#m1").css('background','');
		}); */
})
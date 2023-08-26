jQuery(document).ready( function($) {
		var imgHeights=new Array("109","427","377","667","399","600","450","391","600","670","634");
		var archImgHeights=new Array("951","633","633","633","633","633","950","633","951","951","951","633","633","633","633","633");
		
		function getImgHeightById(imgId, a){
			if(a == 1){
				var aHeight = imgHeights[imgId - 1];
			}else{
				var aHeight = archImgHeights[imgId - 1];
			}
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
			$(this).css('cursor','pointer').css('opacity','1.0');
		});
		
		$(".framePhoto").mouseover(function(){
			var divID = '#' + $(this).attr("id");
			$(divID).css('cursor','pointer').css('opacity','1.0');
		});
		
		$(".framePhoto").mouseleave(function(){
			$(this).css('opacity','0.6');
		});

		$(".framePhoto").click(function(){
			var intId = $(this).attr("id").replace("pfimg", "");
			var imgSrc = "/static/img/photo_frame/full/" + intId + "_full.jpg";
			margin = defintTopMargin(getImgHeightById(intId, 1), getVisibleHeight());
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
			$("#sm1").show().css('cursor','pointer');
			$("#m1").css('background','url(/static/img/white60.png)').css('cursor','pointer').css('color','#292929')
		}).mouseleave(function(){
			$("#sm1").hide();
			$("#m1").css('color','#FFF').css('background','');
		});
		
		$(".menu3").mouseenter(function(){
			$("#sm3").show().css('cursor','pointer');
			$("#m3").css('background','url(/static/img/white60.png)').css('cursor','pointer').css('color','#292929')
		}).mouseleave(function(){
			$("#sm3").hide();
			$("#m3").css('color','#FFF').css('background','');
		});	
		
		$("div.menu div, #sm1 div, #sm3 div").click(function(){
			var url = $(this).attr("url");
			location.href=url;
		});
		
		$("div.docDownload").click(function(){
			var url = $(this).attr("url");
			window.open(url);
			return false;
		})
		
		//Arch gallery
		$("div.archImg img").mouseenter(function(){
			$(this).css("cursor","pointer");
		});

		$("div.archImg img").click(function(){
			var intId = $(this).attr("id").replace("arch", "");
			var imgSrc = "/static/img/arch_photos/" + intId + ".jpg";
			margin = defintTopMargin(getImgHeightById(intId, 2), getVisibleHeight());
			var theHeight = getImgHeightById(intId, 2);
			if(theHeight > getVisibleHeight()){
				theHeight = getVisibleHeight();
			}
			$("div.fullPhoto").show();
			$("div.fullPhoto").html("<img id=\"fullimg" + intId + "\" src=\"" + imgSrc + "\" height=\""+ theHeight + "\" border=\"0\" alt=\"\" />");
			$("div.fullPhoto img").css('margin-top',margin);
		});  
})
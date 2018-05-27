$(document).ready(function(){
	$(window).bind('beforeprint', function(){
		$('select').each(function(){
			if($(this).hasClass("color")){
				$(this).parent("span").after($('<span class="select-print noscreen" style="color:'+ $(this).find('option:selected').val()+'!important;font-size:40px">'
				+ $(this).find('option:selected').text() + '</span>'));
			}
			else if($(this).hasClass("letter")){
				$(this).parent("span").after($('<span class="select-print noscreen" style="position: relative;top:3px;left:20px;color:white!important;font-size:18px">'
				+ $(this).find('option:selected').text() + '</span> <img class="select-print noscreen" src="../images/hexa.png" style="position: relative;top: 0px;right: 0px;z-index:-1;width:30px;">'));
			}
			else if($(this).hasClass("nbr")){
				$(this).parent("span").after($('<span class="select-print noscreen" style="position: relative;top:3px;left:-15px;color:white!important;font-size:18px">'
				+ $(this).find('option:selected').text() + '</span>'));
			}
			else {
				$(this).parent("span").after($('<span class="select-print noscreen" style="font-size:24px">'
				+ $(this).find('option:selected').text() + '</span>'));
			}
		});
	});
	$(window).bind('afterprint', function(){
		$('.select-print').remove();
	});

	$('select').each(function(){
		if($(this).hasClass("color")){
			$(this).change(function(){
				if($(this).find('option:selected').attr('class')=="redText"){
					$(this).removeClass("blackText");
					$(this).addClass("redText");
				}
				else{
					$(this).removeClass("redText");
					$(this).addClass("blackText");
				}
			});
		}
	});

	$('select').each(function(){
		$(this).prop('selectedIndex', Math.floor(Math.random() * ($(this).children('option').length-1))+1).trigger('change');
	});


})

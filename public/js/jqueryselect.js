$(document).ready(function(){
	$(window).bind('beforeprint', function(){
		$('select').each(function(){
			if($(this).hasClass("color")){
				if($(this).prop('selectedIndex')==5){
					$(this).parent("span").after($('<span class="select-print noscreen" style="position: relative;top:1px;left:5px;color:'+ $(this).find('option:selected').val()+'!important;font-size:20px">'
					+ $(this).find('option:selected').text() + '</span>'));
				}
				else if ($(this).prop('selectedIndex')<5) {
					$(this).parent("span").after($('<span class="select-print noscreen" style="position: relative;top:0px;left:5px;color:'+ $(this).find('option:selected').val()+'!important;font-size:30px">'
					+ $(this).find('option:selected').text() + '</span>'));
				}
				else {
					$(this).parent("span").after($('<span class="select-print noscreen" style="position: relative;top:3	px;left:5px;color:color:'+ $(this).find('option:selected').val()+'!important;font-size:20px">'
					+ $(this).find('option:selected').text() + '</span>'));
					$(this).parent("span").parent("td").find(">:nth-child(2)").addClass("noprint");
				}

			}
			else if($(this).hasClass("letter")){
				$(this).parent("span").after($('<span class="select-print noscreen" style="position: relative;top:0px;left:22px;color:white!important;font-size:16px">'
				+ $(this).find('option:selected').text() + '</span> <img class="select-print noscreen" src="/images/hexa.png" style="position: relative;top: 0px;right: 2px;z-index:-1;padding		:3px;width:30px;">'));

			}
			else if($(this).hasClass("nbr")){
				$(this).parent("span").after($('<span class="select-print noscreen" style="position: relative;top:0px;left:-17px;color:white!important;font-size:16px">'
				+ $(this).find('option:selected').text() + '</span>'));
			}
			else {
				$(this).parent("span").after($('<span class="select-print noscreen" style="position: relative;top:0px;left:0px;font-size:24px">'
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

				if($(this).prop('selectedIndex')==6 || $(this).prop('selectedIndex')==7){
					$(this).parent("span").parent("td").find(">:first-child").addClass("hide");
				}
				else {
					$(this).parent("span").parent("td").find(">:first-child").removeClass("hide");
				}
			});
		}
	});

	//randomize table
	// $('select').each(function(){
	// 	$(this).prop('selectedIndex', Math.floor(Math.random() * ($(this).children('option').length-1))+1).trigger('change');
	// });


})

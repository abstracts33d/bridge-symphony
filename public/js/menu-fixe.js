// Execution de cette fonction lorsque le DOM sera enti�rement charg� 



	$(document).ready(function() {


			$("#cadre-menu").hover(function() {

					$("#cadre-menu").animate({ marginLeft: "170px"  }, 400 );


			},function(){


					$("#cadre-menu").animate({ marginLeft: "0"  }, 300 );


			});


	});

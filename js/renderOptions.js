$(document).ready(function(){

	var shirtSizeOptions = [
		{
			"value": "",
			"text": "Choose Shirt Size"
		},
		{
			"value":"M-S",
			"text": "Men's Small"
		},
        {
        	"value":"M-M",
        	"text": "Men's Medium"
        },
        {
        	"value":"M-L",
        	"text": "Men's Large"
        },
        {
        	"value":"M-XL",
        	"text": "Men's X-Large"
        },
        {
        	"value":"M-XXL",
        	"text": "Men's XX-Large"
        },
        {
        	"value":"W-S",
        	"text": "Women's Small"
        },
        {
        	"value":"W-M",
        	"text": "Women's Medium"
        },
        {
        	"value":"W-L",
        	"text": "Women's Large"
        },
        {
        	"value":"W-XL",
        	"text": "Women's X-Large"
        }


	];
	var shoeSizeOptions = [
		{ 	"value":"",
			"text":"Choose Shoe Size"
		},
        { 	"value":"M-7",
        	"text":"Men's 7"
        },
        { 	"value":"M-7.5",
        	"text":"Men's 7.5"
        },
        { 	"value":"M-8",
        	"text":"Men's 8"
        },
        { 	"value":"M-8.5",
        	"text":"Men's 8.5"
        },
        { 	"value":"M-9",
        	"text":"Men's 9"
        },
        { 	"value":"M-9.5",
        	"text":"Men's 9.5"
        },
        { 	"value":"M-10",
        	"text":"Men's 10"
        },
        { 	"value":"M-10.5",
        	"text":"Men's 10.5"
        },
        { 	"value":"M-11",
        	"text":"Men's 11"
        },
        { 	"value":"M-11.5",
        	"text":"Men's 11.5"
        },
        { 	"value":"M-12",
        	"text":"Men's 12"
        },
        { 	"value":"M-12.5",
        	"text":"Men's 12.5"
        },
        { 	"value":"M-13",
        	"text":"Men's 13"
        },
        { 	"value":"W-6",
        	"text":"Women's 6"
        },
        { 	"value":"W-6.5",
        	"text":"Women's 6.5"
        },
        { 	"value":"W-7",
        	"text":"Women's 7"
        },
        { 	"value":"W-7.5",
        	"text":"Women's 7.5"
        },
        { 	"value":"W-8",
        	"text":"Women's 8"
        },
        { 	"value":"W-8.5",
        	"text":"Women's 8.5"
        },
        { 	"value":"W-9",
        	"text":"Women's 9"
        },
        { 	"value":"W-9.5",
        	"text":"Women's 9.5"
        },
        { 	"value":"W-10",
        	"text":"Women's 10"
        },
        { 	"value":"W-10.5",
        	"text":"Women's 10.5"
        },
        { 	"value":"W-11",
        	"text":"Women's 11"
        },
        { 	"value":"W-11.5",
        	"text":"Women's 11.5"
        },
        { 	"value":"W-12",
        	"text":"Women's 12"
        }


	];
	var clubOptions = [
		{ 	
			"value":"",
			"text":"Choose Clubs",
		},
		{ 	
			"value":"M-L",
			"text":"Men's Left",
		},
		{ 	
			"value":"M-R",
			"text":"Men's Right",
		},
		{ 	
			"value":"W-L",
			"text":"Women's Left",
		},
		{ 	
			"value":"W-R",
			"text":"Women's Right"
		},

	];


	var golferForm = '<div class="golfer-info row">'+
						'<div class="col-sm-4 "><input type="text"  name="golfer-fname" placeholder="First Name" class="form-control"></div>'+
						'<div class="col-sm-4 "><input type="text"  name="golfer-lname" placeholder="Last Name" class="form-control"></div>'+
						'<div class="col-sm-4 "><input type="text"  name="golfer-handicap" placeholder="Handicap" class="form-control"></div>'+
					'</div>'+
					
					'<div class="golfer-contact row">'+
						'<div class="col-sm-4 "><input type="text"  name="golfer-email" placeholder="Email" class="form-control"></div>'+
						'<div class="col-sm-4 "><input type="text"  name="golfer-phone" placeholder="Phone" class="form-control"></div>'+
					'</div>'+
					'<br>'+
					'<div class="golfer-options row">'+
						'<div class="col-sm-4 ">'+
							
							'<select name="golfer-shirtsize" class="shirt-size size-select selectpicker">'+
		                    '</select>'+
						'</div>'+
						// '<div class="col-sm-4 ">'+
							
						// 	'<select name="golfer-shoesize" class="shoe-size size-select selectpicker">'+
		    //                 '</select>'+
						// '</div>'+
						
					'</div>';


	$(".golfer").append(golferForm);	
	$(shirtSizeOptions).each(function(index){
		$('.shirt-size').append('<option value="'+ shirtSizeOptions[index].value +'">'+ 
										shirtSizeOptions[index].text +
									'</option>');
			
	});

	// $(shoeSizeOptions).each(function(index){
	// 	$('.shoe-size').append('<option value="'+ shoeSizeOptions[index].value +'">'+ 
	// 									shoeSizeOptions[index].text +
	// 								'</option>');
	// });
	
	$('.selectpicker').selectpicker({
		width:"auto"
	});				



	$("input[type=radio][name=have_fgl_employee]").change(function(){

		if($(this).val() == 'yes'){
			
			$(".fgl_member_choice").parent().parent().removeClass('hidden').addClass('visible');
			$('#activity-header').removeClass('visible').addClass('hidden');
			$(".golfer").removeClass('visible').addClass('hidden');

		}
		else if($(this).val() == 'no'){
			$('#activity-header').removeClass('hidden').addClass('visible');
			$(".fgl_member_choice").parent().parent().removeClass('visible').addClass('hidden');
			$("input[type=radio][name=fgl_employee_random_choose]").prop('checked', false);
			$(".golfer").removeClass('hidden').addClass('visible');
		}
		
	});


	
	$("input[type=radio][name=fgl_employee_random_choose]").change(function(){
		

		var fgl_employee_included = $("input[type=radio][name=have_fgl_employee]").val();
		var fgl_employee_random_choose = $(this).val();

		$('#activity-header').removeClass('hidden').addClass('visible');		


		if( fgl_employee_included == 'yes' && fgl_employee_random_choose == 'yes') {
			$("#golfer1").removeClass('hidden').addClass('visible');
			$("#golfer2").removeClass('hidden').addClass('visible');
			$("#golfer3").removeClass('hidden').addClass('visible');
			$("#golfer4").removeClass('visible').addClass('hidden');
		}
		else if(fgl_employee_included == 'yes' && fgl_employee_random_choose == 'no' ) {
			$("#golfer1").removeClass('hidden').addClass('visible');
			$("#golfer2").removeClass('hidden').addClass('visible');
			$("#golfer3").removeClass('hidden').addClass('visible');
			$("#golfer4").removeClass('hidden').addClass('visible');

		}

	})


});
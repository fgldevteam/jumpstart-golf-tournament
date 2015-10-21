$(document).ready(function() {

    var kidIndex = 0;

    $('#regform')

        // Add button click handler
        .on('click', '.addButton', function() {

            kidIndex++;
            $( "#kids" ).attr( "value", kidIndex );

            $( ".removeButton" ).addClass( "hide" );
            $( ".removeButton" ).removeClass( "show" );
            $( ".removeButton" ).last().addClass( "show" ).removeClass("hide");            

            var $template = $('#optionTemplate'),
                $clone    = $template
                                .clone()
                                .removeClass('hide')
                                .removeAttr('id')
                                .attr('data-kid-index', kidIndex)
                                .insertBefore('#kidspace');

            // Update the name attributes
            $clone
                .find('[name="childname"]').attr('id', 'childname'+ kidIndex ).end()
                .find('[name="childgender"]').attr('id', 'childgender'+ kidIndex ).end()
                .find('[name="childage"]').attr('id', 'childage'+ kidIndex ).end()
                .find('[name="childallergies"]').attr('id', 'childallergies'+ kidIndex).end();
                $( ".removeButton" ).last().addClass( "show" ).removeClass("hide");  
        })

        .on('click', '.removeButton', function() { 

            kidIndex--;
            $( "#kids" ).attr( "value", kidIndex );
            $('.removeButton').removeClass('show').addClass('hide');
            
            var $row    = $(this).parents('.form-group'),
                $option = $row.find('[name="option[]"]');

            // Remove element containing the option
            $('.removeButton').last().remove();
            $row.remove();

            $('.removeButton').last().removeClass('hide').addClass('show');
            
        })

        .on('click', '#formsubmit', function(e) {
            // Prevent form submission
            e.preventDefault();

            var uidVal = $("#uid").val();
            var fnameVal = $("#firstname").val();
            var lnameVal = $("#lastname").val();
            var emailVal = $("#email").val();
            var numberofadultsVal = $("#numberofadults").val();


            //validation
            $(".error").hide();
            var hasError = false;
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

            if(fnameVal == '') {
                $("#label-first").css('color', '#c00');
                $("#firstname").css('border', 'thick solid #c00');
                hasError = true;
                $(window).scrollTop(0);
            }

            if(lnameVal == '') {
                $("#label-last").css('color', '#c00');
                $("#lastname").css('border', 'thick solid #c00');
                hasError = true;
                $(window).scrollTop(0);
            }

            if(numberofadultsVal == '') {
                $("#label-first").css('color', '#c00');
                $("#numberofadults").css('border', 'thick solid #c00');
                hasError = true;
                $(window).scrollTop(0);
            }            

            if(emailVal == '') {
                $("#label-email").css('color', '#c00')
                $("#email").css('border', 'thick solid #c00');
                hasError = true;
            } else if(!emailReg.test(emailVal)) {   
                $("#label-email").css('color', '#c00')
                $("#email").css('border', 'thick solid #c00');
                hasError = true;
            }


            var kids = $("#kids").val();
            var kiddata = "{";

            for (var i = 1; i <= kids; i++) {

                var kidnameval = $("#childname"+i).val();
                var kidgenderval = $("#childgender"+i).val();
                var kidageval = $("#childage"+i).val();
                var kidallergiesval = $("#childallergies"+i).val();

                kiddata = kiddata + '"childname'+i+'": "'+kidnameval+'", "childgender'+i+'": "'+kidgenderval+'", "childage'+i+'": "'+ kidageval+'", "childallergies'+i+'": "'+ kidallergiesval+'", ';  
            }

            kiddata = kiddata + '"uid": "' + uidVal + '", "fname": "' + fnameVal +'", "lname": "' + lnameVal + '", "email": "' + emailVal + '", "numberofadults": "' + numberofadultsVal + '", "numberofkids": "' + kids + '" }';
            // console.log(kiddata); 

            if(hasError == false) {
                $.post("/sendEmail.php", { 
                    kiddata
                }, function (data) {
                                $("#regform").slideUp("normal", function() {                                        
                                $("#registration-title").hide();                                            
                                $("#regform").before("<h4>Thank You</h4><br /><center><p>Your registration has been received, we'll see you at the party!</p></center><br />");                                          
                            });
                });
            }
        })


});
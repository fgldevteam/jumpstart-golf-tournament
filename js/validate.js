$(document).ready(function() {

    var kidIndex = 0;

    $('#regform')


        .on('click', '#formsubmit', function(e) {
            // Prevent form submission
            e.preventDefault();

            var uidVal = $("#uid").val();
            var teamName = $("#team-name").val();
            var captainFname = $("#captain-fname").val();
            var captainLname = $("#captain-lname").val();
            var fgl_employee_requested = $("input[name='have_fgl_employee']:checked").val();
            var fgl_employee_random_choose  = $("input[name='fgl_employee_random_choose']:checked").val();
            var golfer_fname = [];
            var golfer_lname = [];
            var golfer_handicap = [];
            var golfer_email = [];
            var golfer_phone = [];
            var golfer_shirt_size = [];
            var golfer_shoe_size = [];
            var golfer_clubs = [];

            $(".golfer").each(function(index){
                golfer_fname[index] = $(this).find('input[name="golfer-fname"]').val();
                golfer_lname[index] = $(this).find('input[name="golfer-lname"]').val();
                golfer_handicap[index] = $(this).find('input[name="golfer-handicap"]').val();
                golfer_email[index] = $(this).find('input[name="golfer-email"]').val();
                golfer_phone[index] = $(this).find('input[name="golfer-phone"]').val();
                golfer_shirt_size[index] = $(this).find('.shirt-size').find("option:selected").val();
                golfer_shoe_size[index] = $(this).find('.shoe-size').find("option:selected").val();

            });
            if (fgl_employee_requested == 'yes' && fgl_employee_random_choose == 'yes') {
                delete golfer_fname[3];
                delete golfer_lname[3]; 
                delete golfer_handicap[3]; 
                delete golfer_email[3]; 
                delete golfer_phone[3]; 
                delete golfer_shirt_size[3]; 
                delete golfer_shoe_size[3];
            }

            console.log(uidVal);
            console.log(teamName);
            console.log(captainFname);
            console.log(captainLname);
            console.log(fgl_employee_requested);
            console.log(fgl_employee_random_choose);
            console.log(golfer_fname);
            console.log(golfer_lname);
            console.log(golfer_handicap);
            console.log(golfer_email);
            console.log(golfer_phone);
            console.log(golfer_shirt_size);
            console.log(golfer_shoe_size);
            

            
            //validation
            $(".error").hide();
            var hasError = false;
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

            if(teamName == '') {
                $("#team-name").css('border', '2px solid #c00');
                hasError = true;
                $(window).scrollTop(0);
            }
            if(captainFname == '') {
                $("#captain-fname").css('border', '2px solid #c00');
                hasError = true;
                $(window).scrollTop(0);
            }
            if(captainLname == '') {
                $("#captain-lname").css('border', '2px solid #c00');
                hasError = true;
                $(window).scrollTop(0);
            }

            $(golfer_fname).each(function(i){
                if(golfer_fname[i] == '') {
                    $('input[name="golfer-fname"]:eq('+ i+')').css('border', '2px solid #c00');
                    hasError = true;
                    $(window).scrollTop(0);   
                }
            });
            $(golfer_lname).each(function(i){
                if(golfer_lname[i] == '') {
                    $('input[name="golfer-lname"]:eq('+ i+')').css('border', '2px solid #c00');
                    hasError = true;
                    $(window).scrollTop(0);   
                }
            });
            $(golfer_handicap).each(function(i){
                if(golfer_handicap[i] == '') {
                    $('input[name="golfer-handicap"]:eq('+ i+')').css('border', '2px solid #c00');
                    hasError = true;
                    $(window).scrollTop(0);   
                }
            });
            $(golfer_email).each(function(i){
                if(golfer_email[i] == '' && (!emailReg.test(golfer_email[i])) ) {
                    $('input[name="golfer-email"]:eq('+ i+')').css('border', '2px solid #c00');
                    hasError = true;
                    $(window).scrollTop(0);   
                }
            });
            $(golfer_phone).each(function(i){
                if(golfer_phone[i] == '' ) {
                    $('input[name="golfer-phone"]:eq('+ i+')').css('border', '2px solid #c00');
                    hasError = true;
                    $(window).scrollTop(0);   
                }
            })
            $(golfer_shirt_size).each(function(i){
                
                if( golfer_shirt_size[i] == '' ) {
                    $('div.shirt-size:eq('+ i+')').css('border', '2px solid #c00');
                    hasError = true;
                    $(window).scrollTop(0);   
                }
            })
            $(golfer_shoe_size).each(function(i){
                if(golfer_shoe_size[i] == '' ) {
                    $('div.shoe-size:eq('+ i+')').css('border', '2px solid #c00');
                    hasError = true;
                    $(window).scrollTop(0);   
                }
            })



            if(hasError == false) {
                $(this).hide();

                $.post("sendEmail.php", { 
                    uidVal : uidVal,
                    teamName : teamName,
                    captainFname : captainFname,
                    captainLname : captainLname,
                    fgl_employee_requested : fgl_employee_requested,
                    fgl_employee_random_choose : fgl_employee_random_choose,
                    golfer_fname : golfer_fname,
                    golfer_lname : golfer_lname,
                    golfer_handicap : golfer_handicap,
                    golfer_email : golfer_email,
                    golfer_phone : golfer_phone,
                    golfer_shirt_size : golfer_shirt_size,
                    golfer_shoe_size : golfer_shoe_size
                }, function (data) {
                                console.log(data);
                                $("#regform").slideUp("normal", function() {                                        
                                $("#registration-title").hide();                                            
                                $("#regform").before("<h4>Thank You</h4><br /><center><p>Your registration has been received</p></center><br />"+
                                                        "<center><p> Upon receipt of payment you will receive a letter from Jumpstart "+
                                                        " that will include the charitable number, contribution date, and amount"+
                                                        " paid. This letter will act as the back up for your charitable expense.</p></center>"

                                                    );                                          
                            });
                });
            }
        })


});
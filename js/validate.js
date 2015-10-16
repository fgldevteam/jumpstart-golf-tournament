$(document).ready(function() {
    $('#regform')
        .formValidation({
            // I am validating Bootstrap form
            framework: 'bootstrap',

            // Feedback icons
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },

            // List of fields and their validation rules
            fields: {
                firstname: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required and cannot be empty'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The username must be more than 6 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: 'The username can only consist of alphabetical, number and underscore'
                        }
                    }
                }
            }
        })

        .on('success.form.fv', function(e) {
            // Prevent form submission
            e.preventDefault();

            // Some instances you can use are
            var $form = $(e.target),        // The form instance
                fv    = $(e.target).data('formValidation'); // FormValidation instance

            // Do whatever you want here ...
            alert("works");

            // Use Ajax to submit form data
            // $.ajax({
            //     url: $form.attr('action'),
            //     type: 'POST',
            //     data: $form.serialize(),
            //     success: function(result) {
            //         // ... Process the result ...
            //     }
            // });
            
        });
});
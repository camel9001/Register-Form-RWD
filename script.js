$(document).ready(function () {
  $("#psw-repeat").on('keyup', function(){
    var password = $("#psw").val();
    var confirmPassword = $("#psw-repeat").val();
    if (password != confirmPassword) {
    input.removeClass("invalid").addClass("valid");
    input.next('.announcement2').text("The password and the repeated password must be the same").addClass("bad");
    }
    else
    input.removeClass("valid").addClass("invalid");
    input.next('.announcement2').text("The password are matches").addClass("good");
  });
});
$(document).ready(function() {
	$('#name').on('blur', function() {
		var input = $(this);
		var name_length = input.val().length;
		if(name_length >= 5 && name_length <= 20){
			input.addClass("valid");
			input.next('.announcement').text("The name is correct").removeClass("bad").addClass("good");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('.announcement').text("The name must be more than 4 and less than 16 characters").removeClass("good").addClass("bad");	
		}
	});
	$('#email').on('blur', function() {
		var input = $(this);
		var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var is_email = pattern.test(input.val());
		if(is_email){
			input.removeClass("invalid").addClass("valid");
			input.next('.announcement').text("E-mail is correct").removeClass("bad").addClass("good");
		}
		else{
			input.removeClass("valid").addClass("invalid");
			input.next('.announcement').text("Enter a valid e-mail").removeClass("good").addClass("bad");
		}
	});	
		$('.register_button').click(function(event){
			var name = $('#name');
			var email = $('#email');
			
			if(name.hasClass('valid') && email.hasClass('valid')){
				alert("The form was sent successfully.");	
			}
			else {
				event.preventDefault();
				alert("Please complete all fields");	
			}
		});
});

$("#datepicker").datepicker({
	dateFormat: "mm-dd-yy",
	changeMonth: true,
	changeYear: true,
  
	yearRange: '-115:+10',
	beforeShow: function () {
		setTimeout(function (){
		$('.ui-datepicker').css('z-index', 99999999999999);
  
		}, 0);
	},
  
  }).on('change', function() {
	if($('#datepicker').valid()){
		$('#datepicker').removeClass('error');
	}
  
  });
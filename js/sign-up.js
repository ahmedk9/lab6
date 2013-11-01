//signup.js 
// add your JavaScript code to this file

$(function(){
    //document is now ready for manipulation
       var select = $('select[name="state"]');
        var option;
        var idx;
        var state;
        for (idx = 0; idx < usStates.length; ++idx) {
			    state = usStates[idx];
                option = $(document.createElement('option'));
                option.attr('value', state.abbreviation);
                option.html(state.name);
                select.append(option);
        }


        $('.signup-form').submit(function(){
		    var signupForm = $(this);
		    var addr1Input = signupForm.find('input[name="addr-1"]');
    		var addr1Value = addr1Input.val();
		    if(addr1Value.length > 0) {
		    	var zip1Input = signupForm.find('input[name="zip"]');
    			var zip1Value = zip1Input.val();
    			if(zip1Value.length <= 0){
    				alert('You entered and address, please enter a matching zip code!');
    			}
		    }
		    reqField = signupForm.find('input[name="first-name"]');
		    reqValue = reqField.val().trim();
		    if (0 === reqValue.length) {
		        alert('You must enter a first name!');
		        return false;
    }
          
		});

		$('.cancel-signup').click(function(){
    $('.cancel-signup-modal').modal();
}); //cancel-signup click

$('select[name="refer"]').change(function(){
    var referSelect = $(this);
    var otherInput = $('[name="refer-other"]');
    if ('other' === referSelect.val().toLowerCase()) {
        otherInput.removeAttr('disabled');
        otherInput.show();
        otherInput.focus()
    }
    else {
        otherInput.attr('disabled', true);
        otherInput.hide();
    }
}); //refer change function

}); //on document ready 
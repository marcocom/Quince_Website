function initializeProfiles() {
    var profilePics = $('.profile-pic');

    $(profilePics).each(function (i, e) {

        var $this = $(e);
        $this.click(function () {
            
            // Check if the user is already selected
            if($(this).hasClass('selected')){
                $this.removeClass('selected');
                $('.profile-selector').remove();
				$('.profile-info').animate(
					{
						height:1
					},
					150,
					function(){
						$('.profile-info').remove();
					}
				);

                return;
            }
            
            // Add selected class
            $('.profile-pic').removeClass('selected');
            $this.addClass('selected');

            // Create selection arrow and remove old one
            $('.profile-selector').remove();
            var $profileSelector = $('<img>').attr('src', 'assets/img/profile-selector.png').addClass('profile-selector');
            $(this).append($profileSelector);

            // Create a new profile div

            var $profile = $(this);
            $('.profile-info').remove();

            var $profileInfoDiv = $('<div>').addClass('profile-info');
            //$profileInfoDiv.css('height','0em');

            // Heading
            var $profileHeading = $('<div>').addClass('profile-heading');
            $profileHeading.append($('<h3>').text($profile.data('name')));
            $profileHeading.append($('<h4>').text($profile.data('department')));
            $profileInfoDiv.append($profileHeading);

            // Left side
            var $profileLeft = $('<div>').addClass('profile-section profile-left');
            $profileLeft.append($('<p>').text($profile.data('text')));
            $profileInfoDiv.append($profileLeft);

            // Centre
            var $profileCenter = $('<div>').addClass('profile-section profile-center');









            // Email link as text
//            $profileCenter.append($('<span>').text($profile.data('email')).addClass('email').append('<br>'));

            // Email image with the mailto link
//            console.log("EMAIL:"+$profile.data('email'));
//			$profileCenter.append('<a class="mail-link" href=""><img src="assets/img/profiles/email.php?e=' + $profile.data('email') + '" /></a>');

            // Email image without mailto
            $profileCenter.append('<a class="mail-link" href="'+'mailto:'+$profile.data('email')+'"><img src="assets/img/profiles/email.php?e=' + $profile.data('email') + '" /></a>');





            if($profile.data('facebook').length > 15){
							$profileCenter.append($('<a>').attr('href', $profile.data('facebook')).attr('target','_blank').text('facebook').addClass('facebook')).append('<br>');
			}

            var linkedinVal = $profile.data('linkedin');
//            console.log("LINKEDIN:"+linkedinVal.length);
			if(linkedinVal.length > 0){
				$profileCenter.append($('<a>').attr('href', $profile.data('linkedin')).attr('target','_blank').text('LinkedIn').addClass('linkedin')).append('<br>');
			}
			            
            $profileInfoDiv.append($profileCenter);

            // Right side

			if($profile.data('mobile') != ''){
                var $profileRight = $('<div>').addClass('profile-section profile-right');
	            $profileRight.append($('<span>').text('mobiel:').append('<br>'));
    	        $profileRight.append($('<a>').attr('href', 'tel:' + $profile.data('mobile')).text($profile.data('mobile')));
                $profileInfoDiv.append($profileRight);
			}



            $profileInfoDiv.append('<div>').addClass('clear');

            // Find the correct place to insert the profile info
            var col = i % 5;
            var $insertAfter = $(profilePics[i + 4 - col]);
            if ($insertAfter.length === 0) {
                $insertAfter = profilePics.last();
            }

            // Show the profile
			$profileInfoDiv.height(1);
			
           	$insertAfter.after($profileInfoDiv);
			
			$profileInfoDiv.animate({
                height: '180px'
            }, 500,function(){
				$profileInfoDiv.animate({
	                opacity: '1'
    	        }, 400);			
			});
			
            
        });
    });
}
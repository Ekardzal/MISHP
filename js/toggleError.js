function toggleError(button) {
			if ( button.className === 'eyeClosed' ) {
				// HIDE
				button.className = 'eyeOpen';
				element = document.querySelector('.bannerright');
				element.style.right = '-8%';
				document.getElementById('icon').src = 'images/icon_eye_closed.svg';
			} else {
				// SHOW
				button.className = 'eyeClosed';
				element = document.querySelector('.bannerright');
				element.style.right = '0%';
				document.getElementById('icon').src = 'images/icon_eye_open.svg';
			}
		}
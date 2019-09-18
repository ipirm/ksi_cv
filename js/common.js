$(function() {

	// Birthyear
	let yearFrom = 1950,
		currentYear = new Date().getFullYear(),
		yearPlus = currentYear + 1,
		select = document.querySelector('#js-birthyear');

	for (let i = yearFrom; i < yearPlus; i++) {
		select.innerHTML += '<option vale="' + i + '">' + i + '</option>';
	}

	$('.nav__link').click(function(event) {
		event.preventDefault();

		$('.header').removeClass('header--opened');

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50
		}, 1000)
	});

	// Burger button
	$('.burger-button').click(function(event) {
		event.preventDefault();

		$('.header').toggleClass('header--opened');
	});

	// Custom range
	var castomRange = document.querySelector('.castom-range');
	var castomRangeWidth = castomRange.offsetWidth;
	var castomRangeLine = document.querySelector('.castom-range__line');
	var castomRangeColor = document.querySelector('.castom-range--color');
	var width = 0;
	var lineValue = 0;
	var castomInputResult = "";
	if (castomRangeLine.addEventListener) {
	    castomRangeLine.addEventListener("input", rangeInputHandler , false);
	}
	else if (castomRangeLine.attachEvent) {
	    castomRangeLine.attachEvent('oninput', rangeInputHandler );
	}
	if (castomRangeLine.addEventListener) {
	    castomRangeLine.addEventListener("change", rangeChangeHandler , false);
	}
	else if (castomRangeLine.attachEvent) {
	    castomRangeLine.attachEvent('onchange', rangeChangeHandler );
	}


	// if (screen.width>770) {
	// 	castomRangeLine.value=497;
	// } else {
	// 	castomRangeLine.value=castomRangeWidth*screen.width/1000;;
	// 	console.log(screen.width);
	// 	castomRangeColor.classList.add('castom-range--color-min');
	// }

	rangeInputHandler();
	function rangeInputHandler(){
			width = castomRangeWidth*castomRangeLine.value/1000;
			castomRangeColor.style.width = width+'px';
	}

	function rangeChangeHandler(){
		 lineValue = castomRangeLine.value;
		 	width = castomRangeWidth*castomRangeLine.value/1000;
			if ( lineValue>=1 && lineValue<125 ) {
	 			castomRangeLine.value = 0;
	 			castomRangeColor.style.width = castomRangeWidth*castomRangeLine.value/1000+'px';
				castomInputResult = "";
	 	 } else if ( lineValue>=125 && lineValue<375 ) {
				castomRangeLine.value = 242;
				castomRangeColor.style.width = castomRangeWidth*castomRangeLine.value/1000+'px';
				castomInputResult = "";
		 } else  if ( lineValue>=375 && lineValue<750 ) {
		 			castomRangeLine.value = 497;
		 			castomRangeColor.style.width = castomRangeWidth*castomRangeLine.value/1000+'px';
					castomInputResult = "";
		 	} else  if ( lineValue>=750 && lineValue<=1000 ) {
			 		castomRangeLine.value = 1000;
			 		castomRangeColor.style.width = castomRangeWidth*castomRangeLine.value/1000+'px';
					castomInputResult = "";
			 	 }
	}
	/*--------------------------------------------------------------*/

	checkCastomInput();

	function checkCastomInput(){
		var castomInputs = document.querySelectorAll('.castom_input .personal-info__input');
		for ( var i=0; i<castomInputs.length; i++ ){
				if (!(castomInputs[i].value == "")){
					castomInputs[i].parentElement.classList.add('castom_input--have-content');
				} else{
							if (castomInputs[i].parentElement.classList.contains('castom_input--have-content')){
								castomInputs[i].parentElement.classList.remove('castom_input--have-content');
							}
				}
		}
	}

});

const phraseList =
["Hit the sack",
"Make a long story short",
"Go to sleep",
"Doing a good job",
"Good luck",
"I have no idea",
"You can say that again",
"Speak of the devil"];

let phrase = "";
let lives = 5;
let phraseLength = "";


$('.btn__reset, #restart-btn-win, #restart-btn-lose').click(() => {
	$('#overlay, .win, .loss').css('display','none');
	$('#banner, #phrase, #qwerty, #scoreboard').css('display', 'initial');
	let phraseSplit = getPhrase();
	for(let i = 0; i < phrase.length; i++) {
		if(phraseSplit[i] == " ") {
		$('#phrase ul').append('<li class="space"></li>');
	}else {
		$('#phrase ul').append('<li class="letter ' + phraseSplit[i].toLowerCase() + '">'+ phraseSplit[i] + '</li>');
		}
	}

	phraseLength = phrase.replace(/\s/g, "").split('').length;
});


let getPhrase = () => {
	phrase = phraseList[Math.floor((Math.random() * 4) + 1)];
	let phraseSplit = phrase.split('');
	return phraseSplit;
}

$('#qwerty button').click(function(event) {
	if (lives == 1) {
		$('.lose').css('display','flex');
		restartGame();
	} else {
	$(this).attr('disabled', 'true');
	$(this).addClass('chosen');
	checkLetter($(this).text());
	}
});



let checkLetter = (letter) => {
	let splitPhrase = phrase.replace(/ /g, '').split('');
	let selector = '.' + letter;
	if ($(selector).length != 0) {
		$(selector).addClass('show');
		} else {
			let tries = $('.tries img');
			let arrayNum = lives-1;
			$(tries[arrayNum]).attr('src','images/lostHeart.png');
			lives = lives - 1;

	}

	if (phraseLength == $('.show').length) {
	$('.win').css('display','flex');
	restartGame();
	}
}

let restartGame = () => {
	lives = 5
	$('.tries img').attr('src','images/liveHeart.png');
	$('.letter, .space').remove();
	$('.chosen').removeClass('chosen');
	$('#qwerty button').removeAttr('disabled');


}
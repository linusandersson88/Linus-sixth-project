const phraseList =
["that teabag was actually better the second time around",
"the landscapers are coming over today to trim the bush",
"yes my favorite animal is definitely the beaver",
"a pearl necklace would look really nice on you",
"i wonder what happens to nuts in space"];

let phrase = "";


$('.btn__reset').click(() => {
	$('#overlay').css('display','none');
	$('#banner, #phrase, #qwerty, #scoreboard').css('display', 'initial');
	let phraseSplit = getPhrase();
	for(let i = 0; i < phrase.length; i++) {
		if(phraseSplit[i] == " ") {
		$('#phrase ul').append('<li class="space"></li>');
	}else {
		$('#phrase ul').append('<li class="letter"></li>');
		}
	}
});

let getPhrase = () => {
	phrase = phraseList[ Math.floor((Math.random() * 5) + 1)];
	let phraseSplit = phrase.split('');
	return phraseSplit;
}

$('#qwerty button').click(function(event) {

	

});
let lyricsArray = [];
let artist = '';
let song = '';

document.addEventListener('DOMContentLoaded', event => {
	console.log('DOM fully loaded and parsed');

	document.getElementById('form').addEventListener('submit', e => {
		e.preventDefault();
		song = document.getElementById('song').value;
		artist = document.getElementById('artist').value;
		fetchLyrics(song, artist);
	});
});

function renderLyrics(lyricsArray) {
	let lyrics = document.getElementById('lyrics');
	lyrics.innerText = '';
	lyrics.innerText = lyricsArray;
}

function fetchLyrics() {
	fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
		.then(resp => resp.json())
		.then(function(json) {
			lyricsArray = json.lyrics;
			renderLyrics(lyricsArray);
		});
}

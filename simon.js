var seq, player, round;
var r = document.getElementById("red"),b = document.getElementById("blue"),g = document.getElementById("green"),y = document.getElementById("yellow");
var colors = [r,b,g,y];

document.getElementById("start").addEventListener("click", newGame);

function newGame() {
	seq = [];
	player = [];
	round = 0;
	newRound();
}

function newRound() {
	document.getElementById("rd").innerHTML = "Round "+round+"";
	round++;
	seq.push(colors[Math.floor(Math.random()*4)]);
}

/*
for (var i = 0; i < seq.length; i++) {
	console.log(seq[i].indexOf(""));
}
*/

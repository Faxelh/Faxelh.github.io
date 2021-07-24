
setInterval(() => {
	let Dates = new Date();
	let Heure = Dates.getHours();
	let Minute = Dates.getMinutes();
	let Second = Dates.getSeconds();
	let Hour = 30 * Heure + Minute / 2;
	let Minutes = 6 * Minute;
	let Seconds = 6 * Second ;
	let H = document.getElementById("hour"),
		 M = document.getElementById("min"),
		 S = document.getElementById("sec");
	H.style.transform= `rotate(${Hour}deg)`;
	M.style.transform= `rotate(${Minutes}deg)`;
	S.style.transform= `rotate(${Seconds}deg)`;
},1000);

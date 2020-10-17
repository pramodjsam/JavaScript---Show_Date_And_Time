const show=setInterval(function(){
	const date= new Date();
	const todayDate= date.getDate();
	const months=['January','February','March','April','May','June','July','August','September','October','November','December'];
	const thisMonth= months[date.getMonth()];
	let hours= date.getHours();
	const minutes=date.getMinutes();
	const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	const thisDay= days[date.getDay()]

	function addZero(num){
		return (parseInt(num,10) < 10 ? "0" : "" ) + num
	}

	let AmPm= hours >= 12 ? 'PM' : "AM";
	hours = hours % 12;

	document.querySelector("#hours").innerHTML=addZero(hours);
	document.querySelector("#minutes").innerHTML=addZero(minutes);
	document.querySelector("#days").innerHTML=thisDay;
	document.querySelector("#months").innerHTML=thisMonth;
	document.querySelector("#today").innerHTML=todayDate
	document.querySelector('#ampm').innerHTML= AmPm
},1000)
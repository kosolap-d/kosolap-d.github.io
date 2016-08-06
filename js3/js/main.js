var time= document.querySelector('.time');
function timeFunc(){
	var now = new Date();
	time.innerHTML= now.getHours()+':'+ now.getMinutes();
}
timeFunc();
setInterval(timeFunc, 60000);

	var btn=document.querySelector('.btn-green');
	btn.addEventListener('click', startFunc);
	var lapBtn=document.querySelector('.btn-grey');
	
	

	//JS Timer
	var idTimer;
	var timerEl =document.querySelector('.timer');
	var timerMinutesEl=timerEl.querySelector('.minutes');
	var timerSecondsEl=timerEl.querySelector('.seconds');
	var timerMilSecondsEl=timerEl.querySelector('.milSeconds');
	var milSecondTimer=1;
	var SecondTimer=1;
	var minutesTimer=1;

	//JS Lap
	var lapList=document.querySelector('.lap_list');

	var idLap;
	var lapEl =document.querySelector('.lap');
	var lapMinutesEl=lapEl.querySelector('.minutes');
	var lapSecondsEl=lapEl.querySelector('.seconds');
	var lapMilSecondsEl=lapEl.querySelector('.milSeconds');
	var milSecondlap=1;
	var Secondlap=1;
	var minuteslap=1;
	var countLap=1;



function startFunc() {
	btn.className= 'btn btn-red';
	btn.innerHTML = 'Стоп';
	btn.removeEventListener('click', startFunc);
	btn.addEventListener('click', pauseFunc);

	lapBtn.className= 'btn btn-black';
	lapBtn.addEventListener('click', lapFunc);

	//start timer
	idTimer=setInterval(timerStart, 10);
	idLap=setInterval(lapStart, 10);
}

function pauseFunc() {
	btn.className= 'btn btn-green';
	btn.innerHTML = 'Старт';
	btn.removeEventListener('click', pauseFunc);
	btn.addEventListener('click', continueFunc);

	lapBtn.innerHTML ='Сброс';
	lapBtn.removeEventListener('click', lapFunc);
	lapBtn.addEventListener('click', resetFunc);

	//clear timer
	clearInterval(idTimer);
	clearInterval(idLap);
}

function continueFunc() {
	btn.className= 'btn btn-red';
	btn.innerHTML='Стоп';
	btn.removeEventListener('click', continueFunc);
	btn.addEventListener('click', pauseFunc);

	lapBtn.innerHTML ='Круг';
	lapBtn.removeEventListener('click', resetFunc);
	lapBtn.addEventListener('click', lapFunc);

	//start timer
	idTimer=setInterval(timerStart, 10);
	idLap=setInterval(lapStart, 10);
}
function resetFunc() {
	btn.removeEventListener('click', continueFunc);
	btn.addEventListener('click', startFunc);

	lapBtn.className ='btn btn-grey';
	lapBtn.innerHTML = 'Круг';
	lapBtn.removeEventListener('click', resetFunc);

	//reset timer 
	minutesTimer=SecondTimer=milSecondTimer=1;
	timerMinutesEl.innerHTML='00:';
	timerSecondsEl.innerHTML='00,';
	timerMilSecondsEl.innerHTML='00';
	// reset alp
	lapList.innerHTML='';
	minuteslap=Secondlap=milSecondlap=1;
	lapMinutesEl.innerHTML='00:';
	lapSecondsEl.innerHTML='00,';
	lapMilSecondsEl.innerHTML='00';
	countLap=1;

}


function timerStart() {
	if(milSecondTimer<10) timerMilSecondsEl.innerHTML='0'+milSecondTimer++;
	else timerMilSecondsEl.innerHTML=milSecondTimer++;
	if (milSecondTimer==100){
		milSecondTimer=0;
		if(SecondTimer<10) timerSecondsEl.innerHTML='0'+ SecondTimer++ + ',';
		else if (SecondTimer<60){
			timerSecondsEl.innerHTML=SecondTimer++ + ',';
		}
		else if (SecondTimer==60) {
			SecondTimer=0;
			timerSecondsEl.innerHTML='0'+ SecondTimer++ + ',';
			if(minutesTimer<9) timerMinutesEl.innerHTML='0'+ ++minutesTimer + ':';
			else timerMinutesEl.innerHTML= ++minutesTimer + ':';
		}
	}
}

function lapStart() {
	if(milSecondlap<10) lapMilSecondsEl.innerHTML='0'+milSecondlap++;
	else lapMilSecondsEl.innerHTML=milSecondlap++;
	if (milSecondlap==100){
		milSecondlap=0;
		if(Secondlap<10) lapSecondsEl.innerHTML='0'+ Secondlap++ + ',';
		else if (Secondlap<60){
			lapSecondsEl.innerHTML=Secondlap++ + ',';
		}
		else if (Secondlap==60) {
			Secondlap=0;
			lapSecondsEl.innerHTML='0'+ Secondlap++ + ',';
			if(minuteslap<9) lapMinutesEl.innerHTML='0'+ ++minuteslap + ':';
			else lapMinutesEl.innerHTML= ++minuteslap + ':';
		}
	}
}

function lapFunc() {
	var li=document.createElement('li');

	var lapNumber =document.createElement('span');
	lapNumber.className='lap-count';
	lapNumber.innerHTML='Круг '+countLap++;
	var lapTime =document.createElement('span');
	lapTime.className='lap-time';
	lapTime.innerHTML= lapMinutesEl.innerHTML+lapSecondsEl.innerHTML+lapMilSecondsEl.innerHTML;
	minuteslap=Secondlap=milSecondlap=1;
	lapMinutesEl.innerHTML='00:';
	lapSecondsEl.innerHTML='00,';
	lapMilSecondsEl.innerHTML='00';

	li.appendChild(lapNumber);
	li.appendChild(lapTime);

	lapList.insertBefore(li, lapList.firstChild);
}
// var container = document.createElement("div");
// container.className = 'container';
// document.body.appendChild(container);


// var hour=document.createElement("span");
// var minutes=document.createElement("span");
// var second=document.createElement("span");

// var sec=0;
// var min=0;
// var hr=0;

// hour.innerHTML=minutes.innerHTML='00:';
// second.innerHTML='00';

// container.appendChild(hour);
// container.appendChild(minutes);
// container.appendChild(second);

// setInterval(addSecond, 100);

// function addSecond() {
// 	sec=parseInt(second.innerHTML);
// 	sec++;
// 	if(sec>=10&&sec<60) {
// 		second.innerHTML=sec;
// 	}
// 	else if(sec==60){
// 		second.innerHTML='00';
// 		sec=0;

// 		// min=parseInt(minutes.innerHTML);
// 		alert(minutes.innerHTML);
// 		min++;
// 			if(min>=10&&min<60)
// 			{
// 				alert(minutes.innerHTML);
// 				minutes.innerHTML='0'+min+':';
// 			}
// 	}
// 	else {
// 		second.innerHTML='0'+sec;
// 		min++;
// 			if(min>=10&&min<60)
// 			{
// 				alert(minutes.innerHTML);
// 				minutes.innerHTML='0'+min+':';
// 			}
// 	}
// }
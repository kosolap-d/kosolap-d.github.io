
function mainJs1()
{
	var num1;
	var num2;
	while(true){
		num1=parseFloat(prompt("Введите число"));
		if(!isNaN(num1)){
			break;
		}
		alert("Некоректное число")
		
	}
	while(true){
		var num2=parseFloat(prompt("Введите степень"));
		if(!isNaN(num2)){
			break;
		}
		alert("Некоректное число")
		
	}
	pow(num1, num2);
}

function pow(a,b) {
	var c=1;
	if(b<0){
		b=0-b;
		for (var i = 0; i <b ; i++) {
			c*=a;
		}
		c=1/c;
	}
	else {
		for (var i = 0; i <b ; i++) {
			c*=a;
		}
	}
	alert(a+' ^ '+b+' = '+c);
}

function mainJs2() {
	var count;
	var arr = [];
	var name;
	while(true) {
		count=parseFloat(prompt("Введите количество ячеек в массиве"));
		if(!isNaN(count)){
			break;
		}
		alert("Некоректное число")
	}
	
	for (var i = 0; i <count; i++) {
		var str=prompt("Введите Имя");
		arr[i]=str;
	}
	name=prompt("Введите ваше Имя");

	for(var j=0; j<arr.length;j++){
		if(arr[j]== name){
			alert(name+", вы успешно вошли!");
			return;
		}
	}
	alert("Пользователь с таким именем не найден!");
}
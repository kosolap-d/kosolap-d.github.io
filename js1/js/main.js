
function main()
{

	for (var i = 0; i <1 ; i++) {
		
		pow();
	}
}

function js1() {
	while(true){
		var a=parseFloat(prompt("Введите число"));
		if(!isNaN(a)){
			break;
		}
		alert("Некоректное число")
		
	}
	while(true){
		var b=parseFloat(prompt("Введите степень"));
		if(!isNaN(a)){
			break;
		}
		alert("Некоректное число")
		
	}
	
	var c=1;
	for (var i = 0; i <b ; i++) {
		c*=a;
	}
	alert(c);
}

function js2() {
	while(true) {
		var count=parseFloat(prompt("Введите количество ячеек в массиве"));
		if(!isNaN(count)){
			break;
		}
		alert("Некоректное число")
	}
	var arr = ['a'];
	for (var i = 0; i <count; i++) {
		var str=prompt("Введите Имя");
		arr[i]=str;
	}
	var name=prompt("Введите ваше Имя");

	for(var j=0; j<arr.length;j++){
		if(arr[j]== name){
			alert(name+", вы успешно вошли!");
			return;
		}
	}
	alert("Пользователь с таким именем не найден!");
}
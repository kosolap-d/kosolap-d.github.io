var obj = {
	container: document.createElement('div'),
	button: document.createElement('button'),
	countForm: 1,
	countCheckbox: 1,

	addContainer: function() {
		document.body.appendChild(this.container);
		this.container.className = "container";

		var h1 =document.createElement('h1');
		h1.innerHTML='Тест по программированию';
		this.container.appendChild(h1);
	},

	addForm: function(strArg) {
		var str = this.countForm+'. ';
		str+= strArg || ("Вопрос №"+this.countForm+' <i>сгенерированно</i>');
		form=document.createElement('form')
		this.container.appendChild(form);
		var h2 = document.createElement('h2');
		h2.innerHTML = str;
		form.appendChild(h2);

		if(arguments.length<2)
		{
			for(var i=0; i<3;i++)
			{
				var containerCheckbox = document.createElement('p');
				form.appendChild(containerCheckbox);

				var checkBox = document.createElement('input');
				checkBox.setAttribute('type', 'checkbox');
				checkBox.setAttribute('id', ('check'+this.countCheckbox));

				var label = document.createElement('label');
				label.setAttribute('for', ('check'+this.countCheckbox++));
				label.innerHTML= 'Вариант ответа № '+ (i+1);

				containerCheckbox.appendChild(checkBox);
				containerCheckbox.appendChild(label);
			}
		}
		else {
			for(var i=1; i<arguments.length;i++)
			{
				var containerCheckbox = document.createElement('p');
				form.appendChild(containerCheckbox);

				var checkBox = document.createElement('input');
				checkBox.setAttribute('type', 'checkbox');
				checkBox.setAttribute('id', ('check'+this.countCheckbox));

				var label = document.createElement('label');
				label.setAttribute('for', ('check'+this.countCheckbox++));
				label.innerHTML= arguments[i];

				containerCheckbox.appendChild(checkBox);
				containerCheckbox.appendChild(label);
			}
		}
		this.countForm++;
	},

	addButton: function(str){
		str= str || "Проверить мои результаты";
		this.button.innerHTML= str;
		this.button.className = "btn";
		this.container.appendChild(this.button);
	}
};

obj.addContainer();
obj.addForm();
obj.addForm('Где живет волк?', "а. В Лесу", "б. В Море", "в. В Городе");
obj.addForm('Ты программист?', "Да", "Нет");
obj.addButton();
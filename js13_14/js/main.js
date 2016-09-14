(function() {
    'use strict;'
    var containerQuestions;
    var userAnswer = [];
    var modal = document.querySelector('.modal');
    var modalContent = document.querySelector('.modal-content');
    var dataObject = {
        questions: [
            { id: 'id1', question: 'Укажите неправильный способ обратиться к полю объекта созданного выше:', answers: ['a. obj[“prop1”];', "b. obj.prop1.", 'c. obj[prop1];'], right: 2 },
            { id: 'id2', question: 'Выберите правильно созданный объект', answers: ['a. var obj = [prop1: 1, prop2: 2];', "b. var obj = {prop1: 1; prop2: 2};", 'd. var obj = {prop1: 1, prop2: 2};'], right: 2 },
            { id: 'id3', question: 'Какое будет выведено значение? <br> var x = 5 <br> alert( x++ )', answers: ['4', '5', '6', 'Другое.'], right: 0 },
        ]
    };

    if (localStorage.clickcount) {

        containerQuestions = JSON.parse(localStorage.getItem("1"));

        var results = document.getElementById("results");
        results.innerHTML = tmpl("item_tmpl", containerQuestions);

        document.querySelector('.btn').onclick = result;;

    } else {

        var questionJSON = JSON.stringify(dataObject);
        localStorage.setItem("1", questionJSON);

        localStorage.clickcount = true;
        location.href = location.href;
    }

    function result() {
        for (var i = 0; i < containerQuestions.questions.length; i++) {
            for (var j = 0; j < containerQuestions.questions[i].answers.length; j++) {
                if (document.querySelector('#' + containerQuestions.questions[i].id + i + j).checked) {
                    if (containerQuestions.questions[i].right === j) userAnswer[i] = true;
                    else userAnswer[i] = false;
                    break;
                } else {
                    userAnswer[i] = false;
                }
            }
        }
        showModal();
    }

    function showModal() {
        var wrong = true;
        modalContent.innerHTML = '<h1>Вы правильно ответили</h1>';
        for (var i = 0; i < containerQuestions.questions.length; i++) {
            if (userAnswer[i]) {
                modalContent.innerHTML += '<p>' + containerQuestions.questions[i].question + '<br><b>' + containerQuestions.questions[i].answers[containerQuestions.questions[i].right] + '</b></p>'
                wrong = false;
            }
        }
        if (wrong) modalContent.innerHTML = '<h1>Вы правильно ответили на 0 вопросов!</h1>';
        modalContent.innerHTML += '<button class="btn modal-btn">Пройти тест заново</button>';
        modal.style.display = 'block';

        document.querySelector('.modal-btn').onclick = hideModal;
    }

    function hideModal() {
        location.href = location.href;
    }

})();

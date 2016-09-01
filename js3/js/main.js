$(function(window, document) {
    /*---------Вывод реального времени---------*/
    var time = document.querySelector('.time');

    function timeFunc() {
        var now = new Date();
        time.innerHTML = now.getHours() + ':' + now.getMinutes();
    }
    timeFunc();
    setInterval(timeFunc, 60000);
    /*----------------------------------------*/



    /*------------Логика Секундомера----------*/
    var btn = document.querySelector('.btn-green');
    btn.addEventListener('click', startBtnFunc);
    var lapBtn = document.querySelector('.btn-grey');

    var idIntervalSpotwatch;
    var spotWatchBlock = document.querySelector('.timer');
    var spotWatch = {
        minSpan: spotWatchBlock.querySelector('.minutes'),
        secSpan: spotWatchBlock.querySelector('.seconds'),
        milSpan: spotWatchBlock.querySelector('.milSeconds'),
        milSecond: 1,
        second: 1,
        minutes: 1,
        reset: function() {
            this.milSecond = this.second = this.minutes = 1;
            this.minSpan.innerHTML = '00:';
            this.secSpan.innerHTML = '00,';
            this.milSpan.innerHTML = '00';
        }
    };

    var idIntervalLap;
    var lapBlock = document.querySelector('.lap');
    var lapSpotwatch = {
        lapList: document.querySelector('.lap_list'),
        minSpan: lapBlock.querySelector('.minutes'),
        secSpan: lapBlock.querySelector('.seconds'),
        milSpan: lapBlock.querySelector('.milSeconds'),
        milSecond: 1,
        second: 1,
        minutes: 1,
        countLap: 1,
        reset: function() {
            this.milSecond = this.second = this.minutes = 1;
            this.minSpan.innerHTML = '00:';
            this.secSpan.innerHTML = '00,';
            this.milSpan.innerHTML = '00';
        },

        resetAll: function() {
        	this.reset();
            this.countLap = 1;
            this.lapList.innerHTML = '';
        }
    };



    function startBtnFunc() {
        btn.className = 'btn btn-red';
        btn.innerHTML = 'Стоп';
        btn.removeEventListener('click', startBtnFunc);
        btn.addEventListener('click', pauseBtnFunc);

        lapBtn.className = 'btn btn-black';
        lapBtn.addEventListener('click', addLap);

        //start timer
        idIntervalSpotwatch = setInterval(timerStart, 10);
        idIntervalLap = setInterval(lapStart, 10);
    }

    function pauseBtnFunc() {
        btn.className = 'btn btn-green';
        btn.innerHTML = 'Старт';
        btn.removeEventListener('click', pauseBtnFunc);
        btn.addEventListener('click', continueBtnFunc);

        lapBtn.innerHTML = 'Сброс';
        lapBtn.removeEventListener('click', addLap);
        lapBtn.addEventListener('click', resetBtnFunc);

        //clear timer
        clearInterval(idIntervalSpotwatch);
        clearInterval(idIntervalLap);
    }

    function continueBtnFunc() {
        btn.className = 'btn btn-red';
        btn.innerHTML = 'Стоп';
        btn.removeEventListener('click', continueBtnFunc);
        btn.addEventListener('click', pauseBtnFunc);

        lapBtn.innerHTML = 'Круг';
        lapBtn.removeEventListener('click', resetBtnFunc);
        lapBtn.addEventListener('click', addLap);

        //start timer
        idIntervalSpotwatch = setInterval(timerStart, 10);
        idIntervalLap = setInterval(lapStart, 10);
    }

    function resetBtnFunc() {
        btn.removeEventListener('click', continueBtnFunc);
        btn.addEventListener('click', startBtnFunc);

        lapBtn.className = 'btn btn-grey';
        lapBtn.innerHTML = 'Круг';
        lapBtn.removeEventListener('click', resetBtnFunc);

        spotWatch.reset();
        lapSpotwatch.resetAll();
    }

    function timerStart() {
        if (spotWatch.milSecond < 10) spotWatch.milSpan.innerHTML = '0' + spotWatch.milSecond++;
        else spotWatch.milSpan.innerHTML = spotWatch.milSecond++;
        if (spotWatch.milSecond == 100) {
            spotWatch.milSecond = 0;
            if (spotWatch.second < 10) spotWatch.secSpan.innerHTML = '0' + spotWatch.second++ + ',';
            else if (spotWatch.second < 60) {
                spotWatch.secSpan.innerHTML = spotWatch.second++ + ',';
            } else if (spotWatch.second == 60) {
                spotWatch.second = 0;
                spotWatch.secSpan.innerHTML = '0' + spotWatch.second++ + ',';
                if (spotWatch.minutes < 9) spotWatch.minSpan.innerHTML = '0' + ++spotWatch.minutes + ':';
                else spotWatch.minSpan.innerHTML = ++spotWatch.minutes + ':';
            }
        }
    }

    function lapStart() {
        if (lapSpotwatch.milSecond < 10) lapSpotwatch.milSpan.innerHTML = '0' + lapSpotwatch.milSecond++;
        else lapSpotwatch.milSpan.innerHTML = lapSpotwatch.milSecond++;
        if (lapSpotwatch.milSecond == 100) {
            lapSpotwatch.milSecond = 0;
            if (lapSpotwatch.second < 10) lapSpotwatch.secSpan.innerHTML = '0' + lapSpotwatch.second++ + ',';
            else if (lapSpotwatch.second < 60) {
                lapSpotwatch.secSpan.innerHTML = lapSpotwatch.second++ + ',';
            } else if (lapSpotwatch.second == 60) {
                lapSpotwatch.second = 0;
                lapSpotwatch.secSpan.innerHTML = '0' + lapSpotwatch.second++ + ',';
                if (lapSpotwatch.minutes < 9) lapSpotwatch.minSpan.innerHTML = '0' + ++lapSpotwatch.minutes + ':';
                else lapSpotwatch.minSpan.innerHTML = ++lapSpotwatch.minutes + ':';
            }
        }
    }

    function addLap() {
        var li = document.createElement('li');

        var lapNumberSpan = document.createElement('span');
        lapNumberSpan.className = 'lap-count';
        lapNumberSpan.innerHTML = 'Круг ' + lapSpotwatch.countLap++;
        var lapTime = document.createElement('span');
        lapTime.className = 'lap-time';
        lapTime.innerHTML = lapSpotwatch.minSpan.innerHTML + lapSpotwatch.secSpan.innerHTML + lapSpotwatch.milSpan.innerHTML;
        lapSpotwatch.reset();

        li.appendChild(lapNumberSpan);
        li.appendChild(lapTime);

        lapSpotwatch.lapList.insertBefore(li, lapSpotwatch.lapList.firstChild);
    }
    /*----------------------------------------*/

}(window, document));


/*----------Логика Табов------------------*/

var $lastActiveNav = $('#stopwatch-nav');
$lastActiveNav.toggleClass(' nav--active');
var $lastDisplay = $("#displayStopwatch");
var $titleName = $('.titleName')[0];

function navClick(e) {
    $lastActiveNav.toggleClass();
    $lastActiveNav = $(e);
    if ($lastActiveNav[0].id == 'alarm-nav') {
        $lastDisplay.css('display', 'none');
        $lastDisplay = $('#displayAlarm');
        $lastDisplay.css('display', 'block');
        $titleName.innerHTML = 'Будильник';
    } else if ($lastActiveNav[0].id == 'world-nav') {
        $lastDisplay.css('display', 'none');
        $lastDisplay = $('#displayWorldTime');
        $lastDisplay.css('display', 'block');
        $titleName.innerHTML = 'Мировые часы';
    } else if ($lastActiveNav[0].id == 'stopwatch-nav') {
        $lastDisplay.css('display', 'none');
        $lastDisplay = $('#displayStopwatch');
        $lastDisplay.css('display', 'block');
        $titleName.innerHTML = 'Секундомер';
    } else if ($lastActiveNav[0].id == 'timer-nav') {
        $lastDisplay.css('display', 'none');
        $lastDisplay = $('#displayTimer');
        $lastDisplay.css('display', 'block');
        $titleName.innerHTML = 'Таймер';
    }

    $lastActiveNav.toggleClass(' nav--active');
}
/*----------------------------------------*/



/*------Логика Выпадающих Подсказок-----*/
var $labelFN = $('.firstname');
$labelFN.hover(
    function() {
        $('.firstname-label').css('height', '14px');
    },
    function() {
        $('.firstname-label').css('height', '0');
    }
);

var $labelLN = $('.lastname');
$labelLN.hover(
    function() {
        $('.lastname-label').css('height', '14px');
    },
    function() {
        $('.lastname-label').css('height', '0');
    }
);

var $hidModClass = $('.hiddenModalClass');
$hidModClass.click(hiddenModal);

function hiddenModal() {
    var log = $('.login').css('display', 'none');
    $('.iphone').css('display', 'block');
}
/*----------------------------------------*/

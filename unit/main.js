var dynamicTabBar = window.dynamicTabBar = new mdc.tabs.MDCTabBar(document.querySelector('#dynamic-tab-bar'));
var dots = document.querySelector('.dots');
var panels = document.querySelector('.panels');

dynamicTabBar.tabs.forEach(function(tab) {
  tab.preventDefaultOnClick = true;
});

function updateDot(index) {
  var activeDot = dots.querySelector('.dot.active');
  if (activeDot) {
    activeDot.classList.remove('active');
  }
  var newActiveDot = dots.querySelector('.dot:nth-child(' + (index + 1) + ')');
  if (newActiveDot) {
    newActiveDot.classList.add('active');
  }
}

function updatePanel(index) {
  var activePanel = panels.querySelector('.panel.active');
  if (activePanel) {
    activePanel.classList.remove('active');
  }
  var newActivePanel = panels.querySelector('.panel:nth-child(' + (index + 1) + ')');
  if (newActivePanel) {
    newActivePanel.classList.add('active');
  }
}

dynamicTabBar.listen('MDCTabBar:change', function ({detail: tabs}) {
  var nthChildIndex = tabs.activeTabIndex;

  updatePanel(nthChildIndex);
  updateDot(nthChildIndex);
});


var typed = new Typed('#typed', {
  strings: ["lalka", "peer-2-peer.^500 27/7.^1000 without teacher.^1000<br>are you <b>BORN<b class='yellow'>2</b>CODE?</b>"],
  typeSpeed: 40
});

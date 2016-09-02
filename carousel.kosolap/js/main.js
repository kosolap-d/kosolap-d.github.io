function left(){
	var container = document.querySelector('.carousel');
	var left = document.querySelector('.left');
	var center = document.querySelector('.center');
	var right = document.querySelector('.right');

	center.className='left';
	right.className='center';
	left.className='right';
	left.remove();
	container.appendChild(left);
}

function right(){
	var container = document.querySelector('.carousel');
	var left = document.querySelector('.left');
	var center = document.querySelector('.center');
	var right = document.querySelector('.right');

	center.className='right';
	left.className='center';
	right.className='left';
	right.remove();
	container.appendChild(right);
}
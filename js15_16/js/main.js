function GoogleCallback(jqueryObj, data) {
	console.log('data', data);
}

$.ajax({
    url: 'https://ajax.googleapis.com/ajax/services/search/web?v=1.0&rsz=large&q=' + 'Test' + '&callback=GoogleCallback&context=?',
    dataType: 'jsonp'
});

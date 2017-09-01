$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

$('.modal').click(function(){
  $('.stopVideo').each(function(){
  	console.log("lalka");
    this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
  });
});
$('#navbarNav').on('show.bs.collapse', function(){
  $('.topCasaFina-banner').css('transform', 'translate(-50%, 10%)')
})

$('#navbarNav').on('hide.bs.collapse', function(){
  $('.topCasaFina-banner').css('transform', 'translate(-50%, -50%)')
})
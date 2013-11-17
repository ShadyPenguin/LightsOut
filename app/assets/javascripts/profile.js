profileBoard = {
  clickMe : function() {
    $('.tile').on('click', function() {
      $.get('/games/'+this.innerText, function(response) {
        $('body').html(response);
      })
    })
  }
}
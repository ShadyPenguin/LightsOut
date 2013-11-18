profileBoard = {
  clickMe : function() {
    $('.tile').on('click', function() {
      gameId = this.innerText;
      $.get('/games/'+gameId, function(response) {
        $('body').html(response);
      })
    })
  }
}
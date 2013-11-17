profileBoard = {
  clickMe : function() {
    $('.tile').on('click', function() {
      gameId = this.innerText;
      $.get('/games/'+this.innerText, function(response) {
        $('body').html(response);
      })
    })
  }
}
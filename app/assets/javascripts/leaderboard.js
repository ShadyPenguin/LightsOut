leaderBoard = {
  clickMe : function() {
    $('.tile').on('click', function() {
      gameId = this.innerText;
      $.get('/level/'+this.innerText, function(response) {
        $('body').html(response);
      })
    })
  }
}
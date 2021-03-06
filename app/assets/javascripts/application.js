// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {
  pageLoad();
});

$(document).ajaxComplete(function() {
  pageLoad();
});

function pageLoad() {
  if($('#game-box').length>0){
    loadBoard();
    var $tiles = $('#game-box').children();
    gameBoard.startGame($tiles);

    $('#reset').on('click', function() {
      $.get('/games/'+gameId, function(response) {
        $('body').html(response);
      })
    });
  };

  if($('#profile').length>0){
    profileBoard.clickMe();
  };

  if($('#leaderboard').length>0){
    leaderBoard.clickMe();
  }
}
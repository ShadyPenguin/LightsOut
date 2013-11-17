function loadBoard() {
  gameBoard = {
    tilesArray : [],
   
    startGame : function($el) {
      this.$tiles = $el;
      this.size = this.$tiles.length;
      this.moves = 0

      this.addIndex();
      this.generate();
      this.clickMe();
      this.finished();
    },

    finished : function() {
      var off = 0;
      $(this.tilesArray).each(function() {
        $(this).each(function() {
          if(this.status==="off") {
            off++;
          }
        });
      });

      if(off===25){
        $.post('/games/'+gameId, {"moves" : gameBoard.moves}, function(response){
          $('body').html(response);
        })
      }
    },

    clickMe : function() {
      $('.tile').on('click', function() {
        var row = $(this).data('index')[0];
        var col = $(this).data('index')[1];
        gameBoard.moves++;
        gameBoard.tilesArray[row][col].toggleTiles(row,col);
        gameBoard.render();
        gameBoard.finished();
      })
    },
   
    addIndex : function() {
      this.$tiles.each(function(index) {
        $(this).data('index',[Math.floor(index/5),index%5]);
      });
    },

    generate : function() {
      var row = [];
      this.$tiles.each(function() {
        if(row.length < 5) {
          row.push(new Tile($(this)));
        } else {
          gameBoard.tilesArray.push(row);
          row = [];
          row.push(new Tile($(this)));
        }
      });
      this.tilesArray.push(row);
      this.render();
    },

    // Refactor this to generate map once
    // new function would act recursively to render
    // tiles that are clicked, and the ones touching it
    render : function() {
      $(this.tilesArray).each(function() {
        $(this).each(function() {
          $(this.domElement).removeClass();
          $(this.domElement).addClass("tile "+this.status); 
        })
      })
    }
  }
}
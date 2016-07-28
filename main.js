"use strict"


//obj {over : trueval: position}
let moveState = false
let movesPosiible = []
let $pieceSelected
let moveId = ""
var white = "#FFFFFF";
var black = "#000000";
var blackPiece = "<img class='piece blackPiece' src='https://lh5.ggpht.com/K3F-iniKTYk-ZZZI6I2UWe64TqBQrjDEtlqTqu87d6xk7rJvX6ZMcXWa1NSRl7TSAw=w300' />"
var redPiece ="<img class='piece redPiece' src='http://checkers.io/img/red-piece.png' />"
$(function() {
  $('.game').hide()

  //Start button 
  $('#start').on('click', function() {
    $('.game').show();
    chessBoard(8)
    $('.welcome').hide();
  });


  //Restart button
  $('#restart').on('click', function() {

  });

  
  // $("button").click(function() {
  //   var text = $("input").val()
  //   console.log(text)
  //   if (text !== "" || parseInt(text).isNaN()) {
  //     chessBoard(parseInt(text))
  //   }
  // });
  
});



function chessBoard(cols) {
     $('tbody').empty()
    var rows = new Array(cols + 1).join("<td></td>")
    var rest = new Array(cols + 1).join("<tr> " + rows + " </tr>")
    $('tbody').html(rest)
    $('tr:nth-child(odd) td:nth-child(odd)').addClass("black")
    $('tr:nth-child(odd) td:nth-child(even)').addClass('white')
    $('tr:nth-child(even) td:nth-child(even)').addClass('black')
    $('tr:nth-child(even) td:nth-child(odd)').addClass('white')
  
    $('td:nth-child(odd)').addClass('ood')
    $('td:nth-child(even)').addClass('even')
    $('tr:nth-child(odd)').addClass('odd')
    $('tr:nth-child(even)').addClass('even')
    var black = Math.floor((cols + 1) / 2)
    var red = cols + 1 - black
    // $("tr:nth-child(-n + " + black + ") .white").append(blackPiece)
    // $("tr:nth-child(n + " + red + ") .white").append(redPiece)
    let $white = $('.white')
    
    for (let i = 0; i < 12; i++ ) {
      $white[i].innerHTML = blackPiece
    }

    for (let i = 20; i < $white.length; i++) {
      $white[i].innerHTML = redPiece
    }

    for (let i = 0; i < $white.length; i++) {
    
      if($($white[i]).children().length) {
        let $temp =  $($white[i]).children()
        $($temp).attr('id', i + 1)
        //$($white[i]).children[0].attr('id', i+1)
      }
      $($white[i]).attr('id', i+1)
    }
    $(".piece").css({
      "width": "25px",
      "height": "25px"
    });

    $($white).on('click', function(event) {
      let isRight = false
      // console.log('array of ids', movesPosiible)
      // console.log('id selected ', $($pieceSelected).attr("id"))
      if (moveState && movesPosiible.length) {
        for (var i = 0; i < movesPosiible.length; i++) {
          if (parseInt($(this).attr('id')) === movesPosiible[i]
            &&  $(this).attr("id") !== $($pieceSelected).attr('id'))  {
            isRight = true
            $($pieceSelected).detach();
            $($pieceSelected).attr("id", $(this).attr("id"))
            $(this).append($pieceSelected)
            $(".white").css('background-color', 'white');
            movesPosiible = []
            $($pieceSelected).css({"border": "",
              "border-color": ""});
            $pieceSelected = '';
          }
        }
        
        if (!isRight &&  $(this).attr("id") !== $($pieceSelected).attr('id')) 
          alert("Incorrect movement!")
        
        
      }
    });

    $('.piece').on('click', function(event) {

    //console.log("clientY", event.clientY)
    if ($pieceSelected) {
      $($pieceSelected).css({"border": "",
      "border-color": ""});
      movesPosiible = []
      $(".white").css('background-color', 'white');
    }
    $(this).css({"border": "solid",
      "border-color": "yellow"});
    moveState = true
    $pieceSelected = $(this)

    let pieceID = parseInt($($pieceSelected).attr('id'))
    
    movesPosiible.push(pieceID)
        if($($pieceSelected).hasClass('redPiece')) {
          if ($($pieceSelected).parent().hasClass('even')) {
            if ($('#' + (pieceID - 3)).attr('class') !== "white even"
              && $('#' + (pieceID - 3)).children().length === 0) {
              $('#' + (pieceID - 3)).css('background-color', 'yellow');
              movesPosiible.push(pieceID - 3)
            } else {
              if ($($('#' + (pieceID - 3)).children()[0]).hasClass('blackPiece')) {
                console.log(" wrong blackPiece ", pieceID)
                if ($('#' + (pieceID - 7)).children().length === 0) {
                  $('#' + (pieceID - 7)).css('background-color', 'yellow');
                  movesPosiible.push(pieceID - 7)
                }
              }
            }
            
            //secnond half
            if ($('#' + (pieceID - 4)).attr('class') !== "white even"
              && $('#' + (pieceID - 4)).children().length === 0) {
              $('#' + (pieceID - 4)).css('background-color', 'yellow');
              movesPosiible.push(pieceID - 4)
            } else {
              if ($($('#' + (pieceID - 4)).children()[0]).hasClass('blackPiece')) {
                console.log(" wrong 2 blackPiece ", pieceID)
                if ($('#' + (pieceID - 9)).children().length === 0) {
                  $('#' + (pieceID - 9)).css('background-color', 'yellow');
                  movesPosiible.push(pieceID - 9)
                }
              }
            }
          } else {

            if ($('#' + (pieceID - 5)).attr('class') !== "white ood"
              && $('#' + (pieceID - 5)).children().length === 0) {
              $('#' + (pieceID - 5)).css('background-color', 'yellow');
              movesPosiible.push(pieceID - 5)
            } else {
              if (($($('#' + (pieceID - 5)).children()[0])).hasClass('blackPiece')) {
                console.log("-7 blackPiece ", pieceID)
                if ($('#' + (pieceID - 9)).children().length === 0) {
                  $('#' + (pieceID - 9)).css('background-color', 'yellow');
                  movesPosiible.push(pieceID - 9)
                }
              }
            }

            //second half
            if ($('#' + (pieceID - 4)).attr('class') !== 'white ood'
              && $('#' + (pieceID - 4)).children().length === 0) {
              $('#' + (pieceID - 4)).css('background-color', 'yellow');
              movesPosiible.push(pieceID - 4)
            } else {
              if ($($('#' + (pieceID - 4)).children()[0]).hasClass('blackPiece')) {
                console.log(" -4 blackPiece ", pieceID)
                if ($('#' + (pieceID - 7)).children().length === 0) {
                  $('#' + (pieceID - 7)).css('background-color', 'yellow');
                  movesPosiible.push(pieceID - 7)
                }
              }
            }
          }
          //black pieces
        } else {
          if ($($pieceSelected).parent().hasClass('even')) {
            if ($('#' + (pieceID + 5)).attr('class') !== "white even"
              && $('#' + (pieceID + 5)).children().length === 0) {
              $('#' + (pieceID + 5)).css('background-color', 'yellow');
              movesPosiible.push(pieceID + 5)
            } else {
              if ($($('#' + (pieceID + 5)).children()[0]).hasClass('redPiece')) {
                console.log("redPiece")
                if ($('#' + (pieceID + 9)).children().length === 0) {
                  $('#' + (pieceID + 9)).css('background-color', 'yellow');
                  movesPosiible.push(pieceID + 9)
                }
              }
            }
            if ($('#' + (pieceID + 4)).attr('class') !== "white even"
              && $('#' + (pieceID + 4)).children().length === 0) {
              $('#' + (pieceID + 4)).css('background-color', 'yellow');
              movesPosiible.push(pieceID + 4)
            } else {
              if ($($('#' + (pieceID + 4)).children()[0]).hasClass('redPiece')) {
                console.log(" wrong redPiece ",  $('#' + (pieceID + 7)).children.length
                , " ", pieceID + 7)
                if ($('#' + (pieceID + 7)).children().length === 0) {
                  $('#' + (pieceID + 7)).css('background-color', 'yellow');
                  movesPosiible.push(pieceID + 7)
                }
              }
            }
          } else {
            if ($('#' + (pieceID + 3)).attr('class') !== "white ood"
              && $('#' + (pieceID + 3)).children().length === 0) {
              $('#' + (pieceID + 3)).css('background-color', 'yellow');
              movesPosiible.push(pieceID + 3)
            }  else {
              if ($($('#' + (pieceID + 3)).children()[0]).hasClass('redPiece')) {
                console.log("SECOND WRONG redPiece ",  $('#' + (pieceID + 7)).children
                , " ", pieceID + 7)
                if ($('#' + (pieceID + 7)).children().length === 0) {
                  $('#' + (pieceID + 7)).css('background-color', 'yellow');
                  movesPosiible.push(pieceID + 7)
                }
              }
            }
            if ($('#' + (pieceID + 4)).attr('class') !== "white ood"
              && $('#' + (pieceID + 4)).children().length === 0) {
              $('#' + (pieceID + 4)).css('background-color', 'yellow');
              movesPosiible.push(pieceID + 4)
            } else {
              if ($($('#' + (pieceID + 4)).children()[0]).hasClass('redPiece')) {
                console.log("redPiece")
                if ($('#' + (pieceID + 9)).children().length === 0) {
                  $('#' + (pieceID + 9)).css('background-color', 'yellow');
                  movesPosiible.push(pieceID + 9)
                }
              }
            }
          }
        }
        //console.log($(this).attr('id'))

    //let $btnDeatach =  $(this).detach();
    //console.log($btnDeatach)
    });
}
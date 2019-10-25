$(document).ready(function () {

  $('#survey-form').submit(function(event) {
    event.preventDefault();

    var firstAnswer = parseInt($("#question-1").val());
    var secondAnswer = parseInt($("#question-2").val());
    var thirdAnswer = parseInt($("#question-3").val());
    var fourthAnswer = parseInt($("#question-4").val());
    var fifthAnswer = parseInt($("#question-5").val());

    let jsCounter = 0;
    let rubyCounter = 0;
    let cCounter = 0;

// Question One

    if (firstAnswer === 1){
      jsCounter += 1;
    }
    else if (firstAnswer === 2){
      rubyCounter += 1;
    }
    else {
      cCounter += 1;
    }

// Question Two

    if (secondAnswer === 1){
      jsCounter += 1;
    }
    else if (secondAnswer === 2){
      rubyCounter += 1;
    }
    else {
      cCounter += 1;
    }

// Third Answer

    if (thirdAnswer === 1){
      jsCounter += 1;
    }
    else if (thirdAnswer === 2){
      rubyCounter += 1;
    }
    else {
      cCounter += 1;
    }

// Fourth Answer

    if (fourthAnswer === 1){
      jsCounter += 1;
    }
    else if (fourthAnswer === 2){
      rubyCounter += 1;
    }
    else {
      cCounter += 1;
    }

// Fifth Answer

    if (fifthAnswer === 1){
      jsCounter += 1;
    }
    else if (fifthAnswer === 2){
      rubyCounter += 1;
    }
    else {
      cCounter += 1;
    }

// Based on counters, call elements with jQuery, insert text, and display paragraph.

    if (jsCounter >= 3){
      $(".tie-result-para").hide();
      $("#single-result").empty().append("Javascript");
      $(".result-para").show();
    }

    if (jsCounter === 2){
      if (rubyCounter === 2){
        $("#tie-second-result").empty().append("Ruby");
      }
      else {
        $("#tie-second-result").text("C#")
      }
      $(".result-para").hide();
      $("#tie-first-result").empty().append("Javascript");
      $(".tie-result-para").show();
    }

    if (rubyCounter >= 3){
      $(".tie-result-para").hide();
      $("#single-result").empty().append("Ruby");
      $(".result-para").show();
    }

    if (rubyCounter === 2 && cCounter === 2){
      $(".result-para").hide();
      $("#tie-first-result").empty().append("Ruby");
      $("#tie-second-result").empty().append("C#");
      $(".tie-result-para").show();
    }

    if (cCounter >= 3){
      $(".tie-result-para").hide();
      $("#single-result").empty().append("C#");
      $(".result-para").show();
    }

    jsCounter = 0;
    rubyCounter = 0;
    cCounter = 0;

  });
});

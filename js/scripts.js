$(document).ready(function () {

  $('#survey-form').submit(function(event) {
    event.preventDefault();

    var firstAnswer = parseInt($("#question-1").val());
    var secondAnswer = parseInt($("#question-2").val());
    var thirdAnswer = parseInt($("#question-3").val());
    var fourthAnswer = parseInt($("#question-4").val());
    var fifthAnswer = parseInt($("#question-5").val());

    let jsCounter = 0;
    let cssCounter = 0;
    let cCounter = 0;

    if (firstAnswer === 1){
      jsCounter += 1;
    }
    else if (firstAnswer === 2){
      cssCounter += 1;
    }
    else {
      cCounter += 1;
    }

    if (secondAnswer === 1){
      jsCounter += 1;
    }
    else if (secondAnswer === 2){
      cssCounter += 1;
    }
    else {
      cCounter += 1;
    }

    if (thirdAnswer === 1){
      jsCounter += 1;
    }
    else if (thirdAnswer === 2){
      cssCounter += 1;
    }
    else {
      cCounter += 1;
    }

    if (fourthAnswer === 1){
      jsCounter += 1;
    }
    else if (fourthAnswer === 2){
      cssCounter += 1;
    }
    else {
      cCounter += 1;
    }

    if (fifthAnswer === 1){
      jsCounter += 1;
    }
    else if (fifthAnswer === 2){
      cssCounter += 1;
    }
    else {
      cCounter += 1;
    }

    if (jsCounter >= 3){
      $(".tie-result-para").hide();
      $("#single-result").empty().append("Javascript");
      $(".result-para").show();
    }

    if (jsCounter === 2){
      if (cssCounter === 2){
        $("#tie-second-result").empty().append("CSS");
      }
      else {
        $("#tie-second-result").text("C#")
      }
      $(".result-para").hide();
      $("#tie-first-result").empty().append("Javascript");
      $(".tie-result-para").show();
    }

    if (cssCounter >= 3){
      $(".tie-result-para").hide();
      $("#single-result").empty().append("CSS");
      $(".result-para").show();
    }

    if (cssCounter === 2 && cCounter === 2){
      $(".result-para").hide();
      $("#tie-first-result").empty().append("CSS");
      $("#tie-second-result").empty().append("C#");
      $(".tie-result-para").show();
    }

    if (cCounter >= 3){
      $(".tie-result-para").hide();
      $("#single-result").empty().append("C#");
      $(".result-para").show();
    }

    jsCounter = 0;
    cssCounter = 0;
    cCounter = 0;

  });
});

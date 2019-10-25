$(document).ready(function () {

  let jsCounter = 0;
  let rubyCounter = 0;
  let cCounter = 0;

  $('#survey-form').submit(function(event) {
    event.preventDefault();

    var firstAnswer = parseInt($("#question-1").val());
    var secondAnswer = parseInt($("#question-2").val());
    var thirdAnswer = parseInt($("#question-3").val());
    var fourthAnswer = parseInt($("#question-4").val());
    var fifthAnswer = parseInt($("#question-5").val());



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


    function highest(...args) {
      return Math.max(...args);
    }

    var winningLanguage = highest(jsCounter, rubyCounter, cCounter);
    alert(winningLanguage + " means that JS is the best suited language.");




    jsCounter = 0;



  });         // This is the form submit closing bracket.

});

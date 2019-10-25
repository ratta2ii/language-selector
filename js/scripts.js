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

    if (firstAnswer === 1){
      jsCounter += 1;
    }
    if (jsCounter >= 1) {
        alert(jsCounter);
    }




  })


});

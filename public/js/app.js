
$(document).ready(function(){
  var start = $('#start');
  var minutes = $('#minutes');
  var seconds = $('#seconds');
  var breakBtn = $('#break');
  // console.log(start);;
  // console.log(minutes);
  // console.log(seconds);
  start.on('click',startCountdown);
  breakBtn.on('click',takeABreak);


  function takeABreak(){
    // alert("take a break");
    minutes.text('05');
    seconds.text('00');
    startCountdown();
  }

  function startCountdown(){
    var countdown = setInterval(function(){
      var secondsVal = +seconds.text();//the plus sign makes this behave like a number
      var minutesVal = +minutes.text();
      if (secondsVal === 0 && minutesVal === 0) {
        console.log('end');
        breakBtn.removeClass('disabled');
        breakBtn.removeAttr('disabled');
        clearInterval(countdown);
        return;
      }
      if(secondsVal === 0){
        minutes.text(minutesVal-1);
        seconds.text(59);
      } else{
        if(secondsVal <= 10){
          seconds.text("0" + (secondsVal-1));
        } else{
          seconds.text(secondsVal - 1);
        }
      }

      // console.log(typeof +secondsVal);
    }, 1000)
  }



});

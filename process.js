var current_step = 0;
var total_step = 0;

var init = function() {  
  $('.process-steps').removeClass('active');
  current_step = 1;
  total_step = 6;
  set_step(1);
};

var set_step = function(step) {
  current_step = step;
  for (var i = step + 1; i <= total_step; i++) {
    $('#schedule-step-' + i).removeClass('active');
  };
  $('#schedule-step-' + step).addClass('active');
};

var next_step = function() {
  complete_step(current_step);
  set_step(++current_step);
};

var complete_step = function(step) {
  var d = $('#schedule-step-' + step + ' .step_button_div')
  var target = $('#schedule-step-' + (step + 1));
  $('html,body').animate({
    scrollTop: target.offset().top - 115
  }, 500);
  d.html('');
};

$(document).ready(function(){
  init();
});

// Smooth Scorlling
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 78
        }, 500);
        return false;
      }
    }
  });
});
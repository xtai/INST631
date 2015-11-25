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

var show_time = function () {
  $('.process-schedule-time').show();
}

var choose_time = function () {
  $('.time_step_button').removeClass('disabled btn-secondary-outline').addClass('btn-danger-outline');
  $('.time_step_button').attr('onclick', 'next_step()');
}

var to_step_2 = function () {
  if ($('#descTextarea').val() == '') {
    $('#descTextareaDiv').removeClass('has-success').addClass('has-warning');
    $('#descTextarea').removeClass('form-control-success').addClass('form-control-warning');
  } else {
    $('#descTextareaDiv').removeClass('has-warning').addClass('has-success');
    $('#descTextarea').removeClass('form-control-warning').addClass('form-control-success');
    next_step();
  }
}

var to_step_6 = function () {
  if ($('#Email').val() == '') {
    $('#EmailDiv').removeClass('has-success').addClass('has-warning');
    $('#Email').removeClass('form-control-success').addClass('form-control-warning');
  } else {
    $('#EmailDiv').removeClass('has-warning').addClass('has-success');
    $('#Email').removeClass('form-control-warning').addClass('form-control-success');
  }
  if ($('#Phone').val() == '') {
    $('#PhoneDiv').removeClass('has-success').addClass('has-warning');
    $('#Phone').removeClass('form-control-success').addClass('form-control-warning');
  } else {
    $('#PhoneDiv').removeClass('has-warning').addClass('has-success');
    $('#Phone').removeClass('form-control-warning').addClass('form-control-success');
  }
  if ($('#Email').val() != '' && $('#Phone').val() != '') {
    next_step();
  } else {
    $('#EmailAndPhone').html('<small class=\"text-muted\">Email and phone number are required.</small>');
  }
}

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
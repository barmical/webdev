function missing (exercise) {
  var first = -1
  for (var i = 0; i <= exercise.length; i++) {
    if (exercise.indexOf(i) === -1) {
      first = i;
    }
  }
  return first;
}

var exercise = [15, 7, 14, 2, 19, 1, 16, 14, 8, 6, 13, 3, 9, 17, 4, 12, 18, 5, 11]

console.log(missing(exercise));

$(document).ready(function() {

  $('#submitopinion').on('click', function() {
    alert('Thank You For Opinion!')

    $('[data-trigger="dropdown"]').on('mouseenter', function() {
    var submenu = $(this).parent().find('.profile-submenu')
    submenu.addClass('active')

      $(.profile-menu).on('mouseleave', function() {
      submenu.removeClass('active');
      });
    });
  });
});

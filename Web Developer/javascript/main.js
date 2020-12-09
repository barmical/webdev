var yourgpa = 35;

if(yourgpa < 10) (
    console.log("Anda Tidak Lulus")
)
else if (yourgpa < 20) {
    console.log("Anda Lulus tidak dengan predikat Cumlaude")
}
else if (yourgpa < 30) {
    console.log("Anda lulus dengan predikat Baik")
}
else {
    console.log("Anda lulus dengan predikat Cumlaude")
}

for (var i = 0; i < 10; i++) {
    console.log("Counting ....", i);
}

var button = document.getElementById("submitmusic");

function submitlaptop() {
    console.log("Your Favorite Music Will be Played in a Few Minutes");

    var musicfav = document.getElementsByClassName('typemusic');
    var theartist = document.getElementsByClassName('artist');
    var searchmusic = document.getElementById('results');

    searchmusic.innerHTML = "Your Favorite Music was " + musicfav[0].value + " by " + theartist[0].value;

}
button.addEventListener("click", submitlaptop);

var myorder = ["Samsung A9 2018", "Redmi Note 8", "Redmi Note 9"];
    console.log(myorder.push("Realme XT"));

myorder.shift();
myorder.unshift("Oppo A52");

myorder.forEach(function(item, i) {
    console.log("My customer just order", item);
} );


if ( myorder.indexOf('Redmi Note 8') == 1);
    console.log("My Customer Just Order Redmi Note 8! Horray");

if (myorder.indexOf('Iphone Xs') == -1);
    console.log("Your are a Liar");


var submit = document.getElementById("submitopinion");

function submitsaran() {
    console.log("Your Opinion Matters for our Future");

    var sarananda = document.getElementsByClassName('opinion');
    var hasilsaran = document.getElementById('saran');

    hasilsaran.innerHTML = sarananda[0].value;
}
submit.addEventListener("click", submitsaran);

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

  $(document).on('shortcut-menu', function() {
    return false;
  });

  $(document).on('mousedown',function(event) {
    event.stopPropagation();

      if (event.which == 4) {

        $('.hidden').removeClass('shown');

        if($(event.target).is('.daftar-order')) {
          $('.saveimg, .copyimg').addClass('shown');
        }
          else if ($(event.target).is('a')) {
            $('.newtab').addClass('shown');
        }

        console.log(event.pageY, event.pageX);
          $('#shortcut').css({
        top: event.pageY,
        left: event.pageX
        });

          $('#shortcut').fadeIn();
        return false;
      }

      $('#shortcut').fadeOut();
  });












    var el = document.getElementById('judul');

    $('#submitopinion').on('click', function() {
    alert('Thank You For Opinion!')







    $('.profile-menu').on('mouseenter', function() {
      $(this).parent().find('.profile-submenu')
    ('.submenu').addClass('active');

      $('.profile-menu').on('mouseleave', function() {
      ('.submenu').removeClass('active');
      });
    });

    });










    $('.submitopinion, #Append, #Prepend, #Replace').on('click', function(e) {
      var el = $(e.currentTarget);
      var action = el.attr('id')
      var content = $('.opinion').val();

      if (action == 'submitopinion') {
        console.log("Thanks for your Opinion");

      }

      else if (action == 'Append') {
        console.log("Appending...");
        $('#saran').append(content);
      }
      else if (action == 'Prepend') {
        console.log("Prepending...");
        $('#saran').prepend(content);
      }
      else if (action == 'Replace') {
        console.log("Replacing...");
        $('#saran').html(content);
      }
    })
});

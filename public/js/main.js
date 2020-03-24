$('.navbar').on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$(document).ready(function() {
    $('.progress .progress-bar').css("width",
              function() {
                  return $(this).attr("aria-valuenow") + "%";
              }
      )
  });

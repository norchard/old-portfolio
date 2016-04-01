function myFunction() {
    document.getElementById("nav").classList.toggle("responsive");
}


function sendMessage() {
    var xhr = $.ajax({
        url: "https://formspree.io/norchard24@gmail.com", 
        method: "POST",
        data: {
            name: document.forms["contact"]["name"].value,
            replyto: document.forms["contact"]["replyto"].value,
            message: document.forms["contact"]["message"].value
        },
        dataType: "json"
    });

    xhr.done(function() {
        $(".thanks").css('display', 'block');
        $("#contact").css('display', 'none');
    })

    xhr.fail(function() {
        $(".error").css('display', 'block');
    })

}



function stickyFunction(){
if (document.documentElement.clientWidth > 970) {
    $(document).ready(function() {
        $('.section').trigger('detach.ScrollToFixed');
        var sections = $('.section');
        sections.each(function(i) {

            var section = $(sections[i]);
            var next = sections[i + 1];

            section.scrollToFixed({
                marginTop: $('.header').outerHeight(true) + 10,
                limit: function() {
                    var limit = 0;
                    if (next) {
                        limit = $(next).offset().top - $(this).outerHeight(true) - 10;}
                    // } else {
                    //     limit = $('.footer').offset().top - $(this).outerHeight(true) - 10;
                    // }
                    return limit;
                },
                zIndex: 999
            });
        });
    });
}

else {
    $('.section').trigger('detach.ScrollToFixed');
}
}

stickyFunction();

window.addEventListener("resize", stickyFunction);




$(window).scroll(function() {
    if ($(this).scrollTop() > 500 ){
        $("#back").css('visibility', 'visible');
        document.getElementById("backimage").src="/img/top.png";
    }

    else {
     $("#back").css('visibility', 'hidden');

 }
     
});



$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
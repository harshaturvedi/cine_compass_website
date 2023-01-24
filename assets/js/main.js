$(window).on('load', function () {
    setTimeout(removeLoader, 1000);
});
function removeLoader() {
    $(".preloader").fadeOut(500, function () {
        $(".preloader").remove();
    });
}

function toggleNav() {
    document.getElementById("nav").classList.toggle("show");
}

$('.digit-group').find('input').each(function () {
    $(this).attr('maxlength', 1);
    $(this).on('keyup', function (e) {
        var parent = $($(this).parent());

        if (e.keyCode === 8 || e.keyCode === 37) {
            var prev = parent.find('input#' + $(this).data('previous'));

            if (prev.length) {
                $(prev).select();
            }
        } else if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
            var next = parent.find('input#' + $(this).data('next'));

            if (next.length) {
                $(next).select();
            } else {
                if (parent.data('autosubmit')) {
                    parent.submit();
                }
            }
        }
    });
});


var i = 9;
function showTimerP() {
    document.getElementById("timer-p").innerHTML = "Resend OTP in <span id=\"timer\"></span>";
    let timer = document.getElementById("timer");
    timer.innerHTML = " 10s";

    function myLoop() {
        setTimeout(function () {
            timer.innerHTML = " " + i + "s";

            i--;
            if (i >= -1) {
                myLoop();
            }
            if (i == -2) {
                timer.innerHTML = "<a href=\"./otp.html\">Resend OTP</a>";
            }
        }, 1000)
    }

    myLoop();
}
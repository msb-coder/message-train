$(document).ready(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $("#navbarsect nav").css({ "background-color": "#012d2c" });
            $("#navbarsect nav .logochange").attr("src", "img/logonew.png");
        } else {
            $("#navbarsect nav").css({ "background-color": "#003334" });
            $("#navbarsect nav .logochange").attr("src", "img/logo.png");
        }
    });
});
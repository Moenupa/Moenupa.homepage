function m() {
    $('link[href^=bootstrap-dark.css]').attr('href', '/css/bootstrap.css');
    $('html').attr("data-theme", "light");
}

function n() {
    $('link[href^=bootstrap.css]').attr('href', '/css/bootstrap-dark.css');
    $('html').attr("data-theme", "dark");
}

$("#themeSwitch").click(function () {
    if ($('html').attr("data-theme") == "dark") { m(); }
    else { n(); }
});

if (window.matchMedia('(prefers-color-theme: light)').matches) { m(); }
else { n(); }
function m() {
    $('link#boostrap').attr('href', '/Moenupa.homepage/static/css/bootstrap.css');
    $('html').attr("data-theme", "light");
}

function n() {
    $('link#boostrap').attr("href", "/Moenupa.homepage/static/css/bootstrap-dark.css");
    $('html').attr("data-theme", "dark");
}

if (window.matchMedia('(prefers-color-theme: light)').matches) { m(); }
else { n(); }

$("#themeSwitch").click(function () {
    if ($('html').attr("data-theme") == "dark") { m(); }
    else { n(); }
});
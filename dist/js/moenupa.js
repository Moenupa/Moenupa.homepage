$('#theme-switch').on("click", () => {
    console.log("switched!!!!!!");
    $(".alert-light, .alert-dark").each((i, ele) => {$(ele).toggleClass('alert-light alert-dark');});
    $(".bg-light, .bg-dark").each((i, ele) => {$(ele).toggleClass('bg-light bg-dark');});
    $(".border-light, .border-dark").each((i, ele) => {$(ele).toggleClass('border-light border-dark');});
    $(".btn-light, .btn-dark").each((i, ele) => {$(ele).toggleClass('btn-light btn-dark');});
    $(".navbar-light .navbar-dark").each((i, ele) => {$(ele).toggleClass('navbar-light navbar-dark');});
    $(".table-light, .table-dark").each((i, ele) => {$(ele).toggleClass('table-light table-dark');});
    $(".text-light, .text-dark").each((i, ele) => { $(ele).toggleClass('text-light text-dark'); });
    $(".thead-light, .thead-dark").each((i, ele) => {$(ele).toggleClass('thead-light thead-dark');});
    $(".list-group-item-light, .list-group-item-dark").each((i, ele) => {$(ele).toggleClass('list-group-item-light list-group-item-dark');});
    if ($("html").attr("data-theme") == "dark") $("html").attr("data-theme", "light"); else $("html").attr("data-theme", "dark");
}); if (window.matchMedia("(prefers-color-theme: dark)").matches) $("html").attr("data-theme", "dark"); else $("html").attr("data-theme", "light");

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
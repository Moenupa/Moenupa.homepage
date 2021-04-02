// An implementation to switch theme in bootstrap
// e.g. text-dark -> text-light

$("#theme-switch").on("click", () => {
	console.log("switched!!!!!!");
	$(".mdi-moon-waning-crescent, .mdi-weather-sunny").each((i, ele) => {
		$(ele).toggleClass("mdi-moon-waning-crescent mdi-weather-sunny");
	});
	$(".alert-light, .alert-dark").each((i, ele) => {
		$(ele).toggleClass("alert-light alert-dark");
	});
	$(".bg-light, .bg-dark").each((i, ele) => {
		$(ele).toggleClass("bg-light bg-dark");
	});
	$(".border-light, .border-dark").each((i, ele) => {
		$(ele).toggleClass("border-light border-dark");
	});
	$(".btn-light, .btn-dark").each((i, ele) => {
		$(ele).toggleClass("btn-light btn-dark");
	});
	$(".navbar-light, .navbar-dark").each((i, ele) => {
		$(ele).toggleClass("navbar-light navbar-dark");
	});
	$(".table-light, .table-dark").each((i, ele) => {
		$(ele).toggleClass("table-light table-dark");
	});
	$(".text-light, .text-dark").each((i, ele) => {
		$(ele).toggleClass("text-light text-dark");
	});
	$(".thead-light, .thead-dark").each((i, ele) => {
		$(ele).toggleClass("thead-light thead-dark");
	});
	$(".list-group-item-light, .list-group-item-dark").each((i, ele) => {
		$(ele).toggleClass("list-group-item-light list-group-item-dark");
	});
	if ($("html").attr("data-theme") == "dark")
		$("html").attr("data-theme", "light");
	else $("html").attr("data-theme", "dark");
});

if (window.matchMedia("(prefers-color-theme: dark)").matches)
	$("html").attr("data-theme", "dark");
else $("html").attr("data-theme", "light");

if ($("html").attr("data-theme") == "dark") {
	$(".mdi-weather-sunny").each((i, ele) => {
		$(ele).toggleClass("mdi-moon-waning-crescent mdi-weather-sunny");
	});
	$(".alert-light").each((i, ele) => {
		$(ele).toggleClass("alert-light alert-dark");
	});
	$(".bg-light").each((i, ele) => {
		$(ele).toggleClass("bg-light bg-dark");
	});
	$(".border-light").each((i, ele) => {
		$(ele).toggleClass("border-light border-dark");
	});
	$(".btn-light").each((i, ele) => {
		$(ele).toggleClass("btn-light btn-dark");
	});
	$(".navbar-light").each((i, ele) => {
		$(ele).toggleClass("navbar-light navbar-dark");
	});
	$(".table-light").each((i, ele) => {
		$(ele).toggleClass("table-light table-dark");
	});
	$(".text-dark").each((i, ele) => {
		$(ele).toggleClass("text-light text-dark");
	});
	$(".thead-light").each((i, ele) => {
		$(ele).toggleClass("thead-light thead-dark");
	});
	$(".list-group-item-light").each((i, ele) => {
		$(ele).toggleClass("list-group-item-light list-group-item-dark");
	});
} 
else {
	$(".mdi-moon-waning-crescent").each((i, ele) => {
		$(ele).toggleClass("mdi-moon-waning-crescent mdi-weather-sunny");
	});
	$(".alert-dark").each((i, ele) => {
		$(ele).toggleClass("alert-light alert-dark");
	});
	$(".bg-dark").each((i, ele) => {
		$(ele).toggleClass("bg-light bg-dark");
	});
	$(".border-dark").each((i, ele) => {
		$(ele).toggleClass("border-light border-dark");
	});
	$(".btn-dark").each((i, ele) => {
		$(ele).toggleClass("btn-light btn-dark");
	});
	$(".navbar-dark").each((i, ele) => {
		$(ele).toggleClass("navbar-light navbar-dark");
	});
	$(".table-dark").each((i, ele) => {
		$(ele).toggleClass("table-light table-dark");
	});
	$(".text-light").each((i, ele) => {
		$(ele).toggleClass("text-light text-dark");
	});
	$(".thead-dark").each((i, ele) => {
		$(ele).toggleClass("thead-light thead-dark");
	});
	$(".list-group-item-dark").each((i, ele) => {
		$(ele).toggleClass("list-group-item-light list-group-item-dark");
	});
}

$(function () {
	$('[data-toggle="tooltip"]').tooltip();
});

$("#return-top").addClass("collapse");

window.onscroll = function () {
	if ($(window).scrollTop() > 20) $("#return-top").addClass("show");
	else $("#return-top").removeClass("show");
};

$("#return-top").on("click", () => {
	$(window).scrollTop(0);
});

$(document).ready(function()
{

$('#topbar').toggle(
function()
{
$('#wrap').animate({"top": "3%"}, 1500);
$("#content").animate({"height": "625px"}, 1500);

$("p.enter").fadeOut(function() {
$(this).text("close").fadeIn();
});

$('#left').fadeIn(1000);
$('#middle').fadeIn(200);
$('#right').fadeIn(200);
},

function ()
{
$('#wrap').animate({"top": "50%"}, 1500);
$("#content").animate({"height": "0px"}, 1500);

$("p.enter").fadeOut(function() {
$(this).text("open").fadeIn(1000);
});
$('#left').fadeOut(1000);
$('#middle').fadeOut(200);
$('#right').fadeOut(200);
	
});
});
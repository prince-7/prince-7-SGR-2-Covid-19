window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("scroll_bar").style.top = "0";
  } else {
    document.getElementById("scroll_bar").style.top = "-80px";
  }
}

function openNav() {
  document.getElementById("SideBar").style.left = "0px";
 }

function closeNav() {
  document.getElementById("SideBar").style.left = "-500px";
}





var input = document.getElementById("country");
input.addEventListener("keyup", function(event) 
{
  if (event.keyCode === 13) 
  {
  	event.preventDefault();
  	show();
  }
});

function show() 
{
	var x = document.getElementById("myDIV");
	x.style.display = "grid";
	getData();
}


function getData()
{
	var country=document.getElementById("country").value;
	url = 'https://www.worldometers.info/coronavirus/country/'+country;
	document.getElementById("my-iframe").src = url;

}


function hide()
{
	var x = document.getElementById("myDIV");
  x.style.display = "none";

}

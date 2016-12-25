var secretnum = 7;

var guess = prompt("guess a number");

if(Number(guess)=== secretnum)
{
	alert("number is too equal");
}
else if(Number(guess)<6)
{
	alert("num is too low");
}
else
{
	alert("number is wrong");
}
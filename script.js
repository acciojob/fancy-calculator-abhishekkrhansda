//your JS code here. If required.
let a = prompt("enter a first positive number") * 2;
let b = prompt("enter a second positive number");

let sum = Number(a) + Number(b);

if(a < 0 || b < 0){
	alert("please enter positive value only")
}
else{
	alert(`The final result is :${sum}`)
}
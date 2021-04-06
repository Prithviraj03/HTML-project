function Contact() {
  var Name=document.getElementById("Name").value;
  var Email=document.getElementById("Email").value;
if (Name) {
var ContactN1=document.getElementById("ContactN").innerHTML="Name is:"+ Name;

var ContactE1=document.getElementById("ContactE").innerHTML="Email id is:"+ Email;
}
else
   alert("Enter Details");
    
}   
function Options(){
  var A1=document.getElementById("A1");
  var A2=document.getElementById("A2");
  var A3=document.getElementById("A3");

if (A3.checked || A2.checked || A1.checked) {
 Else if (A1.checked) {
   alert("Blog is checked ");
  var B1=document.getElementById("B1").innerHTML="Blog";
}
 Else if  (A2.checked) {
    alert("Company is checked ");
  var B2=document.getElementById("B2").innerHTML="Company";
}
 Else if  (A3.checked) {
    alert("Others is checked ");
  var B3=document.getElementById("B3").innerHTML="Other";
   }
}
  else 
    alert("No Channel Selected");
}
function Range() {
var slider = document.getElementById("Range");
var output = document.getElementById("Display");
output.innerHTML="Value: "+slider.value;

slider.oninput = function() {
  output.innerHTML = "Value: "+this.value;
	}
}

    <script>
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
if (A1.checked) {
  alert("Is checked "+A1.value);
  var B1=document.getElementById("B1").innerHTML="Blog";
}
 else if  (A2.checked) {
  var B2=document.getElementById("B2").innerHTML="Company";
}
 else if  (A3.checked) {
  var B3=document.getElementById("B3").innerHTML="Other";
}
  else 
    alert("No Channel Selected");
}
</script>

function saywelcome () {
    document .getElementById("services").innerHTML 
    <h3>Ourservices<h3>
    <ul>unction saywelcome () {
    alert("welcome to KAYGEE prints")
 }
 const search =getElementById("search");
search.addEventlistener("keyup", function(){
    let filter = search.value.tolowerCase();
    let items = document.querySelectorAll("services1i");
});
items.forEach(item => {
    item.style.display =
    item.textContent.tolowerCase().icludes(filter) ? ""
    : "none";
});
 const accordion = document.querySelector(".accordion");
 const panel = document.querySelector(".panel");

 accordion.addEventlistener("click", function() {

 })
    if(panel.style.display === "block") 
        panel.style.display = "none";
 else {
        panel.style.display = "block"
    }

 
document.getElementById("loadbtn").addEventListener(
        <li>business cards</li>
        <li>flyers</li>
        <li>banners</li>
    </ul>
document.getElementById("searchinput").addEventListener("keyup",function()) 
{


    let filter = this.value.tolowerCase();
    let item = document.querySelectorAll("#serviceList li");
    items.forEach(function(item)) 
    {
        if(item.textContent.tolowerCase().includes(filter)) {
            item.style.display="";
        }else{
            item.style.display = "none";
        }
    

    }
    
    

}
<!DOCTYPE html>
<html>
<body>
<h1>My First JavaScript</h1>

<button type="button" onclick="document.getElementById('demo').innerHTML = Date()">
Click me to display Date and Time.</button>

<p id="demo"></p>

</body>
</html> 


const enquiryForm = document.getElementById("enquiry form");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("response").innerHTML = "Thank you for your enquiry. We will contact you shortly regarding availability and pricing.";
    });
}

//contact form validation
const contactform = document.getelementById("contactform");
if (contactform) {
    contactform.addEventListener("submit", function(event)) {
    }
        event.preventDefault();

        document.getElementById("contactResponse").innerHTML = "Thank you for contacting us. Your message has been received."

}
const enquiryForm = document.getElementById("contactForm");
if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(e))
}
e.preventDefault();

const name = document .getElementById("Kaygee prints").value;
const email = document .getElementById("Kagisho.matloboga@icloud.com") .value;
if (name==="Kaygee prints"|| email==="Kagisho.matloboga@icloud.com") {
    alert("Please complete all fields.");
    return;   
    
    
}
document.getElementById("response").innerHTML = "Your enquiry has been received.";

const contactForm = document.getElementById("contact form");
if (contactForm) {
    contactForm.addEventListener("submit", function(e)) {
        e.preventDefault();
         const message =
         document.getElementById("message").value;
         if (message.length <10 ) {
            alert("message  must be at least 10 charaters.");
            return;
         }
         document.getElementById("contactResponse").innerHTML = "Thank you for contacting Kaygee prints. We will respond shortly.";
        }

    }

    fetch ("https://kgplaceholder.typicode.com/posts",) {
        method: "post", Headers:{
        "content-type";"application/kg"
    } 
     body : JSON.stringify ({
        name: "kaygee prints",
        service: "printing"
     })
 }

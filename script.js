console.log("hello world");
function formvalidation(){
  let isValid=true;
  let fname=document.getElementById('firstName').value;
  let lname=document.getElementById('lastName').value;
  let email=document.getElementById('email').value;
  let phone=document.getElementById('phone').value;


  if(fname.trim()===''){
    document.getElementById('firstNameError').innerText='Enter Name ! ';
    document.getElementById('firstName').style.border="2px solid red";
    isValid=false;

  }
  else if(fname.length <2){
    document.getElementById('firstNameError').innerText='Name should be at least 2 char!';
    isValid=false

  }
  else{
    document.getElementById('firstNameError').innerText='';
    document.getElementById('firstName').style.border="2px solid green";

  }

  if(lname.trim()===''){
    document.getElementById('lastNameError').innerText='Enter Last Name!';
    document.getElementById('lastName').style.border="2px solid red";
    isValid=false;
  }
  else if(lname.length<2){
    document.getElementById('lastNameError').innerText='Last Name should be at least 2 char!';
    document.getElementById('lastName').style.border="2px solid red";
    isValid=false;
  }
  else{
    document.getElementById('lastNameError').innerText='';
    document.getElementById('lastName').style.border="2px solid green";
  }
  if(email.trim()===''){
    document.getElementById('emailError').innerText='Enter Email';
    document.getElementById('email').style.border="2px solid red";
    isValid=false;
  }
  else if(!email.includes('@') || !email.endsWith('gmail.com')){
    document.getElementById('emailError').innerText='Enter Valid Email!';
    document.getElementById('email').style.border="2px solid red";
    isValid=false;
  }
  else{
    document.getElementById('emailError').innerText='';
    document.getElementById('email').style.border="2px solid green";
  }

  if(phone.trim()===''){
    document.getElementById('phoneError').innerText='Enter Phone Number!'
    document.getElementById('phone').style.border="2px solid red";
    isValid=false;
  }
  else if(phone.length<10||phone.length>=11){
    document.getElementById('phoneError').innerText='Enter Valid Phone Number!';
    isValid=false;
  }
  else{
    document.getElementById('phoneError').innerText='';
    document.getElementById('phone').style.border="2px solid green";
  }

 
  return isValid;
}




var form = document.getElementById('form');
form.addEventListener("submit", function(e) {
    e.preventDefault();

 
    if (formvalidation()) {
       
        fetch(form.action, {
            method: "POST",
            body: new FormData(form),
        }).then(response => response.json())
          .then((html) => {
          
            window.open('./login.html', '_self');
          }).catch((error) => {
            console.error('Error:', error);
            alert('There was an error submitting your form. Please try again.');
          });
    }
});

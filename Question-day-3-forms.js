function validateForm(){
    if(document.myForm.fname.value= "" && document.myForm.fname.value.length <5){
        document.getElementsByClassName("error").innerHTML = "please Enter Name with atleat 6 character"
        return false;
    }
    if(document.myForm.contact.value= "" && document.myForm.contact.value.length <9){
        document.getElementsByClassName("error").innerHTML = "Enter valid contact number"
        return false;
    }
    if(document.myForm.email.value= ""){
        document.getElementsByClassName("error").innerHTML = "please Enter email"
        return false;
    }
}
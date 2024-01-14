var form = document.getElementById("myForm");

var saveEmail = "";

form.addEventListener("submit",function(event){
   event.preventDefault();
   var displayEmail = document.getElementById("display");
   const email = document.getElementById("email").value;

             if(email=="" || !validateEmail(email)){
                document.getElementById("email").classList.add("error");
                document.getElementById("hidden").style.display = "block";
                document.getElementById("content2").style.display = "none";
                document.getElementById("email").style.backgroundColor = "#ffe8e6";
                document.getElementById("email").style.color = "red";
                console.log("invalid")
                return false
            }else{
                document.getElementById("email").classList.remove("error");
                document.getElementById("hidden").style.display = "none";
                formSuccess();


                displayEmail.innerHTML = email;
                return false;
            }

});

function validateEmail(email){
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function formSuccess(){
    document.getElementById("content1").style.display = "none";
    document.getElementById("content2").style.display = "block";
}

function dismissMessage(){
    document.getElementById("content2").style.display = "none";
    document.getElementById("content1").style.display = "flex";
    document.getElementById("email").style.backgroundColor = "#FFFFFF";
    document.getElementById("email").style.color = "black";
    const email = document.getElementById("email").value ="";
}






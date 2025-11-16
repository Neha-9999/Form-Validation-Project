let id = (id) =>document.getElementById(id);

let classes = (classes) =>document.getElementsByClassName(classes)

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form-main");

let errorMsg = classes("error"),
    sucessIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  
    engin(username, 0, "Username cannot be blank");
    engin(email, 1, "Email cannot be blank");
    engin(password, 2, "Password cannot be blank");
});

let engin =(id, serial,message) =>{
    if(id.value.trim() ===""){
    errorMsg[serial].innerHTML = message;
    failureIcon[serial].style.opacity = "1";
    sucessIcon[serial].style.opacity = "0";
}else{
    errorMsg[serial].innerHTML = "";
    failureIcon[serial].style.opacity = "0";
    sucessIcon[serial].style.opacity = "1";
}
}
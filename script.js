document.getElementById('registrationForm').addEventListener("submit",function(validate){
    validate.preventDefault();//prvent from default submit

    let name=document.querySelector('#fullname').value.trim();
    let email=document.querySelector('#email').value.trim();
    let password=document.querySelector('#password').value.trim();
    let Cpassword=document.querySelector('#confirmPassword').value.trim();
    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerText = "Full Name is required.";
        valid = false;
    } else {
        document.getElementById("nameError").innerText = "";
    }

    let emailPattern = /^[a-zA-Z0-9_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
        valid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }


    if (password !== Cpassword) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
        valid = false;
    } else {
        document.getElementById("confirmPasswordError").innerText = "";
    }

    // If all validations pass
    if (valid) {
        alert("Registration successful!");
        document.getElementById("registrationForm").reset(); // Reset form
    }
});
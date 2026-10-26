
let form = document.getElementById("myForm");
let message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = Number(document.getElementById("age").value);
    let phone = document.getElementById("phone").value;

    if (age < 1 || age > 120 || !/^[0-9]{10}$/.test(phone)) {
        message.style.color = "red";
        message.innerHTML = "Please enter valid details.";
    } else {
        message.style.color = "green";
        message.innerHTML = "Registration successful, " + name + "!";
        form.reset();
    }
});

form.addEventListener("reset", function() {
    message.innerHTML = "";
});

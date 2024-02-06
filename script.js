function myFunction() {
    let text;
    let firstname = prompt("Please enter your first name:", "Juan");
    if (firstname == null || firstname == "") {
       text = "User cancelled the prompt.";
    } else {
        let lastname = prompt("Please enter your last name:", "Dela Cruz");
        if (lastname == null || lastname == "") {
          text = "User cancelled the prompt.";
        } else {
            let age = prompt("Please enter your birth year:", "2000");
            if (age == null || age == "") {
              text = "User cancelled the prompt.";
            } else {
              age= 2024-age;
              text = "Hello " + firstname +" "+ lastname + "! How does it feel to be " + age + " years old?";
            }
        }
    }
    document.getElementById("coquette").innerHTML = text;
  }
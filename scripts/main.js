function processFormSubmission() {
    var first_name = document.getElementById("fname").value;
    var last_name = document.getElementById("lname").value;
  
    document.getElementById("form_fname").innerHTML = first_name;
    document.getElementById("form_lname").innerHTML = last_name; // document is the currently loaded html page 
  
    // do not submit the form
    return false;
  }
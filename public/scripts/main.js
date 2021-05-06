function processFormSubmission() {
    var first_name = document.getElementById("fname").value;
    var last_name = document.getElementById("lname").value;
    var date = document.getElementById("date").value;
    var vaccine = document.getElementById("vaccine").value;
    var place = document.getElementById("place").value;
  
    document.getElementById("form_fname").innerHTML = first_name;
    document.getElementById("form_lname").innerHTML = last_name; // document is the currently loaded html page 
    document.getElementById("form_date").innerHTML = date;
    document.getElementById("form_vaccine").innerHTML = vaccine;
    document.getElementById("form_place").innerHTML = place;
    // do  submit the form
    return true;
  }
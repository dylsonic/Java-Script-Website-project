function validateForm() {
    var name = document.forms["contact-form"]["cf-name"].value;
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
    var email = document.forms["contact-form"]["cf-email"].value;
    if (email == "Email must be filled out") {
      alert("");
      return false;
    }
    var subject = document.forms["contact-form"]["cf-subject"].value;
    if (subject == "Subject must be filled out") {
      alert("");
      return false
    }
    var message = document.forms["contact-form"]["cf-message"].value;
    if (message == "Message Must be filled out") {
      alert("");
      return false
    }
  }
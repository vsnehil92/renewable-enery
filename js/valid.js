function validatePhoneNumber() {
    const phoneInput = document.getElementById("contact-Phone number");
    const phoneNumber = phoneInput.value;
    const validationMessage = document.getElementById("validationMessage");
  
    const phoneNumberPattern = /^[0-9]{10}$/;
  
    if (phoneNumberPattern.test(phoneNumber)) {
      validationMessage.textContent = "Valid phone number!";
      validationMessage.style.color = "green"; 
    } else {
      validationMessage.textContent = "Please enter a valid 10-digit phone number.";
      validationMessage.style.color = "red"; 
    }
  }

  function clearValidationMessage() {
    const validationMessage = document.getElementById("validationMessage");
    validationMessage.textContent = ""; // Clear the message
  }
function handleCheckboxChange(checkbox) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Disable other checkboxes
    checkboxes.forEach(function (cb) {
        if (cb !== checkbox) {
            cb.disabled = checkbox.checked;
        }
    });

    // Alert the selected age
    if (checkbox.checked) {
        alert("Selected age: " + checkbox.value);
    }
}

// Function to reset the age selection
function resetAgeSelection() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Enable all checkboxes and uncheck them
    checkboxes.forEach(function (cb) {
        cb.disabled = false;
        cb.checked = false;
    });
}


// Function to validate the name field using JavaScript event handling
function validateName() {
    var nameInput = document.getElementById('name');
    var name = nameInput.value.trim();
    var nameRegex = /^[a-zA-Z\s]+$/;

    if (!nameRegex.test(name)) {
        nameInput.style.border = "2px solid red"; // Apply red border for invalid input
        alert("Please enter a valid name.");
        return false;
    } else {
        nameInput.style.border = ""; // Remove red border for valid input
        return true;
    }
}

// Function to validate the donor form using DOM methods
function validateForm() {
    var age = document.getElementById('age').value.trim();
    var email = document.getElementById('email').value.trim();
    var mobile = document.getElementById('mobile').value.trim();

    // Email validation using DOM property
    var emailInput = document.getElementById('email');
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailInput.style.border = "2px solid red"; // Apply red border for invalid input
        alert("Please enter a valid email address.");
        return false;
    } else {
        emailInput.style.border = ""; // Remove red border for valid input
    }

    // Mobile validation using DOM property
    var mobileInput = document.getElementById('mobile');
    var mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
        mobileInput.style.border = "2px solid red"; // Apply red border for invalid input
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    } else {
        mobileInput.style.border = ""; // Remove red border for valid input
    }

    // All validations passed
    return true;
}


document.getElementById("showReserves").addEventListener("click", function () {
    document.getElementById("reservesTable").style.display = "inline-table";
});
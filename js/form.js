const form = document.getElementById('form');
const fnameInput = document.getElementById('first-name-input');
const lnameInput = document.getElementById('last-name-input');
const emailInput = document.getElementById('email-input');
const phoneInput = document.getElementById('phone-input');
const messageInput = document.getElementById('message-input');
const submitButton = document.getElementById('submit-button');

const pageHeading = document.getElementById('page-heading');

function processForm(e) {
    if (validateForm(form)) {
        startAnimation(form);
        pageHeading.innerHTML = "Success!";
    }
    e.preventDefault();
}

/* Form validation code adapted from Stack Overflow: 
https://stackoverflow.com/questions/12457710/validation-of-input-text-field-in-html-using-javascript */

function validateForm(form) {
    if (isString(fnameInput)) {
        if (isString(lnameInput)) {
            if (isEmail(emailInput)) {
                if (isPhoneNum(phoneInput)) {
                    if (isString(messageInput)) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

function startAnimation(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}


/* ---- Form Input Validation Tests ---- */

function isString(field) {
    let fieldData = field.value;

    if (fieldData.match(/^\w+$/)) {
        return true;
    } else {
        alert("Please fill out any blank required fields.")
        return false;
    }
}

function isPhoneNum(field) {
    let fieldEntry = field.value;

    if (fieldEntry.length == 0 || fieldEntry.match(/^\d{10}$/)) {
        return true;
    } else {
        alert("Please enter a 10 digit phone number (digits only).")
        return false;
    }
}

/* Email validation code adapted from w3resource.com: 
https://www.w3resource.com/javascript/form/email-validation.php */

function isEmail(field) {
    let fieldInput = field.value;

    if ((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fieldInput))) {
        return true;
    } else {
        alert("Please enter a valid email address.")
        return false;
    }
}











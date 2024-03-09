const myform = document.getElementById('myform');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

myform.addEventListener('submit', e => {
    e.preventDefault();

    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailId = email.value.trim();
    var passwordValue = password.value.trim();
    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Debugging: Check variable values
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", emailId);
    console.log("Password:", passwordValue);

    if (firstName === '') {
        errorFunc(fname, 'First Name cannot be empty');
    } else {
        successFunc(fname);
    }

    if (lastName === '') {
        errorFunc(lname, 'Last Name cannot be empty');
    } else {
        successFunc(lname);
    }

    if (emailId === '') {
        errorFunc(email, 'Email cannot be empty');
    } else if (!pattern.test(emailId)) { // Debugging: Changed match to test
        errorFunc(email, 'Looks like this is not an Email Id');
    } else {
        successFunc(email);
    }

    if (passwordValue === '') {
        errorFunc(password, 'Password cannot be empty');
    } else {
        successFunc(password);
    }
});

function errorFunc(re, msg) {
    const myformControl = re.parentElement;
    const span = myformControl.querySelector('span');
    span.innerText = msg;
    re.classList.remove('success');
    re.classList.add('error');
    span.classList.add('error-text');
    if (re !== email) {
        re.value = '';
    } else {
        re.style.color = "rgba(55, 204, 138, 255)";
    }
}

function successFunc(re) {
    console.log("Success function called for:", re); // Debugging output
    re.classList.remove('error');
    re.classList.add('success');
    const myformControl = re.parentElement;
    const span = myformControl.querySelector('span');
    console.log("Span element:", span); // Debugging output
    span.innerText = ''; // Attempt to clear the error message
}

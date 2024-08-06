const myForm = document.querySelector('form.login-form');

const onFormSubmit = event => {
    event.preventDefault();

    const formData = {
    email: myForm.elements.email.value,
    password: myForm.elements.password.value,
    }

    if (!myForm.elements.email.value || !myForm.elements.password.value) {
        alert('All form fields must be filled in');
    } else {
        console.log(formData);
        myForm.reset();
    };
    

    
};

myForm.addEventListener('submit', onFormSubmit);

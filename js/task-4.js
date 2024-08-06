const myForm = document.querySelector('form.login-form');

const onFormSubmit = event => {
    event.preventDefault();

    if (!myForm.elements.email.value || !myForm.elements.password.value) {
        alert('All form fields must be filled in');
    } else {
        const formData = {
        email: myForm.elements.email.value,
        password: myForm.elements.password.value,
    };
    }

    console.log(formData);

    myForm.reset();
};

myForm.addEventListener('submit', onFormSubmit);

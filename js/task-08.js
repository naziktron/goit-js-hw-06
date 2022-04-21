    const ref = {
        formLabel: document.querySelector('.login-form'),
    }

    ref.formLabel.addEventListener('submit' , onFormSubmit);

    function onFormSubmit(event) {
        event.preventDefault();
        const formEl = event.currentTarget.elements;
        const email = formEl.email.value; 
        const pass = formEl.password.value; 
        const formData = {email,pass};
        if(email && pass){
            console.log(formData);
        } else {
            alert('Please complete all fields');
        }
    ref.formLabel.reset();

    }












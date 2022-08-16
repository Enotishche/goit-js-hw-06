const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit)

const onFormSubmit = (event) => {
    event.preventDefault();

    const userEmail = event.currentTarget.elements.email.value;
    const userPassword = event.currentTarget.elements.password.value;

    if (userEmail === "" || userPassword === "") {
        return alert(`Все поля должны быть заполнены!`);
    } else {
        const formData = { userEmail, userPassword };
        console.log(formData);
    }
    return form.reset();
    };
form.addEventListener('submit', onFormSubmit);


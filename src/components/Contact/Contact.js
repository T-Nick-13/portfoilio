import React from 'react';


function Contact() {

  //const [isValid, setIsValid] = React.useState(false);
  //const [error, setError] = React.useState({});
/*   const [data, setData] = React.useState({
    name: "",
    email: "",
  }); */



  async function formSend(e) {
    e.preventDefault();
    const form = document.getElementById('form')
    let error = formValidate(form);
    console.log(formValidate(form))

    let formData = new FormData(form);

    if (error === 0) {
      form.classList.add('_sending');

      let response = await fetch('../../sendmail.php', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_sending');

      } else {
        alert('errorr');
        form.classList.remove('_sending');
      }
    }
    else {
      alert("Заполните поля")
    }
  }

  function formValidate(form) {
    let error = 0;
    const formReq = document.querySelectorAll('._req')

    for (let index = 0; index < formReq.length;index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (!emailTest(input)) {
          formAddError(input);
          error++;
        }
      }
      else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }
    return error
  }

/*   function formValidate(form) {

    const formReq = document.querySelectorAll('._req');

    formReq.forEach(index => {
      let error = 0;
      formRemoveError(index);

      if (index.classList.contains('_email')) {
        if (!emailTest(index)) {
          formAddError(index);
          error++;
        }
      }
      else {
        if (index.value === '') {
          formAddError(index);
          error++;
        }
      }
    })

  } */

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(input.value)
  }

/*   const handleChange = (e) => {
    const name = e.target.name;
    //const value = e.target.value;
    //setData({ ...data, [name]: value });
    const errorMessage = e.target.validationMessage === "Заполните это поле." ? "Пожалуйста, заполните это поле." : e.target.validationMessage;
    setError({ ...error, [name]: errorMessage });
    //setIsValid(e.target.closest("form").checkValidity());
  }; */


  /*https://www.youtube.com/watch?v=PqTrhfjLQBI   примерно с 30 минуты */

  return (
    <div className="contact">
      <div className="form">
        <form className="form__body" onSubmit={formSend} id="form">
          <h1 className="form__title">Title of the form</h1>

          <div className="form__item">
            <label for="formName" className="form__label">Name*:</label>
            <input id="formName" type="text" name="name" className="form__input _req"
              /* onChange={handleChange} */ /* minLength="2" */ maxLength="30"></input>
            <p className="form__error">{/* {error.name} */}</p>
          </div>

          <div className="form__item">
            <label for="formEmail" className="form__label">E-mail*:</label>
            <input id="email" type="email" required name="email" className="form__input _req _email"
            /* onChange={handleChange} */></input>
            <p className="form__error">{/* {error.email} */}</p>
          </div>

          <div className="form__item">
            <label for="formMessage" className="form__label">Message*:</label>
            <textarea className="" id="formMessage" name="message" required className="form__input _req"
              minLength="2" /* onChange={handleChange} */></textarea>
              <p className="form__error">{/* {error.message} */}</p>
          </div>

          <button type="submit" className="form__button">Send</button>

        </form>
      </div>

    </div>
  );
}


export default Contact;

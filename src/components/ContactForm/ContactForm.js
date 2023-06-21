import React from 'react';

import Preloader from '../Preloader/Preloader';
import Contacts from '../Contacts/Contacts';
import contactImg from '../../images/light/contact.png';

function ContactForm(props) {

  const [isValid, setIsValid] = React.useState(false);
  const [error, setError] = React.useState({undefined});
  const [data, setData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [form, setForm] = React.useState();

  function handleChange(e) {
    const {name, value} = e.target;
    setForm(e.target.closest('form'));

    const checkValidation = () => {
      if (name == 'email' && value != '' && e.target.validationMessage != '') {
        return 'invalid email. Pleasy try again';
      }
      if (value == '') {
        return 'please fill in this field';
      } else {
        return '';
      }
    }
    setError({ ...error, [name]: checkValidation() })
    setData({
      ...data,
      [name]: value
    });
    setIsValid(e.target.closest('form').checkValidity());
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.sendEmail(data);
  }

  React.useEffect(() => {
    function resetForm() {
      if (props.isSent) {
        setIsValid(false);
        form.reset();
      }
    }
    resetForm();
  }, [props.isSent]);

  return (
    <div className="contact">

      <div className="contact__container">

        <div className="contact__img-box">
          <div className="form">
            <form className="form__body" onSubmit={handleSubmit} id="form">
              {/* <h1 className="form__title">Contact form</h1> */}

              <div className="form__item">
                <input id="formName" type="text" name="name" className="form__input _req"
                  onChange={handleChange} required maxLength="30">
                </input>
                <label htmlFor="formName"
                  className={error.name != "" && error.name != undefined  ? "form__label form__label_active" : "form__label"}>
                  Name*: {error.name}
                </label>
              </div>

              <div className="form__item">
                <input id="formEmail" type="email" required name="email"
                  className="form__input _req _email" onChange={handleChange}></input>
                <label htmlFor="formEmail"
                  className={error.email != "" && error.email != undefined  ? "form__label form__label_active" : "form__label"}>
                  E-mail*: {error.email}
                </label>
              </div>

              <div className="form__item">
                <textarea id="formMessage" name="message" required className="form__input form__area _req"
                  onChange={handleChange}></textarea>
                <label htmlFor="formMessage"
                  className={
                    error.message != "" && error.message != undefined  ? "form__label form__label-area form__label-area_active"
                      : "form__label form__label-area"}> Message*: {error.message}
                </label>
              </div>

              <button type="submit" className={isValid ? "form__button form__button_active" : "form__button"}>Send</button>

            </form>
            <Preloader inSend={props.inSend}/>
            <p className="contact__text contact__text_form">Please fill out<br/> this form</p>
          </div>
          <img className="contact__img" src={contactImg} alt="workplace"></img>
        </div>
        <div className="contact__overlay"></div>

        <div className="contact__links">
          <p className="contact__text contact__text_contact">or text me here</p>
          <div>
            <Contacts
              activeName={true}
              activeLinks={['telegram', 'email']}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default ContactForm;

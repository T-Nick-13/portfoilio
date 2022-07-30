import React from "react";


function Contact() {

  const [isValid, setIsValid] = React.useState(false);
  const [error, setError] = React.useState({undefined});
  const [data, setData] = React.useState({
    name: "",
    email: "",
  });

  function handleChange(e) {
    const {name, value} = e.target;

    const checkValidation = () => {
      if (name == "email" && value != "" && e.target.validationMessage != "") {
        return "invalid email. Pleasy try again";
      }
      if (value == "") {
        return "please fill in this field";
      } else {
        return "";
      }
    }
    setError({ ...error, [name]: checkValidation() })

    setData({
      ...data,
      [name]: value
    });
    setIsValid(e.target.closest("form").checkValidity());
  }


  return (
    <div className="contact">
      <div className="form">
        <form className="form__body" /* onSubmit={formSend} */ id="form">
          <h1 className="form__title">Contact form</h1>

          <div className="form__item">

            <input id="formName" type="text" name="name" className="form__input _req"
              onBlur={handleChange} required maxLength="30">
            </input>
            <label htmlFor="formName"
              className={error.name != "" && error.name != undefined  ? "form__label form__label_active" : "form__label"}>
              Name*: {error.name}
            </label>
          </div>

          <div className="form__item">

            <input id="formEmail" type="email" required name="email"
              className="form__input _req _email" onBlur={handleChange}></input>
            <label htmlFor="formEmail"
              className={error.email != "" && error.email != undefined  ? "form__label form__label_active" : "form__label"}>
              E-mail*: {error.email}
            </label>
          </div>

          <div className="form__item">

            <textarea id="formMessage" name="message" required className="form__input form__area _req"
              onBlur={handleChange}></textarea>
            <label htmlFor="formMessage"
              className={
                error.message != "" && error.message != undefined  ? "form__label form__label-area form__label-area_active"
                  : "form__label form__label-area"}> Message*: {error.message}
            </label>
          </div>

          <button type="submit" className={isValid ? "form__button form__button_active" : "form__button"}>Send</button>

        </form>
      </div>

    </div>
  );
}


export default Contact;

import { Link } from 'react-router-dom';


function Contact() {


  return (
    <div className="contact">
      <div className="form">
        <form className="form__body">
          <h1 className="form__title">Title of the form</h1>

          <div className="form__item">
            <label for="formName" className="form__label">Name*:</label>
            <input id="formName" type="text" name="name" className="form__input"></input>
          </div>

          <div className="form__item">
            <label for="formEmail" className="form__label">E-mail*:</label>
            <input id="formEmail" type="email" name="text" className="form__input"></input>
          </div>

          <div className="form__item">
            <label for="formMessage" className="form__label">Message*:</label>
            <textarea className="" id="formMessage" name="Message" className="form__input"></textarea>
          </div>

          <button type="submit" className="form__button">Send</button>

        </form>
      </div>

    </div>
  );
}


export default Contact;

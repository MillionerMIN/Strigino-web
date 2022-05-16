import './formReservation.scss';

import { Formik, Field, Form, FormikHelpers } from 'formik';
import emailjs from '@emailjs/browser';

interface Values {
  date: number;
  numberPeople: number;
  firstName: string;
  phone: string;
  email: string;
  comments: string;
}

const FormReservation = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_90v1c3w',
        'template_etqol4b',
        e.currentTarget,
        'nlC2xucQM9WVhNYSl'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };

  return (
    <div className="form form_md form_pd">
      <div className="form__container form__container_pd">
        <div className="form__note">
          Поля со звездочкой * обязательны для заполнения
        </div>
        {/* <Formik
          initialValues={{
            date: 0,
            numberPeople: 0,
            firstName: '',
            phone: '',
            email: '',
            comments: '',
          }}
          onSubmit={(
            values: Values,
          ) => {
          }}
        > */}
        <form onSubmit={sendEmail}>
          <div className="form__field">
            <label htmlFor="date">Дата *</label>
            <input id="data" name="date" type="date" />
          </div>

          <div className="form__field">
            <label htmlFor="numberPeople">Количество человек</label>
            <input id="numberPeople" name="numberPeople" type="number" />
          </div>

          <div className="form__field">
            <label htmlFor="firstName">Контактное лицо *</label>
            <input
              id="firstName"
              name="firstName"
              placeholder="Иванов Иван Иванович"
            />
          </div>

          <div className="form__field">
            <label htmlFor="phone">Контактный телефон (с кодом страны) *</label>
            <input id="phone" name="phone" placeholder="+7 (999) 111-11-11" />
          </div>

          <div className="form__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="ivanov@gmail.com"
              type="email"
            />
          </div>

          <div className="form__field">
            <label htmlFor="comments">Коментарии</label>
            <textarea id="comments" name="comments" placeholder="" />
          </div>

          <button className="button_submit" type="submit">
            Отправить запрос
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormReservation;

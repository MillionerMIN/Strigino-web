import './formReservation.scss';

import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  date: number;
  timeStart: number;
  timeEnd: number;
  numberPeople: number;
  firstName: string;
  phone: string;
  email: string;
  comments: string;
}

const FormReservation = () => {
  function sendEmail() {}

  return (
    <div className="form form_md form_pd">
      <div className="form__container form__container_pd">
        <div className="form__note">
          Поля со звездочкой * обязательны для заполнения
        </div>
        <Formik
          initialValues={{
            date: 0,
            timeEnd: 0,
            timeStart: 0,
            numberPeople: 0,
            firstName: '',
            phone: '',
            email: '',
            comments: '',
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form>
            <div className="form__field">
              <label htmlFor="date">Дата *</label>
              <Field id="data" name="data" type="date" />
            </div>

            <div className="form__field">
              <label htmlFor="timeStart">Время начала *</label>
              <Field id="timeStart" name="timeStart" type="time" />
            </div>

            <div className="form__field">
              <label htmlFor="timeEnd">Время окончания *</label>
              <Field id="timeEnd" name="timeEnd" type="time" />
            </div>

            <div className="form__field">
              <label htmlFor="numberPeople">Количество человек</label>
              <Field id="numberPeople" name="numberPeople" type="number" />
            </div>

            <div className="form__field">
              <label htmlFor="firstName">Контактное лицо *</label>
              <Field
                id="firstName"
                name="firstName"
                placeholder="Иванов Иван Иванович"
              />
            </div>

            <div className="form__field">
              <label htmlFor="phone">
                Контактный телефон (с кодом страны) *
              </label>
              <Field id="phone" name="phone" placeholder="+7 (999) 111-11-11" />
            </div>

            <div className="form__field">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="ivanov@gmail.com"
                type="email"
              />
            </div>

            <div className="form__field">
              <label htmlFor="comments">Коментарии</label>
              <Field
                as="textarea"
                id="comments"
                name="comments"
                placeholder=""
                type="email"
              />
            </div>

            <button className="button_submit" type="submit">
              Отправить запрос
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormReservation;

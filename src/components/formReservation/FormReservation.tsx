import './formReservation.scss';

import useInput from '../../hooks/useInput';
import emailjs from '@emailjs/browser';
import { Alert } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Loader from '../common/lotties/Loader';

const FormReservation = () => {
  const date = useInput('', { isEmpty: true });
  const numberPeople = useInput('', { maxNumberError: true });
  const name = useInput('', { isEmpty: true, minLength: 3 });
  const phone = useInput('', { isEmpty: true, isPhone: true });
  const email = useInput('', { validEmail: true });
  const [send, setSend] = useState<boolean>(false);
  const [errorSend, setErrorSend] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setSend(false);
      setErrorSend(false);
    }, 2000);
  }, [send, errorSend]);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        'service_90v1c3w',
        'template_etqol4b',
        e.currentTarget,
        'nlC2xucQM9WVhNYSl'
      )
      .then(
        (result) => {
          if (result.text) {
            setLoading(false);
            setSend(true);
          }
        },
        (error) => {
          if (error.text) {
            setLoading(false);
            setErrorSend(true);
          }
        }
      );
    e.currentTarget.reset();
  };

  return (
    <div className="form form_md form_pd">
      <div className="form__container form__container_pd">
        {loading && <Loader className="form__loader" />}
        <div className="form__note">
          Поля со звездочкой * обязательны для заполнения
        </div>
        <form onSubmit={handlerSubmit}>
          <div className="formInput">
            <label htmlFor="date">Дата *</label>
            <input
              id="date"
              type="date"
              name="date"
              value={date.value}
              onBlur={(e) => date.onBlur(e)}
              onChange={(e) => date.onChange(e)}
            />
            {date.isDirty && date.isEmpty && <div>{date.errorEmpty}</div>}
          </div>

          <div className="formInput">
            <label htmlFor="numberPeople">Количество человек</label>
            <input
              id="numberPeople"
              type="number"
              name="numberPeople"
              placeholder="от 1 до 80"
              min={1}
              max={80}
              value={numberPeople.value}
              onBlur={(e) => numberPeople.onBlur(e)}
              onChange={(e) => numberPeople.onChange(e)}
            />
            {numberPeople.maxNumberError && (
              <div>{numberPeople.errorMaxNumber}</div>
            )}
          </div>

          <div className="formInput">
            <label htmlFor="name">Контактное лицо *</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Иванов Иван Иванович"
              value={name.value}
              onBlur={(e) => name.onBlur(e)}
              onChange={(e) => name.onChange(e)}
            />
            {name.isDirty && name.isEmpty && <div>{name.errorEmpty}</div>}
            {name.isDirty && name.minLengthError && (
              <div>{name.errorMinLength}</div>
            )}
          </div>

          <div className="formInput">
            <label htmlFor="phone">Номер телефона *</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              placeholder="+7 (999) 111 11 11"
              value={phone.value}
              onBlur={(e) => phone.onBlur(e)}
              onChange={(e) => phone.onChange(e)}
            />
            {phone.isDirty && phone.isEmpty && (
              <div>{phone.errorValidPhone}</div>
            )}
            {email.isDirty && phone.validPhone && (
              <div>{phone.errorValidPhone}</div>
            )}
          </div>

          <div className="formInput">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="ivanov@gmail.com"
              value={email.value}
              onBlur={(e) => email.onBlur(e)}
              onChange={(e) => email.onChange(e)}
            />
            {email.isDirty && email.validEmail && (
              <div>{email.errorValidEmail}</div>
            )}
          </div>
          <button
            className="button_submit"
            type="submit"
            disabled={!date.inputValid || !name.inputValid || !phone.inputValid}
          >
            Отправить запрос
          </button>
        </form>
      </div>
      {send && (
        <Alert className="form__alert" variant="success">
          Ваша заявка принята! Мы свяжемся с вами.
        </Alert>
      )}
      {errorSend && (
        <Alert className="form__alert" variant="danger">
          Попробуйте еще раз!
        </Alert>
      )}
    </div>
  );
};

export default FormReservation;

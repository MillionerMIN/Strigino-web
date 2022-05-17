import { useEffect, useState } from 'react';

const useValidation = (value: any, validations: any) => {
  const [inputValid, setInputValid] = useState<boolean>(false);
  const [isEmpty, setEmpty] = useState<boolean>(false);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxNumberError, setMaxNumberError] = useState(false);
  const [validPhone, setValidPhone] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [errorEmpty, setErrorEmpty] = useState('');
  const [errorMinLength, setErrorMinLength] = useState('');
  const [errorMaxNumber, setErrorMaxNumber] = useState('');
  const [errorValidEmail, setErrorValidEmail] = useState('');
  const [errorValidPhone, setErrorValidPhone] = useState('');

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          setErrorMinLength('Неккоректная длина');
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          setErrorEmpty('Поле не может быть пустым');
          break;

        case 'isNumber': {
          0 < +value && +value <= 80
            ? setMaxNumberError(false)
            : setMaxNumberError(true);
          setErrorMaxNumber('Неверное количество');
          break;
        }

        case 'isPhone': {
          const phone = /(7|8|9)\d{9}/;

          value.match(phone) ? setValidPhone(false) : setValidPhone(true);
          setErrorValidPhone('Укажите контактный номер телефона');
          break;
        }

        case 'validEmail': {
          const re =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          re.test(String(value).toLowerCase())
            ? setValidEmail(false)
            : setValidEmail(true);
          setErrorValidEmail('Неккоректный email');
          break;
        }
      }
    }
  }, [value, validations]);

  useEffect(() => {
    if (
      isEmpty ||
      minLengthError ||
      maxNumberError ||
      validPhone ||
      validEmail
    ) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [isEmpty, minLengthError, maxNumberError, validPhone, validEmail]);

  return {
    inputValid,
    isEmpty,
    minLengthError,
    maxNumberError,
    validPhone,
    validEmail,
    errorEmpty,
    errorMinLength,
    errorMaxNumber,
    errorValidPhone,
    errorValidEmail,
  };
};

export default useValidation;

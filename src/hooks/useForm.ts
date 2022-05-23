
import { ChangeEvent, useState } from 'react';

type UseFormType = {
  date: string | number | readonly string[] | undefined;
  numberPeople: string | number | readonly string[] | undefined;
  firstName: string;
  phone: string;
  email: string;
  comments: string;
};

const useForm = (validate: any) => {
  const [values, setValues] = useState<UseFormType>({
    date: undefined,
    numberPeople: undefined,
    firstName: '',
    phone: '',
    email: '',
    comments: '',
  });

  const [errors, setErrors] = useState({
    date: '',
    numberPeople: '',
    firstName: '',
    phone: '',
    email: '',
  });

  const handlerChange = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setErrors(validate(values));

    // emailjs
    //   .sendForm(
    //     'service_90v1c3w',
    //     'template_etqol4b',
    //     e.currentTarget,
    //     'nlC2xucQM9WVhNYSl'
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    // e.currentTarget.reset();
  };

  return { handlerChange, errors, values, sendEmail };
};

export default useForm;

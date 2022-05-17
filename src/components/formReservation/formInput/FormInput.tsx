import './formInput.scss';
import {
  ChangeEvent,
  DetailedHTMLProps,
  FocusEvent,
  InputHTMLAttributes,
  useState,
} from 'react';

//type default input
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputType = {
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  labelName: string;
  errorMessage: string;
};

//type finely input
type SuperInputTextPropsType = DefaultInputPropsType & {
  labelName: string;
  errorMessage: string;
};

const FormInput = (props: SuperInputTextPropsType) => {
  const { labelName, errorMessage, onChange, ...inputProps } = props;
  const [focused, setFocused] = useState<boolean>(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState<string>('');

  const bluerHandler = (e: FocusEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case 'date':
        setFocused(true);
        break;
      case 'name':
        setFocused(true);
        break;
      case 'phone':
        setFocused(true);
        break;
      case 'email':
        setFocused(true);
        break;
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (
      e.currentTarget.name === 'email' &&
      !re.test(String(e.currentTarget.value).toLowerCase())
    ) {
      setError(errorMessage);
    } else {
      setError('');
    }
  };

  const valid = error && focused && <span>{error}</span>;

  return (
    <div className="formInput">
      <label htmlFor={labelName}>{labelName}</label>
      <input
        value={value}
        {...inputProps}
        onBlur={(e) => bluerHandler(e)}
        onChange={(e) => onChangeHandler(e)}
      />
      {valid}
    </div>
  );
};

export default FormInput;

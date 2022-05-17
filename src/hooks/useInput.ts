import { ChangeEvent, FocusEvent, useState } from 'react';
import useValidation from './useValidation';

const useInput = (initialValue: any, validations: any) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const valid = useValidation(value, validations);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsDirty(true);
  };

  return {
    value,
    onBlur,
    onChange,
    isDirty,
    ...valid,
  };
};

export default useInput;

import { forwardRef, Ref } from 'react';

interface IInputProps {
  type: string;
  name: string;
  label?: string;
}

const Input = forwardRef((props: IInputProps, ref: Ref<HTMLInputElement>) => {
  return (
    <>
      {props.label && (
        <label htmlFor={`input_${props.name}`}>{props.label}</label>
      )}
      <input ref={ref} {...props} id={`input_${props.name}`} />
    </>
  );
});

export default Input;

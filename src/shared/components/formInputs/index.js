import { InputField, Item, FormGroup, InputCheckBox } from './styles/ForrmInputs';

export const Input = ({ children, ...props }) => {
  return <Item {...props}>{children}</Item>;
};

Input.InputField = ({ children, className, ...props }) => {
  return (
    <InputField
      className={'form-input px-4 my-2 py-3 w-full rounded  focus:border-blue-600 shadow'}
      {...props}
    >
      {children}
    </InputField>
  );
};

Input.FormGroup = ({ children, ...props }) => {
  return <FormGroup {...props}>{children}</FormGroup>;
};
Input.CheckBox = ({ children, className, ...props }) => {
  return (
    <InputCheckBox className={'form-checkbox mr-2 ml-1'} {...props}>
      {children}
    </InputCheckBox>
  );
};

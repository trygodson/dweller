const InputField = (props) => {
  const Text = props.inputType;
  return (
    <div className="flex flex-col items-start w-full px-3 my-5 border border-gray-400 py-1 rounded ">
      <label className="text-sm font-serif text-gray-500">{props.label}</label>
      <Text
        {...props}
        className="form-input w-full bg-transparent border-none focus:outline-0 py-0 focus:ring-0 rounded focus:border-none placeholder:text-sm"
      />
    </div>
  );
};
export const AnotherInputField = ({
  className = 'form-input px-3 py-2 bg-transparent w-full border-none rounded focus:ring-0  focus:outline-0 focus:border-none ',
  inputType,
  label = false,
  labelName,
  borderStyle = 'border border-gray-500 rounded shadow',
  children,
  ...props
}) => {
  const Text = inputType;
  return (
    <div className={borderStyle}>
      {label && <label className="text-base mb-1 font-serif text-appcolor-900">{labelName}</label>}
      <Text className={className} {...props}>
        {children}
      </Text>
    </div>
  );
};

export default InputField;

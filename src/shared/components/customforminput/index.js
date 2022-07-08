const InputField = (props) => {
  const Text = props.inputType;
  return (
    <div className="flex flex-col items-start w-full px-2 my-2 py-1 rounded ">
      <label className="text-sm mb-1 font-serif text-gray-500">{props.label}</label>
      <Text
        {...props}
        className="form-input w-full bg-transparent border-gray-400 focus:outline-0 focus:ring-0 rounded focus:border-gray-600 placeholder:text-sm"
      />
    </div>
  );
};

export default InputField;

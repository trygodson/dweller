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

export default InputField;

import AsyncInput from 'react-select/async';

const customStyles = {
  option: (provided, state) => {
    // console.log(provided);
    return {
      ...provided,
      color: '#1a2b46',
      fontSize: '15px',
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    };
  },
  noOptionsMessage: (provided, state) => {
    return {
      ...provided,
      // color: '#1a2b46',
      // fontSize: '15px',
      // borderBottom: '1px dotted pink',
      // color: state.isSelected ? 'red' : 'blue',
      // padding: 20,
    };
  },
  menu: (provided, state) => {
    return {
      ...provided,
      color: '#1a2b46',
      fontSize: '15px',
      borderBottom: '1px dotted pink',
    };
  },
  input: (provided, state) => ({
    ...provided,

    borderColor: state.isFocused ? '#F7F7F7' : null,
  }),
  control: (provided, state) => {
    return {
      ...provided,
      '&:hover': {
        borderColor: '#000000',
      },
      background: '#fff',
      borderColor: '#000000',
      border: '1px solid #000000',
      boxShadow: '0 0 0 1px #000000',
      margin: '0 0 0 4px',
      padding: '1px 3px 1px 3px',
      borderColor: state.isFocused ? '#F7F7F7' : null,
      width: '100%',
    };
  },
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

const CustomSelect = ({ onChangeFunction, loadOptions, setModalOpen }) => {
  return (
    <AsyncInput
      styles={customStyles}
      loadOptions={loadOptions}
      touchUi={true}
      noOptionsMessage={({ input }) => (
        <h3>
          Nothing here{' '}
          <span
            className="font-bold text-indigo-900 cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            Add Now
          </span>
        </h3>
      )}
      onBlur={(event) => event.preventDefault()}
      placeholder="Search for community"
      onChange={(val) => onChangeFunction(val)}
    />
  );
};

export default CustomSelect;

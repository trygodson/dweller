import { useHistory } from 'react-router-dom';
import InputField from '../../../shared/components/customforminput';

const BusinessProfile = () => {
  const { push } = useHistory();
  const onSubmit = () => {
    push('/app/dashboard');
  };

  return (
    <>
      <div className="w-full mt-10 text-center">
        <h3 className="text-xl font-bold">Business Profile Form</h3>
      </div>
      <div className="px-8 py-8 bg-white my-8 shadow-md rounded-md ">
        <h3 className="font-serif text-xl">Business Details</h3>
        <div className="my-1">
          <InputField inputType="input" type="text" label={'first Name'} placeholder=".." />
        </div>
        <div className="my-1">
          <InputField inputType="input" type="text" label={'last Name'} placeholder=".." />
        </div>
        <div className="my-1">
          <InputField inputType="textarea" type="text" label={'Description'} placeholder=".." />
        </div>

        <h3 className="font-serif text-xl">Business Contact Information</h3>

        <div className="my-1">
          <InputField inputType="input" type="text" label={'Contact Email'} placeholder=".." />
        </div>
        <div className="my-1">
          <InputField inputType="input" type="text" label={'Phone No'} placeholder=".." />
        </div>
        <h3 className="font-serif text-xl">Personal Address</h3>

        <div className="my-1">
          <InputField inputType="input" type="text" label={'State'} placeholder=".." />
        </div>
        <div className="my-1">
          <InputField inputType="input" type="text" label={'LGA'} placeholder=".." />
        </div>
        <div className="my-1">
          <InputField inputType="textarea" type="text" label={'Addresses'} placeholder=".." />
        </div>

        <div className="px-2 mt-8">
          <button
            className="outline-none border-none w-full text-white text-lg font-bold rounded text-center h-10 bg-appcolor-500 hover:bg-appcolor-900"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default BusinessProfile;

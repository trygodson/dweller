import InputField from '../../shared/components/customforminput';

const ProfileForm = () => {
  return (
    <main className="w-full min-h-screen">
      <div className="mx-auto mt-8 w-3/5">
        <div className="w-full mt-3 text-center">
          <h3 className="text-base font-bold">Profile Form</h3>
        </div>
        <div className="px-8 py-8 bg-white my-8 shadow-md rounded-md ">
          <div className="my-1">
            <InputField inputType="input" type="text" label={'first Name'} placeholder=".." />
          </div>
          <div className="my-1">
            <InputField inputType="input" type="text" label={'last Name'} placeholder=".." />
          </div>
          <div className="my-1">
            <InputField inputType="textarea" type="text" label={'Description'} placeholder=".." />
          </div>
          <div className="my-1">
            <InputField inputType="input" type="text" label={'Contact Email'} placeholder=".." />
          </div>
          <div className="my-1">
            <InputField inputType="input" type="text" label={'Phone No'} placeholder=".." />
          </div>
          <div className="my-1">
            <InputField inputType="input" type="text" label={'State'} placeholder=".." />
          </div>
          <div className="my-1">
            <InputField inputType="input" type="text" label={'LGA'} placeholder=".." />
          </div>
          <div className="my-1">
            <InputField inputType="textarea" type="text" label={'Addresses'} placeholder=".." />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileForm;

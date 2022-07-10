import { AnotherInputField } from '../../../../shared/components/customforminput';

const AddCollection = () => {
  return (
    <main>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-6">
          <div className="w-full shadow bg-white py-7 px-5 rounded-md">
            <div className="mb-5">
              <h3 className="text-base text-right font-semibold">Add Payment Details</h3>
            </div>

            <AnotherInputField
              inputType="input"
              type="text"
              borderStyle="border-b mb-6 border-gray-300"
              label={true}
              labelName="Payment Amount"
              className="form-input px-3 py-2  bg-transparent w-full border-none rounded focus:ring-0  focus:outline-0 focus:border-none "
            />
            <AnotherInputField
              inputType="select"
              type="text"
              borderStyle="border-b mb-6 border-gray-300"
              label={true}
              labelName="Payment Type"
              className="form-input px-3 py-2  bg-transparent w-full border-none rounded focus:ring-0  focus:outline-0 focus:border-none "
            >
              <option>Once</option>
              <option>Recurring</option>
            </AnotherInputField>
            <AnotherInputField
              inputType="input"
              type="text"
              borderStyle="border-b mb-6 border-gray-300"
              label={true}
              labelName="Payment Location"
              className="form-input px-3 py-2  bg-transparent w-full border-none rounded focus:ring-0  focus:outline-0 focus:border-none "
            />
            <AnotherInputField
              inputType="input"
              type="text"
              borderStyle="border-b mb-6 border-gray-300"
              label={true}
              labelName="Payment Location"
              className="form-input px-3 py-2  bg-transparent w-full border-none rounded focus:ring-0  focus:outline-0 focus:border-none "
            />
            <AnotherInputField
              inputType="input"
              type="text"
              borderStyle="border-b mb-6 border-gray-300"
              label={true}
              labelName="Payment Location"
              className="form-input px-3 py-2  bg-transparent w-full border-none rounded focus:ring-0  focus:outline-0 focus:border-none "
            />
          </div>
        </div>
        <div className="col-span-6">
          <div className="w-full flex">
            <div>
              <AnotherInputField
                inputType="select"
                className={
                  'form-input px-3 py-2 w-24 bg-transparent w-full border-none rounded focus:ring-0  focus:outline-0 focus:border-none '
                }
              >
                <option value={''} className="text-gray-600">
                  Filter
                </option>
                <option>Date</option>
                <option>Price</option>
                <option>Location</option>
              </AnotherInputField>
            </div>
            <div className="ml-2 ">
              <AnotherInputField
                inputType="input"
                type="text"
                placeholder="Search for dwellers"
                className={
                  'form-input px-3 py-2 bg-transparent w-full border-none rounded focus:ring-0  focus:outline-0 focus:border-none '
                }
              />
            </div>
          </div>

          <div className="w-full mt-10 bg-white h-60 rounded-md shadow flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <p className="text-base font-bold ">No dwellers added Yet</p>
              <span className="text-sm text-grey-400">
                This shows expected dwellers for a particular payment collection
              </span>
              <span className="text-sm text-indigo-800">Add at least one Dweller</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddCollection;

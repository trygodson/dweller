import { AnotherInputField } from '../../../shared/components/customforminput';
import CollectionTable from './table/collectiontable';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../../shared/components/breadcrumb';

const MyCollection = ({ location }) => {
  return (
    <main className="w-full pt-10">
      <BreadCrumb location={location} />
      <div className="flex justify-between">
        <div>
          <div className="flex">
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
                placeholder=".."
                className={
                  'form-input px-3 py-2 bg-transparent w-full border-none rounded focus:ring-0  focus:outline-0 focus:border-none '
                }
              />
            </div>
          </div>
        </div>

        <Link
          to={'/app/add-collection'}
          className="flex cursor-pointer rounded px-3 py-2 items-center bg-appcolor-700 hover:bg-appcolor-900"
        >
          <BsPlus color="white" size={22} />
          <span className="ml-1 text-white text-base font-semibold ">Add a collection</span>
        </Link>
      </div>
      <div className="w-6/6 mx-auto mt-10  bg-white rounded-md shadow py-5">
        <CollectionTable />
      </div>
    </main>
  );
};

export default MyCollection;

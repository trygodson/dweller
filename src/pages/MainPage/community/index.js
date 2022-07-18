import { AnotherInputField } from '../../../shared/components/customforminput';
import { BsPlus } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import BreadCrumb from '../../../shared/components/breadcrumb';
import CommuintyTable from './table/collectiontable';

const Community = ({ location }) => {
  return (
    <main className="w-full pt-10">
      <BreadCrumb location={location} />
      <div className="flex justify-end">
        <Link
          to={'/app/add-community'}
          className="flex cursor-pointer rounded px-3 py-2 items-center bg-appcolor-700 hover:bg-appcolor-900"
        >
          <BsPlus color="white" size={22} />
          <span className="ml-1 text-white text-base font-semibold ">Create a Commuinity</span>
        </Link>
      </div>
      <div className="w-5/6 mx-auto mt-10  bg-white rounded-md shadow py-5">
        <CommuintyTable />
      </div>
    </main>
  );
};

export default Community;

import { useEffect, useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { emptyicon } from '../../../../Entryfile/imagepath';
import { Button2 } from '../../../../shared/components/button';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import CommuintyUsers from './users';
import BreadCrumb from '../../../../shared/components/breadcrumb';

const InfoAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
  animation: 0.24s ${InfoAnimation};
`;

const ViewCommunity = (props) => {
  const [openAction, setOpenAction] = useState('paid');

  const nocollectionAdded = () => {
    return (
      <div className="flex flex-col h-full justify-center items-center">
        <p className="text-base font-bold ">No dwellers added Yet</p>
        <img src={emptyicon} width="150" />
        <span className="text-sm text-grey-400">
          This shows expected dwellers for a particular payment collection
        </span>
        <span className="text-sm text-indigo-800">Add at least one Dweller</span>
      </div>
    );
  };

  return (
    <main className="">
      <BreadCrumb location={props.location} />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-5">
          <div className="w-full shadow bg-white py-7 px-5 rounded-md">
            <div className="mb-5">
              <h3 className="font-serif text-xl">Community Details</h3>
            </div>

            <div className="my-3 pt-2 pb-3 flex justify-between items-center border-b border-gray-200">
              <h4 className="text-sm ">Community Name</h4>
              <p className="text-sm font-semibold ">Kubwa North Community</p>
            </div>
            <div className="my-3 pt-3 pb-5 flex justify-between items-center border-b border-gray-200">
              <h4 className="text-sm ">Community Type</h4>
              <p className="text-sm font-semibold">Estate</p>
            </div>
            <div className="my-3 pt-3 pb-5 flex justify-between items-center border-b border-gray-200">
              <h4 className="text-sm ">Payment Location</h4>
              <p className="text-sm font-semibold">Bwari Area Council</p>
            </div>
            <div className="flex justify-center">
              <Button2
                classes={'flex justify-center items-center mr-2'}
                onClick={() => props.history.push('/app/add-community')}
              >
                <FiEdit /> Edit
              </Button2>
              <Button2 classes={'flex justify-center items-center  hover:bg-red-700 bg-red-600'}>
                <FiTrash2 /> Delete
              </Button2>
            </div>
          </div>
        </div>
        <div className="col-span-7 h-full ">
          <div className="w-full h-full  bg-white p-5  rounded-md shadow ">
            <div className="mb-5">
              <h3 className="font-serif text-xl">Community Members</h3>
            </div>

            <CommuintyUsers />

            {/* <div className="h-full w-full ">

            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewCommunity;

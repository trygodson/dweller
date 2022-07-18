import { useEffect, useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { community } from '../../../../shared/hooks/api/testService';
import { emptyicon } from '../../../../Entryfile/imagepath';
import CustomOverlay from '../../../../shared/components/customOverlay';
import { Button2 } from '../../../../shared/components/button';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import UnPaidCollectionMembers from './paid';
import PaidCollectionMembers from './unpaid';

const InfoAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
  animation: 0.24s ${InfoAnimation};
`;

const ViewCollection = (props) => {
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
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-5">
          <div className="w-full shadow bg-white py-7 px-5 rounded-md">
            <div className="mb-5">
              <h3 className="font-serif text-xl">Payment Details</h3>
            </div>

            <div className="my-3 pt-2 pb-3 flex justify-between items-center border-b border-gray-200">
              <h4 className="text-sm ">Payment Amount</h4>
              <p className="text-sm font-semibold ">₦1240000</p>
            </div>
            <div className="my-3 pt-3 pb-5 flex justify-between items-center border-b border-gray-200">
              <h4 className="text-sm ">Payment Type</h4>
              <p className="text-sm font-semibold">Recurring</p>
            </div>
            <div className="my-3 pt-3 pb-5 flex justify-between items-center border-b border-gray-200">
              <h4 className="text-sm ">Payment Method</h4>
              <p className="text-sm font-semibold">Bank Tranfer</p>
            </div>
            <div className="my-3 pt-3 pb-5 flex justify-between items-center border-b border-gray-200">
              <h4 className="text-sm ">Payment Method</h4>
              <p className="text-sm font-semibold">Bank Tranfer</p>
            </div>
            <div className="my-3 pt-3 pb-5 flex justify-between items-center border-b border-gray-200">
              <h4 className="text-sm ">Payment Method</h4>
              <p className="text-sm font-semibold">Bank Tranfer</p>
            </div>
            <div className="flex justify-center">
              <Button2
                classes={'flex justify-center items-center mr-2'}
                onClick={() => props.history.push('/app/add-collection')}
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
              <h3 className="font-serif text-xl">Collection Members</h3>
            </div>
            <div className="flex w-full justify-center items-center">
              <div
                className="relative ml-16 my-26  cursor-pointer "
                onClick={() => setOpenAction('paid')}
              >
                <span className="font-semibold text-lg hover:text-appcolor-500">Paid</span>
                <div
                  style={{ height: '2px' }}
                  className={`${
                    openAction != 'paid' && 'w-0'
                  } absolute bg-black left-0 bottom-0 mt-10 transition-all duration-300 ${
                    openAction == 'paid' && 'w-full'
                  }`}
                ></div>
              </div>
              <div
                className="relative ml-16 my-26 cursor-pointer "
                onClick={() => setOpenAction('unpaid')}
              >
                <span className="font-semibold text-lg hover:text-appcolor-500">Unpaid</span>
                <div
                  style={{ height: '2px' }}
                  className={`${
                    openAction != 'unpaid' && 'w-0'
                  } absolute bg-black left-0 bottom-0 mt-10 transition-all duration-300 ${
                    openAction == 'unpaid' && 'w-full'
                  }`}
                ></div>
              </div>
            </div>
            {openAction === 'paid' && (
              <FadeDiv className="flex flex-col">
                {' '}
                <PaidCollectionMembers />
              </FadeDiv>
            )}
            {openAction === 'unpaid' && (
              <FadeDiv>
                {' '}
                <UnPaidCollectionMembers />
              </FadeDiv>
            )}

            {/* <div className="h-full w-full ">

            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewCollection;

import { useState } from 'react';

const RecentTransaction = () => {
  const [openProperties, setOpenProperties] = useState('payment');

  return (
    <div className="flex flex-col">
      <div className="flex justify-between border-b-2 border-gray-300">
        <div className="flex flex-col  border-b-2 py-1.5 px-2 border-blue-600">
          <span className="text-base font-bold text-appcolor-800">Payment</span>
        </div>
        <div className="flex flex-col   py-1.5 px-2 ">
          <span className="text-base font-bold text-indigo-800">Deposit</span>
        </div>
        <div className="flex flex-col  py-1.5 px-2 ">
          <span className="text-base font-bold text-indigo-800">Withdrawal</span>
        </div>
      </div>

      <div className="" style={{ height: `calc(100vh - 340px)`, overflowY: 'scroll' }}>
        <div
          className="flex flex-col justify-between px-2 my-2 h-16 border-b-1 py-3 border-gray-500 "
          // style={{ height: '70px' }}
        >
          <div className="flex justify-between ">
            <p className="text-sm font-semibold indent-0.5">
              Sent <span className="font-extrabold ">₦2000</span> to Dimepay
            </p>
            <div className="bg-lime-300 py-1 px-2 rounded-lg flex justify-center items-center">
              <span className="text-green-600 font-bold text-xs">Executed</span>
            </div>
          </div>

          <span className="text-xs font-bold text-gray-400">2022-06-12 02:37:22</span>
        </div>
        <div
          className="flex flex-col justify-between px-2 my-2 h-16 border-b-1 py-3 border-gray-500 "
          // style={{ height: '70px' }}
        >
          <div className="flex justify-between ">
            <p className="text-sm font-semibold indent-0.5">
              Sent <span className="font-extrabold ">₦2000</span> to Dimepay
            </p>
            <div className="bg-lime-300 py-1 px-2 rounded-lg flex justify-center items-center">
              <span className="text-green-600 font-bold text-xs">Executed</span>
            </div>
          </div>

          <span className="text-xs font-bold text-gray-400">2022-06-12 02:37:22</span>
        </div>
        <div
          className="flex flex-col justify-between px-2 my-2 h-16 border-b-1 py-3 border-gray-500 "
          // style={{ height: '70px' }}
        >
          <div className="flex justify-between ">
            <p className="text-sm font-semibold indent-0.5">
              Sent <span className="font-extrabold ">₦2000</span> to Dimepay
            </p>
            <div className="bg-lime-300 py-1 px-2 rounded-lg flex justify-center items-center">
              <span className="text-green-600 font-bold text-xs">Executed</span>
            </div>
          </div>

          <span className="text-xs font-bold text-gray-400">2022-06-12 02:37:22</span>
        </div>
        <div
          className="flex flex-col justify-between px-2 my-2 h-16 border-b-1 py-3 border-gray-500 "
          // style={{ height: '70px' }}
        >
          <div className="flex justify-between ">
            <p className="text-sm font-semibold indent-0.5">
              Sent <span className="font-extrabold ">₦2000</span> to Dimepay
            </p>
            <div className="bg-lime-300 py-1 px-2 rounded-lg flex justify-center items-center">
              <span className="text-green-600 font-bold text-xs">Executed</span>
            </div>
          </div>

          <span className="text-xs font-bold text-gray-400">2022-06-12 02:37:22</span>
        </div>
        <div
          className="flex flex-col justify-between px-2 my-2 h-16 border-b-1 py-3 border-gray-500 "
          // style={{ height: '70px' }}
        >
          <div className="flex justify-between ">
            <p className="text-sm font-semibold indent-0.5">
              Sent <span className="font-extrabold ">₦2000</span> to Dimepay
            </p>
            <div className="bg-lime-300 py-1 px-2 rounded-lg flex justify-center items-center">
              <span className="text-green-600 font-bold text-xs">Executed</span>
            </div>
          </div>

          <span className="text-xs font-bold text-gray-400">2022-06-12 02:37:22</span>
        </div>
        <div
          className="flex flex-col justify-between px-2 my-2 h-16 border-b-1 py-3 border-gray-500 "
          // style={{ height: '70px' }}
        >
          <div className="flex justify-between ">
            <p className="text-sm font-semibold indent-0.5">
              Sent <span className="font-extrabold ">₦2000</span> to Dimepay
            </p>
            <div className="bg-lime-300 py-1 px-2 rounded-lg flex justify-center items-center">
              <span className="text-green-600 font-bold text-xs">Executed</span>
            </div>
          </div>

          <span className="text-xs font-bold text-gray-400">2022-06-12 02:37:22</span>
        </div>
      </div>
    </div>
  );
};

export default RecentTransaction;

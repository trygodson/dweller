import { useState } from 'react';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';
import DashbhoardChat from './chat';
import DashboardTransaction from './transaction';

const InfoAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
  animation: 0.24s ${InfoAnimation};
`;

const RecentTransaction = () => {
  const [openAction, setOpenAction] = useState('transaction');

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <div
          className="relative ml-16 my-26  cursor-pointer "
          onClick={() => setOpenAction('transaction')}
        >
          <span className="font-semibold text-lg hover:text-appcolor-500">Transactions</span>
          <div
            style={{ height: '2px' }}
            className={`${
              openAction != 'transaction' && 'w-0'
            } absolute bg-black left-0 bottom-0 mt-10 transition-all duration-300 ${
              openAction == 'transaction' && 'w-full'
            }`}
          ></div>
        </div>
        <div className="relative ml-16 my-26 cursor-pointer " onClick={() => setOpenAction('chat')}>
          <span className="font-semibold text-lg hover:text-appcolor-500">Chat</span>
          <div
            style={{ height: '2px' }}
            className={`${
              openAction != 'chat' && 'w-0'
            } absolute bg-black left-0 bottom-0 mt-10 transition-all duration-300 ${
              openAction == 'chat' && 'w-full'
            }`}
          ></div>
        </div>
      </div>
      {openAction === 'transaction' && (
        <FadeDiv>
          {' '}
          <DashboardTransaction />
        </FadeDiv>
      )}
      {openAction === 'chat' && (
        <FadeDiv>
          {' '}
          <DashbhoardChat />
        </FadeDiv>
      )}
    </div>
  );
};

export default RecentTransaction;

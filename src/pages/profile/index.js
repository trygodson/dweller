import { useState } from 'react';
import { fadeIn } from 'react-animations';
import { useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import InputField from '../../shared/components/customforminput';
import AccountProfile from './account';
import BusinessProfile from './businessprofile';
import SettlementProfile from './settlement';

const InfoAnimation = keyframes`${fadeIn}`;

const FadeDiv = styled.div`
  animation: 0.5s ${InfoAnimation};
`;

const ProfileForm = () => {
  const [openSettingsForm, setOpenSettingsForm] = useState('profile');

  return (
    <main className="w-full min-h-screen">
      <div className="mx-auto mt-2 w-3/5">
        <div className="flex justify-center items-center">
          <div
            className="relative ml-16 my-26  cursor-pointer "
            onClick={() => setOpenSettingsForm('profile')}
          >
            <span className="font-semibold text-lg hover:text-appcolor-500">Business Profile</span>
            <div
              style={{ height: '2px' }}
              className={`${
                openSettingsForm != 'profile' && 'w-0'
              } absolute bg-black left-0 bottom-0 mt-10 transition-all duration-300 ${
                openSettingsForm == 'profile' && 'w-full'
              }`}
            ></div>
          </div>
          <div
            className="relative ml-16 my-26 cursor-pointer "
            onClick={() => setOpenSettingsForm('preferences')}
          >
            <span className="font-semibold text-lg hover:text-appcolor-500">Preferences</span>
            <div
              style={{ height: '2px' }}
              className={`${
                openSettingsForm != 'preferences' && 'w-0'
              } absolute bg-black left-0 bottom-0 mt-10 transition-all duration-300 ${
                openSettingsForm == 'preferences' && 'w-full'
              }`}
            ></div>
          </div>
          <div
            className="relative ml-16 my-26 cursor-pointer "
            onClick={() => setOpenSettingsForm('account')}
          >
            <span className="font-semibold text-lg hover:text-appcolor-500">
              Settlement Account
            </span>
            <div
              style={{ height: '2px' }}
              className={`${
                openSettingsForm != 'account' && 'w-0'
              }  absolute bg-black left-0 bottom-0 mt-10 transition-all duration-300 ${
                openSettingsForm == 'account' && 'w-full'
              }`}
            ></div>
          </div>
        </div>

        {openSettingsForm === 'profile' && (
          <FadeDiv>
            {' '}
            <BusinessProfile />
          </FadeDiv>
        )}
        {openSettingsForm === 'preferences' && (
          <FadeDiv>
            <SettlementProfile />
          </FadeDiv>
        )}
        {openSettingsForm === 'account' && (
          <FadeDiv>
            <AccountProfile />
          </FadeDiv>
        )}
      </div>
    </main>
  );
};

export default ProfileForm;

import HorizontalComponent from "@components/horizontalcard/horizontalcard";
import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import LoadingOverlay from "react-loading-overlay";
import {
  AuthActionAddAccount,
  AuthActionSuccess,
} from "src/shared/context/reducers/authActions";
import { useAuthState } from "src/shared/context/useAuthContext";
import accountService from "../../hooks/api/accountService";
import authService from "../../hooks/api/useAuthService";

import "./styles.css";

const _WorkPlaces = ({ ...props }) => {
  const { mutateAsync: WorkPlaceData, isLoading } =
    accountService.useAccountListService();
  const [switchLoaded, setSwitchDataLoaded] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userDataLoaded, setUserDataLoaded] = useState(false);
  const { user } = useAuthState();
  const { dispatch } = useAuthState();
  useEffect(() => {
    console.log(user);
    async function workplacedata() {
      const response = await WorkPlaceData();
      setUserData(response);
      setUserDataLoaded(true);
      dispatch(
        AuthActionAddAccount({
          accounts: response,
        })
      );
    }
    workplacedata();
  }, []);

  const { mutateAsync: registerUser, isSwitching } =
    authService.useAccountSelectService();

  async function handleSubmit(accountid) {
    try {
      setSwitchDataLoaded(true);
      const response = await registerUser(accountid);
      
      dispatch(
        AuthActionSuccess({
          token: response.token,

          currentUser: {
            role: response.role,
            name: user.user.name,
            id: user.user.id,
          },
          permission: response.permissions,
        })
      );

      setSwitchDataLoaded(false);
      props.history.push("/app/dashboard");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <LoadingOverlay
      spinner
      active={switchLoaded}
      text="Account Switching Please Wait"
    >
      <div className="card-body">
        <h5 className="card-title">Work Places</h5>
        <div className="activity">
          <div className="activity-box">
            {userDataLoaded ? (
              userData.length > 0 ? (
                <div className="stats-lis">
                  {userData.map((info, index) => (
                    <HorizontalComponent
                      title={info.tenant.name}
                      subtitle={info.partialRoleId}
                      fuction={() => handleSubmit(info.id)}
                    />
                  ))}
                </div>
              ) : (
                <div align="center">Empty</div>

            
              )
            ) : (
              <div align="center" style={{ marginTop: "20%" }}>
                <CircularProgress /> <p>Fetching user details..plese wait</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </LoadingOverlay>

    // <div className="content container-fluid">
    //   {userDataLoaded ? (
    //     <UserDetails userData={userData} />
    //   ) : (
    //     <div align="center" style={{ marginTop: "20%" }}>
    //       <CircularProgress /> <p>Fetching user details..plese wait</p>
    //     </div>
    //   )}
    //   {userData && <UserTab userData={userData} />}
    // </div>
  );
};

export default _WorkPlaces;

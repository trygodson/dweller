import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import authService from "../../hooks/api/useAuthService";
import UserDetails from "./details";
import "./styles.css";
import UserTab from "./user_tab";

const _ViewUser = ({ user, ...props }) => {
  const { mutateAsync: UserData, isLoading } = authService.useUserService();

  const [userData, setUserData] = useState(null);
 const [userDataLoaded, setUserDataLoaded] = useState(false);


  useEffect(() => {
    async function userdata() {
      const response = await UserData(user.value);
      setUserData(response);
      setUserDataLoaded(true);
    }
    userdata();
  }, []);

  return (
    <div className="content container-fluid">
      {userDataLoaded ? (
        <UserDetails userData={userData} />
      ) : (
        <div align="center" style={{ marginTop: "20%" }}>
          <CircularProgress /> <p>Fetching user details..plese wait</p>
        </div>
      )}
      {userData && <UserTab userData={userData} />}
    </div>
  );
};

export default _ViewUser;

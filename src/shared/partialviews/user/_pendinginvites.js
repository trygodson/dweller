import HorizontalComponent from "@components/horizontalcard/horizontalcard";
import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import accountService from "../../hooks/api/accountService";

import "./styles.css";

import Swal from "sweetalert2";

const _PendingInvites = ({ user, ...props }) => {
  const { mutateAsync: PendingWorkPlacesData, isLoading } = accountService.usePendingAccountListService();
  const { mutateAsync: AcceptInvite, isLoading2 } = accountService.useAcceptInviteService();
  const [userData, setUserData] = useState(null);
 const [userDataLoaded, setUserDataLoaded] = useState(false);


  useEffect(() => {
    async function PendingWorkPlacesdata() {
      const response = await PendingWorkPlacesData();
      setUserData(response);
      setUserDataLoaded(true);
    }
    PendingWorkPlacesdata();
  }, []);
async function accept(id)
{
  try {

      const response = await AcceptInvite(id);

 
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
}

async function handleSubmit(accountid,companyname) {
 
 return Swal.fire({
  title: 'Are you sure?',
  text: `This means you are joining ${companyname} and all your information will be accessible by the company`,
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: `Join ${companyname}`,
  cancelButtonText: 'No, Dont'
}).then((result) => {
  if (result.isConfirmed) {
   accept(accountid)
  // For more information about handling dismissals please visit
  // https://sweetalert2.github.io/#handling-dismissals
  } else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire(
      'Cancelled',
      'Okay',
      'error'
    )
  }
})
    // try {
    //   setSwitchDataLoaded(true);
    //   const response = await registerUser(accountid);

    //   dispatch(
    //     AuthActionSuccess({
    //       token: response.token,

    //       currentUser: {
    //         role: response.role,
    //         name: user.user.name,
    //         id: user.user.id,
    //       },
    //       permission: response.permissions,
    //     })
    //   );

    //   setSwitchDataLoaded(false);
    //   props.history.push("/app/dashboard");
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <div className="card-body">
    <h5 className="card-title">Pending Invites</h5>
    <div className="activity">
      <div className="activity-box">
      
      {userDataLoaded ? 
             userData.length > 0 ? (
                <div className="stats-lis">
                  { userData.map((info, index) => (
                   
                     
                  <HorizontalComponent
                title={info.tenant.name}
                subtitle={info.partialRoleId}
                fuction={() => handleSubmit(info.id,info.tenant.name)}
                 />
                 
                  ))}
                </div>
              ) : (
                <div align="center">Empty</div>
              
    //   (
    //           <HorizontalComponent
    //           title="ERCAS"
    //           subtitle="HR"
    //           />
    
      ) : (
        <div align="center" style={{ marginTop: "20%" }}>
          <CircularProgress /> <p>Fetching user details..plese wait</p>
        </div>
      )}
   
          
      
      </div>
    </div>
  </div>
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

export default _PendingInvites;

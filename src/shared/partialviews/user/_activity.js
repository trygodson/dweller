import ActivityCardComponent from "@components/activitycard/activitycardcomponent";
import HorizontalComponent from "@components/horizontalcard/horizontalcard";
import { CircularProgress } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import moment from "moment";
import React, { useEffect, useState } from "react";
import notificationService from "../../hooks/api/notificationService";
import UserDetails from "./details";
import "./styles.css";
import UserTab from "./user_tab";

const _Activities = ({ user, ...props }) => {
  const { mutateAsync: ActivitiesData, isLoading } = notificationService.useActivityService();

  const [userData, setUserData] = useState(null);
 const [userDataLoaded, setUserDataLoaded] = useState(false);


  useEffect(() => {
    async function Activitiesdata() {
      const response = await ActivitiesData();
      setUserData(response.data);
      setUserDataLoaded(true);
    }
    Activitiesdata();
  }, []);

  return (
    <div className="card-body">
    <h5 className="card-title">Activities</h5>
    <div className="activity">
      <div className="activity-box">
      
      {userDataLoaded ? 
             userData.length > 0 ? (
                <div className="stats-lis">
                    <ul className="activity-list">
                  { userData.map((info, index) => (
                   
                     
                   <ActivityCardComponent
                   title={info.actor}
                   name={info.actor}
                   icon={<Search />}
                   action={info.action}
                   actiontype={info.reciever}
                   time={moment(info.createDate).fromNow()}
                 />
                 
                  ))}
                  </ul>
                </div>
                
              ) : (
                <div align="center">Empty</div>

  
      ) : (
        <div align="center" style={{ marginTop: "20%" }}>
          <CircularProgress /> <p>Fetching user details..plese wait</p>
        </div>
      )
      
      }
   
          
      
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

export default _Activities;


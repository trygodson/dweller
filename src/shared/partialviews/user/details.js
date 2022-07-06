import moment from "moment";
import React from "react";
import Avatar from "react-avatar";
import LinkButton from "../../../shared/components/button/linkbutton";
import "./styles.css";

const UserDetails = ({ userData, ...props }) => (
  <div className="card mb-0">
    <div className="card-body">
      <div className="row">
        <div className="col-md-12">
          <div className="profile-view">
            <div className="profile-img-wrap">
              <Avatar
                name={`${userData.firstName} ${userData.lastName}`}
                round
                size={100}
                src={userData.imageUrl ?? undefined}
              />
            </div>
            <div className="profile-basic">
              <div className="row">
                <div className="col-md-5">
                  <div className="profile-info-left">
                    <h3 className="user-name m-t-0 mb-0">
                      {userData.firstName} {userData.lastName}
                    </h3>
                    <h6 className="text-muted"></h6>
                    <small className="text-muted">
                      {userData.bio ?? "Hard working and a great team player"}
                    </small>
                    {/* <div className="staff-id">Employee ID : FT-0001</div> */}
                    <div className="small doj text-muted">
                      Date of Join : {moment(userData.dateJoined).calendar()}
                    </div>
                    <div className="staff-msg mt-5">
                      <LinkButton
                        className="button-create"
                        to="/app/add_employee"
                      >
                        Add to Staff
                      </LinkButton>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <ul className="personal-info">
                    <li>
                      <div className="title">Phone:</div>
                      <div className="text">
                        <a href="">{userData.phoneNumber}</a>
                      </div>
                    </li>
                    <li>
                      <div className="title">Email:</div>
                      <div className="text">
                        <a href="">{userData.email}</a>
                      </div>
                    </li>
                    <li>
                      <div className="title">Birthday:</div>
                      <div className="text">
                        {moment(userData.dateOfBirth).calendar()}
                      </div>
                    </li>
                    <li>
                      <div className="title">Address:</div>
                      <div className="text">{userData.address ?? "-"}</div>
                    </li>
                    <li>
                      <div className="title">Years Of WorkExperience:</div>
                      <div className="text">
                        {userData.yearsOfWorkExperience}
                      </div>
                    </li>
                    {/* <li>
               <div className="title">Reports to:</div>
               <div className="text">
                 <div className="avatar-box">
                   <div className="avatar avatar-xs">
                     <img src={Avatar_16} alt="" />
                   </div>
                 </div>
                 <a href="/blue/app/profile/employee-profile">
                   Jeffery Lalor
                 </a>
               </div>
             </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default UserDetails;

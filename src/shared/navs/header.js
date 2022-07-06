/**
 * App Header
 */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Applogo,
  Avatar_02,
  Avatar_03,
  Avatar_13,
  Avatar_17,
  Avatar_21,
} from '../../Entryfile/imagepath';

const Header = props => {
  const { location, handleToggleSidebar } = props;
  let pathname = location.pathname;

  return (
    <div className="header" style={{ right: '0px' }}>
      {/* Logo */}
      <div className="header-left">
        <a href="/light/app/main/dashboard" className="logo">
          <img src={Applogo} width={120} height={40} alt="" />
        </a>
      </div>
      {/* /Logo */}
      <a
        className="toggle_btn"
        href=""
        style={{
          display: pathname.includes('tasks') ? 'none' : pathname.includes('compose') ? 'none' : '',
        }}
        onClick={e => handleToggleSidebar(e)}
      >
        <span className="bar-icon">
          <span />
          <span />
          <span />
        </span>
      </a>
      {/* Header Title */}
      <div className="page-title-box">
        <h3></h3>
      </div>
      {/* /Header Title */}
      <a id="mobile_btn" className="mobile_btn" href="#sidebar">
        <i className="fa fa-bars" />
      </a>
      {/* Header Menu */}
      <ul className="nav user-menu">
        {/* Search */}
        <li className="nav-item">
          <div className="top-nav-search">
            <a href="" className="responsive-search">
              <i className="fa fa-search" />
            </a>
            <form action="/light/app/pages/search">
              <input className="form-control" type="text" placeholder="Search here" />
              <button className="btn" type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </div>
        </li>

        <li className="nav-item dropdown">
          <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
            <i className="fa fa-bell-o" /> <span className="badge badge-pill">3</span>
          </a>
          <div className="dropdown-menu notifications noty-show">
            <div className="topnav-dropdown-header">
              <span className="notification-title">Notifications</span>
              <a href="" className="clear-noti">
                {' '}
                Clear All{' '}
              </a>
            </div>
            <div className="noti-content">
              <ul className="notification-list">
                <li className="notification-message">
                  <a href="/light/app/administrator/activities">
                    <div className="media">
                      <span className="avatar">
                        <img alt="" src={Avatar_02} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">John Doe</span> added new task{' '}
                          <span className="noti-title">Patient appointment booking</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">4 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="/light/app/administrator/activities">
                    <div className="media">
                      <span className="avatar">
                        <img alt="" src={Avatar_03} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Tarah Shropshire</span> changed the task name{' '}
                          <span className="noti-title">
                            Appointment booking with payment gateway
                          </span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">6 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="notification-message">
                  <a href="/light/app/administrator/activities">
                    <div className="media">
                      <span className="avatar">
                        <img alt="" src={Avatar_17} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Rolland Webber</span> completed task{' '}
                          <span className="noti-title">Patient and Doctor video conferencing</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">12 mins ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="notification-message">
                  <a href="/light/app/administrator/activities">
                    <div className="media">
                      <span className="avatar">
                        <img alt="" src={Avatar_13} />
                      </span>
                      <div className="media-body">
                        <p className="noti-details">
                          <span className="noti-title">Bernardo Galaviz</span> added new task{' '}
                          <span className="noti-title">Private chat module</span>
                        </p>
                        <p className="noti-time">
                          <span className="notification-time">2 days ago</span>
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="topnav-dropdown-footer">
              <a href="/light/app/administrator/activities">View all Notifications</a>
            </div>
          </div>
        </li>

        {/* /Message Notifications */}
        <li className="nav-item dropdown has-arrow main-drop">
          <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
            <span className="user-img">
              <img src={Avatar_21} alt="" />
              <span className="status online" />
            </span>
            <span>{props.name}</span>
          </a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="/light/app/profile/employee-profile">
              My Profile
            </a>
            <a className="dropdown-item" href="/light/settings/companysetting">
              Settings
            </a>
            <a
              onClick={() => {
                localStorage.clear();
              }}
              className="dropdown-item"
              href="/login"
            >
              Logout
            </a>
          </div>
        </li>
      </ul>
      {/* /Header Menu */}
      {/* Mobile Menu */}
      <div className="dropdown mobile-user-menu">
        <a
          href="#"
          className="nav-link dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v" />
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <a className="dropdown-item" href="/light/app/profile/employee-profile">
            My Profile
          </a>
          <a className="dropdown-item" href="/light/settings/companysetting">
            Settings
          </a>
          <a
            onClick={() => {
              localStorage.clear();
            }}
            className="dropdown-item"
            href="/login"
          >
            Logout
          </a>
        </div>
      </div>
      {/* /Mobile Menu */}
    </div>
  );
};

export default withRouter(Header);

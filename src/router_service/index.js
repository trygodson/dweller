import { lazy } from 'react';
import { AddStaffs, ManageStaffs } from '../pages/MainPage/staffs';
import AdminDashboard from '../pages/MainPage/dashboard/Admin';
import MyProperties from '../pages/MainPage/properties/Admin/MyProperties';
import MyCollection from '../pages/MainPage/collection';
import Community from '../pages/MainPage/community';
import AddCollection from '../pages/MainPage/collection/addcollection';
import AddCommunity from '../pages/MainPage/community/addcommunity';
import ViewCollection from '../pages/MainPage/collection/viewcollection';
import ViewCommunity from '../pages/MainPage/community/viewcommunity';
import ProfileForm from '../pages/profile/index';
// import DwellerPayDashboard from "../pages/MainPage/dashboard/dwellerpay";

// const DwellerPayDashboard = lazy(() => import('../pages/MainPage/dashboard/dwellerpay'));
// const AdminDashboard = lazy(() => import('../pages/MainPage/dashboard/Admin'));
// const MyProperties = lazy(() => import('../pages/MainPage/properties/Admin/MyProperties'));
// const MyCollection = lazy(() => import('../pages/MainPage/collection'));
// const Community = lazy(() => import('../pages/MainPage/community'));
// const AddCollection = lazy(() => import('../pages/MainPage/collection/addcollection'));
// const AddCommunity = lazy(() => import('../pages/MainPage/community/addcommunity'));
// const ViewCollection = lazy(() => import('../pages/MainPage/collection/viewcollection'));
// const ViewCommunity = lazy(() => import('../pages/MainPage/community/viewcommunity'));
// const ProfileForm = lazy(() => import('../pages/profile/index'));

export default [
  // {
  //   path: 'dashboard',
  //   component: DwellerPayDashboard,
  // },
  {
    path: 'dashboard',
    component: AdminDashboard,
  },
  {
    path: 'properties',
    component: MyProperties,
  },
  {
    path: 'profile-form',
    component: ProfileForm,
    // permission: [],
  },
  {
    path: 'my-collection',
    component: MyCollection,
    // permission: [],
  },
  {
    path: 'add-collection',
    component: AddCollection,
    // permission: [],
  },
  {
    path: 'view-collection',
    component: ViewCollection,
    // permission: [],
  },
  {
    path: 'view-community',
    component: ViewCommunity,
    // permission: [],
  },
  {
    path: 'communities',
    component: Community,
    // permission: [],
  },
  {
    path: 'manage-staffs',
    component: ManageStaffs,
    // permission: [],
  },
  {
    path: 'add-community',
    component: AddCommunity,
    // permission: [],
  },
  {
    path: 'add-staff',
    component: AddStaffs,
    // permission: [],
  },
  // {
  //   path: "add-employee",
  //   component: EmployeeSearch,
  //   permission: [],
  // },
  // {
  //   path: "manage-employee",
  //   component: ManageEmployee,
  //   permission: [],
  // },
  // {
  //   path: "employee",
  //   component: Test,
  //   permission: [],
  // },
  // {
  //   path: "manage-leave",
  //   component: AdminLeave,
  //   permission: [],
  // },
  // {
  //   path: "business_create",
  //   component: CreateTenant,
  //   permission: [],
  // },
  // {
  //   path: "manage_department",
  //   component: ManageDepartment,
  //   permission: [],
  // },
];

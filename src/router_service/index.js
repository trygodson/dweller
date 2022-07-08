import { lazy } from 'react';
// import DwellerPayDashboard from "../pages/MainPage/dashboard/dwellerpay";

const DwellerPayDashboard = lazy(() => import('../pages/MainPage/dashboard/dwellerpay'));
const AdminDashboard = lazy(() => import('../pages/MainPage/dashboard/Admin'));
const MyProperties = lazy(() => import('../pages/MainPage/properties/Admin/MyProperties'));
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
  // {
  //   path: "test",
  //   component: Test,
  //   permission: [],
  // },
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

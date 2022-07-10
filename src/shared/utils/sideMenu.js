export const MenuList = [
  {
    id: 'dashboard',
    label: 'DASHBOARD',
    to: '/app/dashboard',
    icon: <i className="fi fi-rr-apps text-xl"></i>,
    title: 'collection',
  },
  {
    id: 'mycollection',
    label: 'My Collection',
    to: '/app/my-collection',
    icon: <i className="fi fi-rr-layout-fluid text-xl"></i>,
    title: 'collection',

    // permissions: [userPermissions.Hr, userPermissions.Admin],
  },
  {
    id: 'offline',
    label: 'Offline',
    to: '/app/offline',
    icon: <i className="fi fi-rr-user-time text-xl"></i>,
    title: 'collection',

    // permissions: [userPermissions.Hr, userPermissions.Admin],
  },
  {
    id: 'validate',
    label: 'Validate Txn',
    to: '/app/validate',
    icon: <i className="fi fi-rr-layers text-xl"></i>,
    title: 'collection',

    // permissions: [userPermissions.Hr, userPermissions.Admin],
  },
  {
    id: 'history',
    label: 'History',
    to: '/app/history',
    icon: <i className="fi fi-rr-clock text-xl"></i>,
    title: 'collection',

    // permissions: [userPermissions.Hr, userPermissions.Admin],
  },

  {
    id: 'community',
    label: 'Community',
    to: '/app/properties',
    icon: <i className="fi fi-rr-box text-xl"></i>,
    title: 'community',
  },

  {
    id: 'adddwellers',
    label: 'Add Dwellers',
    to: '/app/dwellers',
    icon: <i className="fi fi-rr-home text-xl"></i>,
    title: 'community',

    // permissions: [userPermissions.Hr, userPermissions.Admin],
  },

  {
    id: 'notification',
    label: 'Notification',
    to: '/app/properties',
    icon: <i className="fi fi-rr-bell-ring text-xl"></i>,
    title: 'notification',
  },
  {
    id: 'documentation',
    label: 'Documentation',
    to: '/app/docs',
    icon: <i className="fi fi-rr-book text-xl"></i>,

    title: 'services',

    // permissions: [userPermissions.Hr, userPermissions.Admin],
  },
  {
    id: 'apikeys',
    label: 'API Keys',
    to: '/app/apikeys',
    icon: <i className="fi fi-rr-key text-xl"></i>,

    title: 'services',

    // permissions: [userPermissions.Hr, userPermissions.Admin],
  },

  // {
  //   id: 'employee',
  //   label: 'EMPLOYEE',
  //   to: '/app',
  //   //permissions: [],
  //   subs: [
  //     {
  //       id: 'addEmployee',
  //       label: 'Add New Employee',
  //       to: '/app/add-employee',
  //       permissions: [userPermissions.Hr, userPermissions.Admin],
  //     },
  //     {
  //       id: 'manageEmployee',
  //       label: 'Manage Employee',
  //       to: '/app/manage-employee',
  //       permissions: [userPermissions.Hr, userPermissions.Admin],
  //     },
  //   ],
  // },
  // {
  //   id: "leave",
  //   label: "LEAVE",
  //   to: "/app/test",
  //   permissions: [userPermissions.Admin],
  //   subs: [

  //     {
  //       id: "manageLeave",
  //       label: "Employee Leave",
  //       to: "/app/manage-leave",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "settingsLeave",
  //       label: "Leave Setting",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "myLeave",
  //       label: "Apply For Leave",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },

  //   ],
  // },
  // {
  //   id: "attendance",
  //   label: "ATTENDANCE",
  //   to: "/app",
  //   permissions: [userPermissions.Hr],
  //   subs: [
  //     {
  //       id: "addEmployee",
  //       label: "Manage Attendace",
  //       to: "/app/add-employee",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },

  //     {
  //       id: "attendancesettings",
  //       label: "Attendance Settings",
  //       to: "/app/add-employee",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },

  //   ],
  // },
  // {
  //   id: "perfomance",
  //   label: "PERFORMANCES",
  //   to: "/app/test",
  //   active:true,
  //   permissions: [userPermissions.Admin],
  //   subs: [

  //     {
  //       id: "managetask",
  //       label: "Manage Task",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "orgtask",
  //       label: "All Task",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "appraisal",
  //       label: "Appraisals",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "kpi",
  //       label: "KPI",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "appraisal",
  //       label: "Staff Perfomances",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "appraisal",
  //       label: "Performance Settings",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },

  //   ],
  // },
  // {
  //   id: "finance",
  //   label: "FINANCE",
  //   to: "/app/test",
  //   active:true,
  //   permissions: [userPermissions.Admin],
  //   subs: [

  //     {
  //       id: "payroll",
  //       label: "Payroll",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "imprest",
  //       label: "Imprest",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "invoice",
  //       label: "Invoice",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {

  //       id: "sdeduction",
  //       label: "Salary Deduction",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "saddition",
  //       label: "Salary Addition",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "statutory",
  //       label: "Statutory Deductions",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },

  //   ],
  // },
  // {
  //   id: "setups",
  //   label: "SETUPS",
  //   to: "/app/test",
  //   permissions: [userPermissions.Admin],
  //   subs: [
  //     {
  //       id: "levels",
  //       label: "Levels",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "department",
  //       label: "Department",
  //       to: "/app/manage_department",
  //       permissions: [userPermissions.Admin],
  //     },

  //     {
  //       id: "positions",
  //       label: "Positions",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },

  //   ],
  // },

  // {
  //   id: "setups",
  //   label: "MY SPACE",
  //   to: "/app/test",
  //   permissions: [userPermissions.Admin],
  //   subs: [
  //     {
  //       id: "task",
  //       label: "Task",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "payslip",
  //       label: "Payslip",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },

  //     {
  //       id: "leave",
  //       label: "Leave",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "purnishment",
  //       label: "Purnishment",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "purnishment",
  //       label: "Purnishment",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "atten",
  //       label: "Attendance",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },
  //     {
  //       id: "orgSettingd",
  //       label: "Organization Settings",
  //       to: "/app/test",
  //       permissions: [userPermissions.Employee, userPermissions.Admin],
  //     },

  //   ],
  // },
];

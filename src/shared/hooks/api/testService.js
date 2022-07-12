const KEYS = {
  employees: 'employees',
  employeeId: 'employeeId',
};

export const getDepartmentCollection = () => [
  { id: '1', title: 'Development' },
  { id: '2', title: 'Marketing' },
  { id: '3', title: 'Accounting' },
  { id: '4', title: 'HR' },
];

export function insertEmployee(data) {
  let employees = getAllEmployees();
  data['id'] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) == null) localStorage.setItem(KEYS.employeeId, '0');
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));
  //map departmentID to department title
  let departments = getDepartmentCollection();
  return employees.map((x) => ({
    ...x,
    department: departments[x.departmentId - 1].title,
  }));
}

export const employees = async ({}) => {
  var id = await timeout(2000);
  clearTimeout();

  return {
    data: [
      {
        name: 'John Doe 1',
        date_created: '12th June 2021',
        amount_generated: '287878',
        pending_amount: '27168',
        all_users: '154',
        paid_users: '87',
        unpaid_users: '76',
      },
      {
        name: 'John Doe 1',
        date_created: '12th June 2021',
        amount_generated: '287878',
        pending_amount: '27168',
        all_users: '154',
        paid_users: '87',
        unpaid_users: '76',
      },
      {
        name: 'John Doe 1',
        date_created: '12th June 2021',
        amount_generated: '287878',
        pending_amount: '27168',
        all_users: '154',
        paid_users: '87',
        unpaid_users: '76',
      },
      {
        name: 'John Doe 1',
        date_created: '12th June 2021',
        amount_generated: '287878',
        pending_amount: '27168',
        all_users: '154',
        paid_users: '87',
        unpaid_users: '76',
      },
      {
        name: 'John Doe 1',
        date_created: '12th June 2021',
        amount_generated: '287878',
        pending_amount: '27168',
        all_users: '154',
        paid_users: '87',
        unpaid_users: '76',
      },
      {
        name: 'John Doe 1',
        date_created: '12th June 2021',
        amount_generated: '287878',
        pending_amount: '27168',
        all_users: '154',
        paid_users: '87',
        unpaid_users: '76',
      },
      {
        name: 'John Doe 1',
        date_created: '12th June 2021',
        amount_generated: '287878',
        pending_amount: '27168',
        all_users: '154',
        paid_users: '87',
        unpaid_users: '76',
      },
      {
        name: 'John Doe 1',
        date_created: '12th June 2021',
        amount_generated: '287878',
        pending_amount: '27168',
        all_users: '154',
        paid_users: '87',
        unpaid_users: '76',
      },
    ],
  };
};
export const community = async ({}) => {
  var id = await timeout(2000);
  clearTimeout();

  return {
    data: [
      {
        name: 'Emmamuel song',
        phone: '+23490365656',
        email: 'test@email.com',
        community: 'Deeja community',
      },
      {
        name: 'David bruise',
        phone: '+23490365656',
        email: 'david@email.com',
        community: 'kubwa community',
      },
      {
        name: 'Emmamuel song',
        phone: '+23490365656',
        email: 'test@email.com',
        community: 'Deeja community',
      },
      {
        name: 'David bruise',
        phone: '+23490365656',
        email: 'david@email.com',
        community: 'kubwa community',
      },
      {
        name: 'Emmamuel song',
        phone: '+23490365656',
        email: 'test@email.com',
        community: 'Deeja community',
      },
      {
        name: 'David bruise',
        phone: '+23490365656',
        email: 'david@email.com',
        community: 'kubwa community',
      },
    ],
  };
};
export const community2 = async ({}) => {
  var id = await timeout(2000);
  clearTimeout();

  return {
    data: [],
  };
};

function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

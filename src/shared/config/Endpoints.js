const BASE_URL = "https://teamova-service.herokuapp.com/api/v1/";

const ApiEndpoints = {
  // Users
  AUTHENTICATE: `Users/authenticate`,
  USER_REGISTER: `Users/register`,
  USER_DATA: "Users",
  CONFIRM_ACCOUNT:"Users/accountconfirmation",
  THIRD_PARTY: "ThirdPartyAction",
  ACCOUNT_SELECT:"account/select",


  //Account
  WORKPLACE: "account/list",
  PENDING_WORKPLACE:"account/pending",
  ACCEPT_INVITE:"Account/accept",
   //Activity
   ACTIVITY: "Activity/byuser",


  //Tenant
  CREATE_TENANT:"Tenant/create",
  DEPARTMENT:"Department",

  //Application Data
  ALL_STATE:"ApplicationData/getallstates"
 
};

export { BASE_URL, ApiEndpoints };

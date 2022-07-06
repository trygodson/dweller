import api from "@utils/api";
import { useMutation } from "react-query";
import { ApiEndpoints } from "src/shared/config/Endpoints";




async function AccountList() {
  const response = await api.get(`${ApiEndpoints.WORKPLACE}`);
  console.log(response);
  return response;
}

async function Accept(id) {
    const response = await api.get(`${ApiEndpoints.ACCEPT_INVITE}?accountid=${id}`);
    console.log(response);
    return response;
  }

  async function PendingAccountList() {
    const response = await api.get(`${ApiEndpoints.PENDING_WORKPLACE}`);
    console.log(response);
    return response;
  }

export default {
 
  useAccountListService: (...args) => useMutation(AccountList, ...args),
  usePendingAccountListService: (...args) => useMutation(PendingAccountList, ...args),
  useAcceptInviteService: (...args) => useMutation(Accept, ...args),
};

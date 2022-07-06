import api from "@utils/api";
import { useMutation } from "react-query";
import { ApiEndpoints } from "src/shared/config/Endpoints";

async function registerUser(payload) {
  const response = await api.post(ApiEndpoints.USER_REGISTER, payload);
  return response;
}

async function LoginUser(payload) {
  const response = await api.post(ApiEndpoints.AUTHENTICATE, payload);
  return response;
}
async function ConfirmAccount(payload) {
  const response = await api.post(ApiEndpoints.CONFIRM_ACCOUNT, payload);
  return response;
}

async function AccountSelect(id) {
  const response = await api.get(`${ApiEndpoints.ACCOUNT_SELECT}?accountid=${id}`);
  console.log(response);
  return response;
}

async function UserData(id) {
  const response = await api.get(`${ApiEndpoints.USER_DATA}/${id}`);

  return response;
}

export default {
  useRegisterService: (...args) => useMutation(registerUser, ...args),
  useUserService: (...args) => useMutation(UserData, ...args),
  useLoginService: (...args) => useMutation(LoginUser, ...args),
  useConfirmAccount: (...args) => useMutation(ConfirmAccount, ...args),
  useAccountSelectService: (...args) => useMutation(AccountSelect, ...args),
};

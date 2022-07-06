import api from "@utils/api";
import { useMutation } from "react-query";
import { ApiEndpoints } from "src/shared/config/Endpoints";




async function AllState() {
  const response = await api.get(`${ApiEndpoints.ALL_STATE}`);
  console.log(response);
  return response;
}



export default {
 
  useAllStateService: (...args) => useMutation(AllState, ...args),

};

import api from "@utils/api";
import { useMutation } from "react-query";
import { ApiEndpoints } from "src/shared/config/Endpoints";





async function Activity(pagenumber,pagesize) {
    const response = await api.get(`${ApiEndpoints.ACTIVITY}?pagenumber=${pagenumber}&pagesize=${pagesize}`);
    console.log(response);
    return response;
  }

export default {
 

  useActivityService: (...args) => useMutation(Activity, ...args),
};

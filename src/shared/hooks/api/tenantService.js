import api from "@utils/api";
import { useMutation } from "react-query";
import { ApiEndpoints } from "src/shared/config/Endpoints";


async function CreateTenant(payload) {
    const response = await api.post(ApiEndpoints.CREATE_TENANT, payload);
    console.log(response);
    return response;
  }

  async function GetAllDepartments({ pageSize, pageIndex }) {
    const response = await api.get(`${ApiEndpoints.DEPARTMENT}?pageSize=${pageSize}&pageNumber=${pageIndex}`);
    console.log(pageSize);
    return response;
  }
  async function CreateDepartment() {
    const response = await api.post(`${ApiEndpoints.DEPARTMENT}`);
    console.log(response);
    return response;
  }
export default {
 
  useCreateTenantService: (...args) => useMutation(CreateTenant, ...args),
  useGetDepartmentService: (...args) => useMutation(GetAllDepartments, ...args),
  useCreateDepartmentService: (...args) => useMutation(CreateDepartment, ...args),
};

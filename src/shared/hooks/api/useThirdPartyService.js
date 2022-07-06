import api from "@utils/api";
import { useMutation } from "react-query";
import { ApiEndpoints } from "src/shared/config/Endpoints";

async function userEducation(id) {
  const response = await api.get(
    `${ApiEndpoints.THIRD_PARTY}/education/${id}?PageNumber=1&PageSize=10`
  );
  console.log(response);
  return response;
}

async function userExperience(id) {
  const response = await api.get(
    `${ApiEndpoints.THIRD_PARTY}/placeofwork/${id}?PageNumber=1&PageSize=10`
  );
  console.log(response);
  return response;
}

export default {
  useEducationService: (...args) => useMutation(userEducation, ...args),
  useExperienceService: (...args) => useMutation(userExperience, ...args),
};

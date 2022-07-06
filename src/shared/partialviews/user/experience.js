import ExperienceCardComponet from "@components/infocard/work_card";
import React, { useEffect, useState } from "react";
import thirdPartyService from "../../hooks/api/useThirdPartyService";
import "./styles.css";
const UserExperience = ({ userData, ...props }) => {
  const { mutateAsync: userExperience, isLoading } =
    thirdPartyService.useExperienceService();
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function userdata() {
      const response = await userExperience(userData.id);
      setData(response.data);
      setLoaded(true);
    }
    userdata();
  }, []);

  return (
    <ExperienceCardComponet title="Experience" data={data} loaded={loaded} />
  );
};

export default UserExperience;

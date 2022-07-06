import EduCardComponet from "@components/infocard/edu_card";
import React, { useEffect, useState } from "react";
import thirdPartyService from "../../hooks/api/useThirdPartyService";
import "./styles.css";
const UserEducation = ({ userData, ...props }) => {
  const { mutateAsync: userEducation, isLoading } =
    thirdPartyService.useEducationService();
  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function userdata() {
      const response = await userEducation(userData.id);
      console.log(response.data);
      setData(response.data);
      setLoaded(true);
    }
    userdata();
  }, []);

  return <EduCardComponet title="Education" data={data} loaded={loaded} />;
};

export default UserEducation;

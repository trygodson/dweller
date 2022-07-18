import { useEffect, useState } from 'react';
import CustomOverlay from '../../../../../shared/components/customOverlay';
import { community } from '../../../../../shared/hooks/api/testService';

const CommuintyUsers = () => {
  const [collectionList, setCollectionList] = useState([]);

  const [loading, setLoading] = useState(true);
  const loadTable = async () => {
    setLoading(true);
    // const res = await axios.get(`${BASE_URL}${ApiEndpoints.SPECIALIZATION}?search=${text}`);
    const res = await community({});
    setCollectionList(res.data);
    setLoading(false);
  };

  useEffect(async () => {
    await loadTable();
  }, []);

  const TheCollectionLIst = () => {
    return (
      <div className="w-full h-full">
        <table class="w-full mt-10 table-auto" style={{ overflowY: 'auto' }}>
          <thead>
            <tr>
              <th class="bg-gray-100 py-2 px-3 mx-1 text-left">Name</th>
              <th class="bg-gray-100 py-2 px-3 mx-1 text-left">Phone</th>
              <th class="bg-gray-100 py-2 px-3 mx-1 text-left">Email</th>
              <th class="bg-gray-100 py-2 px-3 mx-1 text-left">Commuity</th>
            </tr>
          </thead>
          <tbody>
            {collectionList.map((item, i) => {
              return (
                <tr key={i}>
                  <td className="py-3 px-2 ">{item.name}</td>
                  <td className="py-3 px-2 ">{item.phone}</td>
                  <td className="py-3 px-2 text-base">{item.email}</td>
                  <td className="py-3 px-2 text-base">{item.community}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <CustomOverlay active={loading}>
      <TheCollectionLIst />
    </CustomOverlay>
  );
};

export default CommuintyUsers;

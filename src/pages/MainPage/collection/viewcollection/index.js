import { useEffect, useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { community } from '../../../../shared/hooks/api/testService';
import { emptyicon } from '../../../../Entryfile/imagepath';
import CustomOverlay from '../../../../shared/components/customOverlay';
import { Button2 } from '../../../../shared/components/button';

const ViewCollection = (props) => {
  console.log(props);
  const [collectionList, setCollectionList] = useState([]);

  const [loading, setLoading] = useState(true);
  const loadTable = async (text, callback) => {
    setLoading(true);
    // const res = await axios.get(`${BASE_URL}${ApiEndpoints.SPECIALIZATION}?search=${text}`);
    const res = await community({});
    setCollectionList(res.data);
    setLoading(false);
  };

  useEffect(async () => {
    await loadTable();
  }, []);

  const deleteCollection = (i) => {
    const thelist = collectionList.filter((item) => item.name !== i.name);
    setCollectionList([...thelist]);
  };

  const nocollectionAdded = () => {
    return (
      <div className="flex flex-col h-full justify-center items-center">
        <p className="text-base font-bold ">No dwellers added Yet</p>
        <img src={emptyicon} width="150" />
        <span className="text-sm text-grey-400">
          This shows expected dwellers for a particular payment collection
        </span>
        <span className="text-sm text-indigo-800">Add at least one Dweller</span>
      </div>
    );
  };

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
    <main className="">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-5">
          <div className="w-full shadow bg-white py-7 px-5 rounded-md">
            <div className="mb-5">
              <h3 className="font-serif text-xl">Payment Details</h3>
            </div>

            <div className="my-3 pt-2 pb-3 flex justify-between items-center border-b border-gray-200">
              <h4 className="text-sm ">Payment Amount</h4>
              <p className="text-sm font-semibold ">₦1240000</p>
            </div>
            <div className="my-3 pt-3 pb-5 flex justify-between items-center border-b border-gray-200">
              <h4 className="text-sm ">Payment Type</h4>
              <p className="text-sm font-semibold">Recurring</p>
            </div>
            <div className="my-3 pt-3 pb-5 flex justify-between items-center border-b border-gray-200">
              <h4 className="text-sm ">Payment Method</h4>
              <p className="text-sm font-semibold">Bank Tranfer</p>
            </div>
            <div className="my-3 pt-3 pb-5 flex justify-between items-center border-b border-gray-200">
              <h4 className="text-sm ">Payment Method</h4>
              <p className="text-sm font-semibold">Bank Tranfer</p>
            </div>
            <div className="my-3 pt-3 pb-5 flex justify-between items-center border-b border-gray-200">
              <h4 className="text-sm ">Payment Method</h4>
              <p className="text-sm font-semibold">Bank Tranfer</p>
            </div>
            <div className="flex justify-center">
              <Button2
                classes={'flex justify-center items-center mr-2'}
                onClick={() => props.history.push('/app/add-collection')}
              >
                <FiEdit /> Edit
              </Button2>
              <Button2 classes={'flex justify-center items-center  hover:bg-red-700 bg-red-600'}>
                <FiTrash2 /> Delete
              </Button2>
            </div>
          </div>
        </div>
        <div className="col-span-7 h-full ">
          <div className="w-full h-full  bg-white p-5  rounded-md shadow ">
            <div className="mb-5">
              <h3 className="font-serif text-xl">Collection Members</h3>
            </div>

            <CustomOverlay active={loading}>
              <TheCollectionLIst />
            </CustomOverlay>
            {/* <div className="h-full w-full ">

            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ViewCollection;

import React, { useState } from 'react';
import { FcFullTrash, Fc } from 'react-icons/fc';
import { GrClose } from 'react-icons/gr';
import InputField, { AnotherInputField } from '../../../../shared/components/customforminput';
import { community } from '../../../../shared/hooks/api/testService';
import { emptyicon } from '../../../../Entryfile/imagepath';
import { Button2 } from '../../../../shared/components/button';
import BreadCrumb from '../../../../shared/components/breadcrumb';
import DModal from '../../../../shared/components/dmodal';
import CustomSelect from '../../../../shared/components/selectinput';
import { useFormik } from 'formik';

// const validate = (values) => {
//   const errors = {};
//   if (!values.name) {
//     errors.name = 'Required';
//   }

//   if (!values.phone) {
//     errors.phone = 'Required';
//   } else if (values.phone.length >= 11) {
//     errors.phone = 'Must be at least characters or less';
//   }

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }
//   if (!values.community) {
//     errors.community = 'Required';
//   }

//   return errors;
// };

const AddStaffs = ({ location }) => {
  const [collectionList, setCollectionList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const loadOptions = async (text, callback) => {
    // const res = await axios.get(`${BASE_URL}${ApiEndpoints.SPECIALIZATION}?search=${text}`);
    const res = await community({});
    // const json = res.json();
    callback(
      res.data.map((val) => ({
        label: `${val.name} ${val.community}`,
        value: val,
      })),
    );
  };

  const onChangeOption = (i) => {
    setCollectionList([...collectionList, i.value]);
  };

  const deleteCollection = (i) => {
    const thelist = collectionList.filter((item) => item.name !== i.name);
    setCollectionList([...thelist]);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      community: '',
    },
    // validate,
    onSubmit: async (values) => {
      console.log(values);
      // await community2({}).data.push({
      //   name: values.name,
      //   phone: values.phone,
      //   email: values.email,
      //   community: values.community,
      // });
    },
  });

  const nocollectionAdded = () => {
    return (
      <div className="flex flex-col h-full justify-center items-center">
        <p className="text-base font-bold ">No Commuinity Added Yet</p>
        <img src={emptyicon} width="150" />
        <span className="text-sm text-grey-400">
          This shows expected community for a particular Staff
        </span>
        <span className="text-sm text-indigo-800">Add at least one Community For a Staff</span>
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
              <th class="bg-gray-100 py-2 px-3 mx-1 text-left"></th>
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
                  <td>
                    <div className="cursor-pointer" onClick={() => deleteCollection(item)}>
                      <FcFullTrash size={17} color="red" />
                    </div>
                  </td>
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
      <BreadCrumb location={location} />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <div className="w-full shadow bg-white py-7 px-5 rounded-md">
            <div className="mb-5">
              <h3 className="font-serif text-xl">Add Staffs With Communities</h3>
            </div>

            <div className="my-1">
              <InputField inputType="input" type="text" label={'Name'} placeholder="" />
            </div>
            <div className="my-1">
              <InputField inputType="input" type="text" label={'Email'} placeholder="" />
            </div>
            <div className="my-1">
              <InputField inputType="input" type="text" label={'Password'} placeholder="" />
            </div>
            <div className="my-1">
              <InputField inputType="input" type="text" label={'Phone'} placeholder="" />
            </div>
            <div className="flex justify-center">
              <Button2>Add Staff</Button2>
            </div>
          </div>
        </div>
        <div className="col-span-8 h-full ">
          <div className="w-full h-full  bg-white p-5  rounded-md shadow ">
            <div className="w-full flex flex-row">
              <div className="basis-1/4">
                <AnotherInputField
                  inputType="select"
                  className={
                    'form-input px-3 py-2 w-24 bg-transparent w-full border-none rounded focus:ring-0  focus:outline-0 focus:border-none '
                  }
                >
                  <option value={''} className="text-gray-600">
                    Filter
                  </option>
                  <option>Date</option>
                  <option>Price</option>
                  <option>Location</option>
                </AnotherInputField>
              </div>
              <div className="basis-3/4">
                <CustomSelect
                  loadOptions={loadOptions}
                  setModalOpen={setModalOpen}
                  onChangeFunction={onChangeOption}
                  placeholder="Add Communities"
                />
              </div>
            </div>
            <div className="h-full">
              {collectionList.length == 0 ? nocollectionAdded() : <TheCollectionLIst />}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddStaffs;

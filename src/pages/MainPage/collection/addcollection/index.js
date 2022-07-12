import React, { useState } from 'react';
import AsyncInput from 'react-select/async';
import { FcFullTrash, Fc } from 'react-icons/fc';
import { GrClose } from 'react-icons/gr';
import InputField, { AnotherInputField } from '../../../../shared/components/customforminput';
import { community, community2 } from '../../../../shared/hooks/api/testService';
import { emptyicon } from '../../../../Entryfile/imagepath';
import { Button2 } from '../../../../shared/components/button';
import BreadCrumb from '../../../../shared/components/breadcrumb';
import DModal from '../../../../shared/components/dmodal';

const customStyles = {
  option: (provided, state) => {
    // console.log(provided);
    return {
      ...provided,
      color: '#1a2b46',
      fontSize: '15px',
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20,
    };
  },
  noOptionsMessage: (provided, state) => {
    return {
      ...provided,
      // color: '#1a2b46',
      // fontSize: '15px',
      // borderBottom: '1px dotted pink',
      // color: state.isSelected ? 'red' : 'blue',
      // padding: 20,
    };
  },
  menu: (provided, state) => {
    return {
      ...provided,
      color: '#1a2b46',
      fontSize: '15px',
      borderBottom: '1px dotted pink',
    };
  },
  input: (provided, state) => ({
    ...provided,

    borderColor: state.isFocused ? '#F7F7F7' : null,
  }),
  control: (provided, state) => {
    return {
      ...provided,
      '&:hover': {
        borderColor: '#000000',
      },
      background: '#fff',
      borderColor: '#000000',
      border: '1px solid #000000',
      boxShadow: '0 0 0 1px #000000',
      margin: '0 0 0 4px',
      padding: '1px 3px 1px 3px',
      borderColor: state.isFocused ? '#F7F7F7' : null,
      width: '100%',
    };
  },
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

// Modal.setAppElement('#yourAppElement');

const AddCollection = ({ location }) => {
  const [collectionList, setCollectionList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const loadDoctoOptions = async (text, callback) => {
    // const res = await axios.get(`${BASE_URL}${ApiEndpoints.SPECIALIZATION}?search=${text}`);
    const res = await community2({});
    // const json = res.json();
    callback(
      res.data.map((val) => ({
        label: `${val.name} ${val.community}`,
        value: val,
      })),
    );
  };

  const selectDoctor = (i) => {
    setCollectionList([...collectionList, i.value]);
  };

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

  const theOption = (props) => {
    return <h3>There's Noting Here</h3>;
  };
  return (
    <main className="">
      <BreadCrumb location={location} />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <div className="w-full shadow bg-white py-7 px-5 rounded-md">
            <div className="mb-5">
              <h3 className="font-serif text-xl">Add Payment Collection</h3>
            </div>

            <div className="my-1">
              <InputField inputType="input" type="text" label={'Payment Amount'} placeholder="" />
            </div>
            <div className="my-1">
              <InputField inputType="select" label={'Payment Type'} placeholder="">
                <option>Once</option>
                <option>Recurring</option>
              </InputField>
            </div>
            <div className="my-1">
              <InputField inputType="input" type="text" label={'Payment Location'} placeholder="" />
            </div>
            <div className="my-1">
              <InputField inputType="input" type="text" label={'Payment Location'} placeholder="" />
            </div>
            <div className="my-1">
              <InputField inputType="input" type="text" label={'Payment Location'} placeholder="" />
            </div>
            <div className="flex justify-center">
              <Button2>Submit Collection</Button2>
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
                <AsyncInput
                  styles={customStyles}
                  loadOptions={loadDoctoOptions}
                  touchUi={true}
                  components={{
                    Option: theOption,
                  }}
                  noOptionsMessage={({ input }) => (
                    <h3>
                      Nothing here{' '}
                      <span
                        className="font-bold text-indigo-900 cursor-pointer"
                        onClick={() => setModalOpen(true)}
                      >
                        Add Now
                      </span>
                    </h3>
                  )}
                  onBlur={(event) => event.preventDefault()}
                  placeholder="Search for community"
                  onChange={(val) => selectDoctor(val)}
                />
              </div>
            </div>
            <div className="h-full">
              {collectionList.length == 0 ? nocollectionAdded() : <TheCollectionLIst />}
            </div>
          </div>
        </div>
      </div>
      <DModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div
          className="rounded-full absolute cursor-pointer shadow p-1  top-0 right-0"
          onClick={() => setModalOpen(false)}
          // style={{ top: '-4px', right: '-2px', zIndex: 3 }}
        >
          <GrClose color="#FF0000" />
        </div>
        <div className="w-80 bg-white rounded-md ">
          <div className="my-1">
            <InputField inputType="input" type="text" label={'Name'} placeholder="" />
          </div>
          <div className="my-1">
            <InputField inputType="input" type="text" label={'Phone Number'} placeholder="" />
          </div>
          <div className="my-1">
            <InputField inputType="input" type="email" label={'Email'} placeholder="" />
          </div>
          <div className="my-1">
            <InputField inputType="input" type="text" label={'Commuinity'} placeholder="" />
          </div>
          <div className="flex justify-center">
            <Button2 classes={'bg-blue-800'}>submit</Button2>
          </div>
        </div>
      </DModal>
    </main>
  );
};

export default AddCollection;

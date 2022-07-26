import { useFormik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { Table } from 'reactstrap';

const StaffTableModal = ({ viewData }) => {
  const [formData, setformData] = useState({ ...viewData });
  const nameRef = useRef();

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const color = [
    'bg-emerald-100 text-emerald-600',
    'bg-cyan-100 text-cyan-600',
    'bg-indigo-100 text-indigo-600',
    'bg-fuchsia-100 text-fuchsia-600',
    'bg-rose-100 text-rose-600',
  ];

  const formik = useFormik({
    initialValues: {
      // name: '',
      // phone: '',
      // email: '',
      // community: '',
      ...viewData,
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

  const handleEdit = (e) => {
    e.persist();
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <table className="new up w-80">
      <thead className="px-5  bg-gray-100">
        <th className="text-gray-700 py-2">Item</th>
        <th className="text-gray-700 py-2">Values</th>
      </thead>
      <tbody>
        {/* <form onSubmit={formik.handleSubmit}> */}
        {Object.keys(viewData).map((keyName, i) => {
          return (
            <tr key={i} style={{ width: '100%' }} className="border-b border-gray-200 my-1 px-3">
              <td style={{ padding: '10px 15px' }}>{keyName}</td>

              <td style={{ padding: '10px 15px' }}>
                {Array.isArray(viewData[keyName]) ? (
                  <div className="flex flex-col justify-center">
                    {viewData[keyName].map((item, ind) => (
                      <div className={`my-1 p-1 text-center text-sm ${color[ind]}`}>{item}</div>
                    ))}
                  </div>
                ) : (
                  <input
                    className="text-gray-500 px-1 border-gray-100  focus:outline-0 py-0 focus:ring-0 "
                    name={keyName}
                    ref={keyName === 'name' ? nameRef : null}
                    value={formData[keyName]}
                    onChange={handleEdit}
                  />
                )}
              </td>
            </tr>
          );
        })}
        {/* </form> */}
      </tbody>
    </table>
  );
};

export default StaffTableModal;

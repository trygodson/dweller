import React, { useRef } from 'react';
import { Row, Col, Table } from 'reactstrap';
import { GrView } from 'react-icons/gr';
import RippleTable from '../../../../shared/components/table/table/TableCard';
import { staffs } from '../../../../shared/hooks/api/testService';
import { useHistory } from 'react-router-dom';
import StaffTableModal from './stafftablemodal';

const StaffsTable = (props) => {
  const { push } = useHistory();
  const modalRef = useRef();

  // const randcolor = () => {
  //   const color = [
  //     'bg-emerald-300 text-emerald-600',
  //     'bg-cyan-300 text-cyan-600',
  //     'bg-indigo-300 text-indigo-600',
  //     'bg-fuchsia-300 text-fuchsia-600',
  //     'bg-rose-300 text-rose-600',
  //   ];

  //   let rand = Math.random() * (color.length - 1) + 0;
  //   return color[rand];
  // };
  // console.log(randcolor());

  const decorator = [
    {
      id: 'name',
      label: 'Name',
      accessor: 'name',
      Cell: (props) => <>{props.value}</>,
    },
    {
      id: 'email',
      label: 'Email',
      accessor: 'email',
      Cell: (props) => <>{props.value}</>,
    },
    {
      id: 'phone',
      label: 'Phone',
      accessor: 'phone',
      Cell: (props) => <>{props.value}</>,
    },
    {
      id: 'type',
      label: 'Commuinty Assigned',
      accessor: 'communities',
      Cell: (props) => {
        const color = [
          'bg-emerald-100 text-emerald-600',
          'bg-cyan-100 text-cyan-600',
          'bg-indigo-100 text-indigo-600',
          'bg-fuchsia-100 text-fuchsia-600',
          'bg-rose-100 text-rose-600',
        ];
        // const randcolor = () => {

        //   let rand = Math.random() * (color.length - 1) + 0;
        //   return color[rand];
        // };
        // console.log(randcolor());

        return (
          <div className="flex flex-col justify-center">
            {props.value.map((item, i) => (
              <div className={`my-1 p-1 text-center text-sm ${color[i]}`}>{item}</div>
            ))}
          </div>
        );
      },
    },

    // {
    //   id: 'action',
    //   label: 'View',
    //   disableSorting: true,
    //   accessor: 'name',
    //   Cell: (props) => (
    //     <div className="flex w-full justify-center items-center">
    //       <div
    //         className="cursor-pointer bg-green-100 hover:bg-green-300 w-1/2 flex justify-center items-center rounded-md px-2 py-1"
    //         onClick={() => push('/app/view-community', { id: props.value })}
    //       >
    //         <GrView color="#0000ff" size={21} />
    //       </div>
    //     </div>
    //   ),
    // },
  ];

  return (
    <Row className="">
      <Col lg={12}>
        <RippleTable
          title={'Recent Request'}
          column={decorator}
          hasActionMenu={false}
          rowAction={() => modalRef.current.props.toggle()}
          //handleView={(row)=>alert(row.fullName)}
          fetchService={staffs}
          showEdit
          modalComponent={StaffTableModal}
        />
      </Col>
    </Row>
  );
};

export default StaffsTable;

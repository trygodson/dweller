import { useRef } from 'react';
import { Row, Col } from 'reactstrap';
import { GrView } from 'react-icons/gr';
import RippleTable from '../../../../shared/components/table/table/TableCard';
import { employees } from '../../../../shared/hooks/api/testService';
import { useHistory } from 'react-router-dom';

const CollectionTable = (props) => {
  const { push } = useHistory();
  const modalRef = useRef();
  const decorator = [
    {
      id: 'name',
      label: 'Full Name',
      accessor: 'name',
      Cell: (props) => <>{props.value}</>,
    },
    {
      id: 'date',
      label: 'Date Created',
      accessor: 'date_created',
      Cell: (props) => <>{props.value}</>,
    },
    {
      id: 'amount',
      label: 'Amout Generated',
      accessor: 'amount_generated',
      Cell: (props) => <>{props.value}</>,
    },

    {
      id: 'pending',
      label: 'Pending Amount',
      disableSorting: true,
      accessor: 'pending_amount',
      Cell: (props) => <div style={{ color: 'green' }}>{props.value}</div>,
    },
    {
      id: 'allusers',
      label: 'All Users',
      disableSorting: true,
      accessor: 'all_users',
      Cell: (props) => <div style={{ color: 'green' }}>{props.value}</div>,
    },
    {
      id: 'paidusers',
      label: 'Paid Users',
      disableSorting: true,
      accessor: 'paid_users',
      Cell: (props) => <div style={{ color: 'green' }}>{props.value}</div>,
    },
    {
      id: 'unpaidusers',
      label: 'UnPaid Users',
      disableSorting: true,
      accessor: 'unpaid_users',
      Cell: (props) => <div style={{ color: 'green' }}>{props.value}</div>,
    },

    {
      id: 'action',
      label: 'View',
      disableSorting: true,
      accessor: 'name',
      Cell: (props) => (
        <div
          className="cursor-pointer"
          onClick={() => push('/app/view-collection', { id: props.value })}
        >
          <GrView color="#0000ff" size={21} />
        </div>
      ),
    },
  ];

  return (
    <Row className="">
      <Col lg={12}>
        <RippleTable
          title={'Recent Request'}
          column={decorator}
          hasActionMenu={true}
          // rowAction={() => modalRef.current.props.toggle()}
          //handleView={(row)=>alert(row.fullName)}
          fetchService={employees}
        />
      </Col>
    </Row>
  );
};

export default CollectionTable;

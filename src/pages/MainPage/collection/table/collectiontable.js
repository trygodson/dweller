import { useRef } from 'react';
import { Row, Col } from 'reactstrap';
import RippleTable from '../../../../shared/components/table/table/TableCard';
import { employees } from '../../../../shared/hooks/api/testService';

const CollectionTable = () => {
  const modalRef = useRef();
  const decorator = [
    {
      id: 'fullName',
      label: 'First Name',
      accessor: 'fullName',
      Cell: (props) => <>{props.value}</>,
    },
    {
      id: 'email',
      label: 'Email',
      accessor: 'email',
      Cell: (props) => <>{props.value}</>,
    },
    {
      id: 'Mobile',
      label: 'Mobile',
      accessor: 'mobile',
      Cell: (props) => <>{props.value}</>,
    },

    {
      id: 'department',
      label: 'department',
      disableSorting: true,
      accessor: 'department',
      Cell: (props) => <div style={{ color: 'green' }}>{props.value}</div>,
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

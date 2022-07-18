import { useRef } from 'react';
import { Row, Col } from 'reactstrap';
import { GrView } from 'react-icons/gr';
import RippleTable from '../../../../shared/components/table/table/TableCard';
import { communityTable } from '../../../../shared/hooks/api/testService';
import { useHistory } from 'react-router-dom';

const CommuintyTable = (props) => {
  const { push } = useHistory();
  const modalRef = useRef();
  const decorator = [
    {
      id: 'name',
      label: 'Commuinity Name',
      accessor: 'name',
      Cell: (props) => <>{props.value}</>,
    },
    {
      id: 'users',
      label: 'Users',
      accessor: 'users',
      Cell: (props) => <>{props.value}</>,
    },
    {
      id: 'type',
      label: 'Commuinty Type',
      accessor: 'type',
      Cell: (props) => <>{props.value}</>,
    },

    {
      id: 'action',
      label: 'View Users',
      disableSorting: true,
      accessor: 'name',
      Cell: (props) => (
        <div className="flex w-full justify-center items-center">
          <div
            className="cursor-pointer bg-green-100 hover:bg-green-300 w-1/2 flex justify-center items-center rounded-md px-2 py-1"
            onClick={() => push('/app/view-community', { id: props.value })}
          >
            <GrView color="#0000ff" size={21} />
          </div>
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
          fetchService={communityTable}
        />
      </Col>
    </Row>
  );
};

export default CommuintyTable;

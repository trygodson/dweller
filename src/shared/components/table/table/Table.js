/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
import empty from '../../../../assets/empty.png';
import classnames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { usePagination, useSortBy, useTable } from 'react-table';
import {
  Button,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  InputGroup,
  Row,
  Table,
  UncontrolledButtonDropdown,
} from 'reactstrap';
import { Colxx } from '../../common/rBootstrap';
import DatatablePagination from './DataTablePagination';
import 'react-loading-skeleton/dist/skeleton.css';

import '../datatables.scss';
import '../table.scss';
import { BsArrowCounterclockwise, BsPlus, BsSearch } from 'react-icons/bs';
import Skeleton from 'react-loading-skeleton';

function RTable({
  columns,
  data,
  divided = false,
  defaultPageSize = 30,
  hover = true,
  responsive = true,
  searchButtonOutline = true,
  showPageSizeOptions = true,
  showPageJump = false,
  hasActionMenu = true,
  onDelete,
  onView,
  onEdit,
  onViewMore,
  onSearch,
  showSearch = false,
  showEdit = false,
  showDelete = false,
  showView = true,
  pagination = true,
  idAccessor = 'id',
  loading,
  pageCount: controlledPageCount,
  fetchData,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,

    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: defaultPageSize },
      manualPagination: true,
      pageCount: controlledPageCount,
      autoResetPage: false,
    },
    useSortBy,
    usePagination,
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);
  const { push } = useHistory();
  const [keyword, setKeyword] = useState('');

  const handleSearch = async (e) => {
    onSearch(keyword);
  };

  const handleChangeSearch = async (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      {!showSearch && <div className="row somethings"></div>}
      {
        <>
          <table
            {...getTableProps()}
            className={`table ${classnames({
              // 'table-divided': divided,
            })}`}
            responsive={responsive}
            hover={hover}
          >
            <thead style={{ borderBottom: '' }}>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} style={{ width: '100%' }}>
                  {!loading ? (
                    headerGroup.headers.map((column, columnIndex) => (
                      <th
                        key={`th_${columnIndex}`}
                        {...column.getHeaderProps(column.getSortByToggleProps())}
                        className={
                          column.isSorted
                            ? column.isSortedDesc
                              ? 'sorted-desc '
                              : 'sorted-asc '
                            : ''
                        }
                      >
                        <span style={{}}>{column.render('label')}</span>
                      </th>
                    ))
                  ) : (
                    <Skeleton
                      height={40}
                      width="100%"
                      // baseColor="#297d4e"
                      // highlightColor="#297d4e"
                    />
                  )}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {!loading ? (
                page.map((row, rowIndex) => {
                  prepareRow(row);
                  return (
                    <tr
                      {...row.getRowProps()}
                      onClick={() => !hasActionMenu && onView(data[rowIndex])}
                      style={{ cursor: 'pointer', width: '100%' }}
                    >
                      {!loading ? (
                        row.cells.map((cell, cellIndex) => (
                          <td
                            key={`td_${cellIndex}`}
                            id={'action' + cellIndex}
                            {...cell.getCellProps({
                              className: cell.column.cellClass,
                            })}
                            style={{ padding: '18px 10px' }}
                          >
                            {cell.render('Cell')}
                          </td>
                        ))
                      ) : (
                        <Skeleton width="100%" height={30} />
                      )}
                      {!hasActionMenu && (
                        <td>
                          <UncontrolledButtonDropdown
                            size="xs"
                            //isOpen={false}
                            //toggle={() => setDropdownSplitOpen(!dropdownSplitOpen)}
                          >
                            <div className="btn btn-primary btn-lg pl-4 pr-0">Action</div>
                            <DropdownToggle
                              size="xs"
                              caret
                              color="primary"
                              className="dropdown-toggle-split btn-lg"
                            />
                            <DropdownMenu right>
                              {showView && (
                                <DropdownItem onClick={() => onView(data[rowIndex])}>
                                  View
                                </DropdownItem>
                              )}
                              {showEdit && (
                                <DropdownItem onClick={() => onEdit(data[rowIndex])}>
                                  Edit
                                </DropdownItem>
                              )}
                              {showDelete && (
                                <DropdownItem onClick={() => onDelete(data[rowIndex])}>
                                  Delete
                                </DropdownItem>
                              )}
                            </DropdownMenu>
                          </UncontrolledButtonDropdown>
                        </td>
                      )}
                    </tr>
                  );
                })
              ) : (
                <>
                  <tr className="my-2" style={{ width: '100%' }}>
                    <Skeleton height={75} width="100%" />
                  </tr>
                  <tr className="my-2" style={{ width: '100%' }}>
                    <Skeleton height={75} width="100%" />
                  </tr>
                  <tr className="my-2" style={{ width: '100%' }}>
                    <Skeleton height={75} width="100%" />
                  </tr>
                  <tr className="my-2" style={{ width: '100%' }}>
                    <Skeleton height={75} width="100%" />
                  </tr>
                  <tr className="my-2" style={{ width: '100%' }}>
                    <Skeleton height={75} width="100%" />
                  </tr>
                  <tr className="my-2" style={{ width: '100%' }}>
                    <Skeleton height={75} width="100%" />
                  </tr>
                </>
              )}
            </tbody>
          </table>

          {pagination && (
            <DatatablePagination
              page={pageIndex}
              pages={pageCount}
              canPrevious={canPreviousPage}
              canNext={canNextPage}
              pageSizeOptions={[10, 20, 30, 40, 50]}
              showPageSizeOptions={showPageSizeOptions}
              showPageJump={showPageJump}
              defaultPageSize={pageSize}
              onPageChange={(p) => gotoPage(p)}
              onPageSizeChange={(s) => setPageSize(s)}
              paginationMaxSize={pageCount}
            />
          )}
          {!pagination && (
            <Row>
              <Colxx xxs="12">
                <Button
                  color="primary"
                  size="s"
                  className="mb-2"
                  onClick={() => {
                    if (onViewMore != null) onViewMore();
                  }}
                >
                  View More Transactions
                </Button>
              </Colxx>
            </Row>
          )}
        </>
      }
    </>
  );
}

export default RTable;

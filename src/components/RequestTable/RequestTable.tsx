import React, { useCallback, useState } from 'react';
import styles from './RequestTable.module.css'
import { Table } from 'antd';
import { SelectDestination } from '../Select/Select';
import { requestsSelector } from '../../redux/requests/requestsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { PAGE_SIZE } from '../../constants';
import { DefaultRecordType } from '../../types';

export const columns = [
  {
    title: 'Заявка',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Погрузка',
    dataIndex: 'loading',
    render: (address: string, record: { key: number }) =>
      <SelectDestination address={address} keyNumber={record.key} type={"loading"}/>
  },
  {
    title: 'Разгрузка',
    dataIndex: 'unloading', 
    render: (address: string,  record: { key: number }) =>
      <SelectDestination  address={address} keyNumber={record.key} type={"unloading"}/>
  },
];

const RequestTable: React.FC = () => {
  const { activeRequest, requests } = useSelector(requestsSelector);
  const [ activeRowIndex, setActiveRowIndex ] = useState(activeRequest);
  const [ pageNumber, setPageNumber ] = useState(1);
  const dispatch = useDispatch();

  const updateActiveRequest = useCallback((requestKey) => dispatch({ type: 'request/UPDATE_ACTIVE_REQUEST', payload: requestKey }), [dispatch]);

  const handlePageChange = (pageNumber: number) => {
    setPageNumber(pageNumber)
  }

  const addRowClickHandler = (record: DefaultRecordType) => {
    record.onClick = clickRow.bind(record, record.key)
    return record
  }

  const clickRow = (num: number) => {
    updateActiveRequest(num)
    setActiveRowIndex(num) 
  }

  const setRowClassName = (_record: DefaultRecordType, index: number) => {
    const pageRange = pageNumber > 1 ? PAGE_SIZE * pageNumber - (PAGE_SIZE - 1) : 1;
    const currentRow = index + pageRange
    return (currentRow === activeRowIndex ? `${styles.tableRowActive}` : "")
  }
  
  return (
    <div className={styles.requestList}>
      <Table
          pagination = {{
            current: pageNumber,
            total: requests.length,
            pageSize: PAGE_SIZE,
            onChange: handlePageChange,
            hideOnSinglePage: false,
            position: ['bottomCenter'],
          }}  
          columns={columns}
          dataSource={requests}
          rowClassName={setRowClassName} 
          onRow={addRowClickHandler}
      />
    </div>
  );
}

export { RequestTable };
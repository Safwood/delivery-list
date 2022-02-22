import React, { useState } from 'react';
import { data } from './mock'
import styles from './RequestTable.module.css'
import { Table } from 'antd';
import { SelectDestination } from '../Select/Select'

export const columns = [
  {
    title: 'Заявка',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Загрузка',
    dataIndex: 'loading',
    render: (address: string, record: { key: number }) => {
    return data.length >= 1 ? (
          <SelectDestination address={address} key={record.key} type={"loading"}/>
      ) : null},
  },
  {
    title: 'Выгрузка',
    dataIndex: 'unloading', 
    render: (address: string,  record: { key: number }) =>
    data.length >= 1 ? (
          <SelectDestination  address={address} key={record.key} type={"unloading"}/>
      ) : null,
  },
];

const RequestTable: React.FC = () => {
  const [ activeRowIndex, setActiveRowIndex ] = useState(1);
  const [ pageNumber, setPageNumber ] = useState(1);

  const handlePageChange = (pageNumber: number) => {
    setPageNumber(pageNumber)
  }

  const addRowClickHandler = (record: any) => {
    record.onClick = clickRow.bind(record, record.key)
    return record
  }

  const clickRow = (num: number) => {
    setActiveRowIndex(num) 
  }

  const setRowClassName = (_record: any, index: number) => {
    const pageRange = pageNumber > 1 ? 10 * pageNumber - 9 : 1;
    const currentRow = index + pageRange
    return (currentRow === activeRowIndex ? `${styles.tableRowActive}` : "")
  }
  
  return (
    <div className={styles.requestList}>
      <Table
          pagination = {{
            current: pageNumber,
            total: data.length,
            pageSize: 10,
            onChange: handlePageChange,
            hideOnSinglePage: true,
            position: ['bottomCenter'],
          }}  
          columns={columns}
          dataSource={data}
          rowClassName={setRowClassName} 
          onRow={addRowClickHandler}
      />
    </div>
  );
}

export { RequestTable };
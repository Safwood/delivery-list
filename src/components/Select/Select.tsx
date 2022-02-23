import { FC, useCallback } from 'react';
import { Select } from 'antd';
import { addresses } from '../../constants'
import { useDispatch, useSelector } from 'react-redux';
import { requestsSelector } from '../../redux/requests/requestsSelectors';
import { Request, DefaultRecordType } from '../../types';

const { Option } = Select;

type Props = {
  address: string,
  keyNumber: number,
  type: "loading" | "unloading"
}

const SelectDestination: FC<Props> = ({ address, keyNumber, type }) => {
  const { requests } = useSelector(requestsSelector);
  const currentRequest = requests.find((request: Request) => request.key === keyNumber);
  const dispatch = useDispatch();

  const updateRequest = useCallback((request) => dispatch({ type: 'request/UPDATE_REQUEST', payload: request }), [dispatch]);

  const handleChange = (value: string, record: DefaultRecordType) => {
    const newAddressCoords = (addresses.find(address =>  address.id === record.id))?.coords;
    const newRequest = {
      ...currentRequest,
      [type]: value,
      route: {
        ...currentRequest?.route,
        [type]: newAddressCoords
      }
    }

    updateRequest(newRequest)
  }

  return (
    <>
      <Select dropdownMatchSelectWidth={false} defaultValue={address} value={address} style={{ width: 250 }} onChange={handleChange}>
        {addresses.map((item, index) => {
            return <Option key={index} id={item.id} value={item.address}>{item.address}</Option>
          }
        )}
      </Select>
    </>
  )
}

export { SelectDestination };
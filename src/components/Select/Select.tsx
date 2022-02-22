import React, { FC, useState } from 'react';
import { Select } from 'antd';
import { addresses } from '../../constants'

const { Option } = Select;

type Props = {
  address: string,
  key: number,
  type: "loading" | "unloading"
}

const SelectDestination: FC<Props> = ({ address, }) => {
  const [destination, setDestination] = useState(address)

  const handleChange = (value: string) => {
    setDestination(value)
  }

  return (
    <>
      <Select dropdownMatchSelectWidth={false} defaultValue={destination} value={destination} style={{ width: 250 }} onChange={handleChange}>
        {addresses.map((item, index) => {
            return <Option key={index} value={item.address}>{item.address}</Option>
          }
        )}
      </Select>
    </>
  )
}

export { SelectDestination };
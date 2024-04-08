import React from 'react'
import C_card from '../Cards/C_card'
import Pdata from './P_data'

export default function Product() {
  return (
    <div className='product'>
        <C_card title={"Custom Products"} api={Pdata} />
    </div>
  )
}

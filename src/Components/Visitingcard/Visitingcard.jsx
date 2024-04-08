import React from 'react'
import "./Visitingcard.css"
import C_card from '../Cards/C_card'
import Vdata from './Visit data/V_Data'
export default function Visitingcard() {
  return (
    <>
        <div className='visit'> 
            <C_card title={"Visiting Cards"} api={Vdata} />
        </div>
    </>
  )
}

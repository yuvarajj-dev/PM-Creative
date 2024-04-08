import React from 'react'
// import "./Station.css"
import C_card from '../Cards/C_card'
import Sdata from './S_data'

export default function Staiton() {
    return (
        <>
            <div className='station'>
                <C_card title={"Stationary Products"} api={Sdata} />
            </div>
        </>
    )
}

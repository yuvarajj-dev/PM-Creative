import React from 'react'
import C_card from '../Cards/C_card'
import Photodata from './Photodata'

export default function Photo() {
  return (
    <>
        <div className="photo">
            <C_card title={"Photo Frames and Products"} api={Photodata}/>
        </div>
    </>
  )
}

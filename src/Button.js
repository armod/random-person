import React from 'react'
import { FaEnvelopeOpen, FaUser, FaCalendarTimes, FaMap, FaPhone, FaLock } from 'react-icons/fa'

const Button = ({ handleValue, dataLabel, icon }) => {
  return (
    <button className='icon' data-label={dataLabel} onMouseOver={handleValue}>
      {icon}
    </button>
  )
}

export default Button

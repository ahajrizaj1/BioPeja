import React from 'react'
import './style/backdrop.scss'

const Backdrop = (prop) => {
  return (
    <div className='backdrop' onClick={prop.close}></div>
  )
}

export default Backdrop
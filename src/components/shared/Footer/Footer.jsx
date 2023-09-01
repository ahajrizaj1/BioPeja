import React, { useState } from 'react'
import './style/footer.scss'
import { Email, Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import { Button } from '@mui/material'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [err, setErr] = useState('')

  const handleEmailSubmit = (e) => {
    e.preventDefault()

    console.log('Email', email);
    setEmail('')

    if(!email.includes('@')){
      setErr('Please add a valid email address')
    }
  }
  return (
    <div className='footer'>
        <div className="icons">
          <Instagram className='__icon' />
          <Facebook className='__icon' />
          <Twitter className='__icon' />
          <LinkedIn className='__icon' />
        </div>
        <div className="inputs">
          <div className="input__container">
            <input placeholder='Enter your email here' value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            <Email className='email__icon' />
          </div>
          <p className='err' style={{
            color:'red',
            fontSize:'19px',
            marginTop:'10px',
            marginBottom:'15px'
          }}>{err}</p>
          <Button onClick={handleEmailSubmit} className='submit__btn' variant='contained' color='warning'>Submit</Button>
        </div>
    </div>
  )
}

export default Footer
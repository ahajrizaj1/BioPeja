import React from 'react'
import Navbar from '../../components/shared/Navbar/Navbar'
import LoginTItle from '../../components/Login/LoginTItle'
import Form from '../../components/Login/Form'
import Footer from '../../components/shared/Footer/Footer'

const Login = () => {
  return (
    <div className='login__page'>
      <Navbar />
      <LoginTItle />
      <Form />
      <Footer />
    </div>
  )
}

export default Login
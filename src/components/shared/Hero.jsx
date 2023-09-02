import React from 'react'

import './style/hero.scss'
import { Button } from '@mui/material'

const Hero = () => {
  return (
    <div className='hero'>
        <h1>Zgjidhe llojin e mjaltit tend te preferuar</h1>
        <p>Ne BioPeja kemi shume lloje te mjaltave, ku prej tyre kemi: Mjalte Geshtenje, Mjalte nga Lulat, Mjalt nga pema e Akacia, dhe shume e shume lloje te tjera.</p>
        <Button variant='contained' color='warning'>Zgjidh...</Button>
    </div>
  )
}

export default Hero
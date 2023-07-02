import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
            <   Typography align='left' sx={{flexGrow: 1 }}>Justins Recipe App</Typography>
                <Button><Link to ={'/'}style={{color:'white', textDecoration:'none'}}>Indian</Link></Button>
                <Button><Link to ={'/'}style={{color:'white', textDecoration:'none'}}>Chinese</Link></Button>
                <Button><Link to = {'/add'} style={{color:'white', textDecoration:'none'}}>Add Cuisine</Link></Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar
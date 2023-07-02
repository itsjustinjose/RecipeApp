import { Container, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
      <Container>
        <Typography variant="body2" color="textSecondary">
          &copy; {new Date().getFullYear()} Recipe Application. All Rights Reserved.
        </Typography>
      </Container>
    </footer>
    </div>
  )
}

export default Footer
import React, {useState, useEffect} from 'react'
import {Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Stack, Typography} from '@mui/material'
import './Footer.css'
const Footer = () => {
  const copyright = new Date()
  const year = copyright.getUTCFullYear()

  return (
    <div className='footer containers'>
      <p>{year} Educate, All rights reserved</p>
      <ul>
        <li>Terms of Service</li>
        <li>Privacy Policy </li>
      </ul>
      
    </div>
  )
}

export default Footer

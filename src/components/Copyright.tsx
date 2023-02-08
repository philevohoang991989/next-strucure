import { Typography } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'

export interface CopyRightProps {}

export default function App(props: CopyRightProps) {
  return (
    <Typography variant='body2' color='text.secondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

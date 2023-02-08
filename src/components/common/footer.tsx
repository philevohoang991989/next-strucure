import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import CopyRight from '../Copyright'

export function Footer() {
  return (
    <Box component='footer' py={2} textAlign='center'>
      <CopyRight />
    </Box>
  )
}

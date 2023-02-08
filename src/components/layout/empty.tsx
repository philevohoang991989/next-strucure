import { LayoutProps } from '@/models'
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import BgPage from '@/images/auth-background.png'

export function EmptyLayout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        backgroundImage: `url(${BgPage.src})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh'
      }}
    >
      {children}
    </Box>
  )
}

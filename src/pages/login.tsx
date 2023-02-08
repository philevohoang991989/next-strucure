import React from 'react'
import { LoginForm } from '@/components/auth'
import { EmptyLayout } from '@/components/layout'
import { useAuth } from '@/hooks'
import { LoginPayload } from '@/models'
import { Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import { transform } from 'typescript'

export interface LoginPageProps {}

export default function LoginPage(props: LoginPageProps) {
  const router = useRouter()
  const { login } = useAuth({
    revalidateOnMount: false
  })

  async function handleLoginSubmit(payload: LoginPayload) {
    try {
      await login(payload)
      router.push('/')
    } catch (error) {
      console.log('failed to login', error)
    }
  }
  return (
    <Box sx={{ backgroundColor: 'red' }}>
      <Paper
        elevation={4}
        sx={{
          position: 'absolute',

          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          p: 4,
          maxWidth: '480px',
          textAlign: 'left',
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
          borderRadius: '16px'
        }}
      >
        <Typography component='h1' variant='h5' mb={3}>
          Login
        </Typography>
        <LoginForm onSubmit={handleLoginSubmit} />
      </Paper>
    </Box>
  )
}
LoginPage.Layout = EmptyLayout

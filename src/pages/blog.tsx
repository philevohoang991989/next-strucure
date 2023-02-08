import { MainLayout } from '@/components/layout'
import { Container } from '@mui/material'
import * as React from 'react'

export interface BlogPageProps {}

export default function BlogPage(props: BlogPageProps) {
  return <Container maxWidth='sm'>Blog Page</Container>
}

BlogPage.Layout = MainLayout

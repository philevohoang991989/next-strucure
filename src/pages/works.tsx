import { MainLayout } from '@/components/layout'
import { Container } from '@mui/material'
import React from 'react'

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
  return <Container maxWidth='sm'>Works Page</Container>
}
WorksPage.Layout = MainLayout

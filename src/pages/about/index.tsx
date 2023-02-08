import { Header } from '@/components/common'
import { AdminLayout } from '@/components/layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Box, Typography, Button } from '@mui/material'

import styles from './about.module.scss'

// import dynamic from "next/dynamic";

// const Header = dynamic(()=>import('@/components/common/header'), {ssr: true})

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const [postList, setPostList] = useState([])
  const router = useRouter()

  console.log('About query: ', router.query)
  const page = router.query?.page

  useEffect(() => {
    if (!page) return
    ;(async () => {
      const response = await fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      const data = await response.json()

      setPostList(data.data)
    })()
  }, [page])

  function handleNextClick() {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(page) || 1) + 1
        }
      },
      undefined,
      { shallow: true }
    )
  }
  return (
    <Box>
      <Typography component='h1' variant='h3' color='primary.main'>
        About Page
      </Typography>

      <Header />
      <p className={styles.Title}>About</p>
      <ul>
        {postList.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <Button variant='text' color='primary' onClick={() => handleNextClick}>
        Next page
      </Button>
    </Box>
  )
}

AboutPage.Layout = AdminLayout
export const getStaticProps = async () => {
  return {
    props: {}
  }
}

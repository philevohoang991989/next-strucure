import Logo from '@/assets/icons/logo.svg'
import { useAuth } from '@/hooks'
import { ItemMenu } from '@/models'
import { Container, Stack } from '@mui/material'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { Box } from '@mui/system'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { ROUTE_LIST } from './routes'

export function HeaderDesktop() {
  const { logout, profile } = useAuth()
  const router = useRouter()

  const [listRouter, setListRouter] = useState<ItemMenu[]>()

  useEffect(() => {
    setListRouter(ROUTE_LIST)
  }, [])
  async function handleLogoutClick() {
    try {
      await logout()
      console.log('redirect to login page')
      router.push('/login')
    } catch (error) {
      console.log('failed to logout', error)
    }
  }
  async function handleLoginClick() {
    router.push('/login')
  }
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction='row' justifyContent='space-between'>
          <div className='logo' style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={Logo} alt='logo' />
          </div>
          <List sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            {listRouter &&
              listRouter.map((route: any) => (
                <ListItem sx={{ ml: 2, fontWeight: 'medium' }} key={route.path}>
                  <Link
                    href={route.path}
                    className={clsx({ active: router.pathname === route.path })}
                    passHref
                  >
                    {route.label}
                  </Link>
                </ListItem>
              ))}
            {profile ? (
              <Button variant='text' onClick={handleLogoutClick}>
                Logout
              </Button>
            ) : (
              <Button variant='text' onClick={handleLoginClick}>
                Login
              </Button>
            )}
          </List>
        </Stack>
      </Container>
    </Box>
  )
}

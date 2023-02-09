import avatar from '@/images/avatar.png'
import { Button, Stack, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import Image from 'next/image'

export interface HeroSectionProps {}

export default function HeroSection(props: HeroSectionProps) {
  return (
    <Box component='section' pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          spacing={8}
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
        >
          <Box>
            <Typography component='h1' variant='h3' fontWeight='bold' mb={{ xs: 3.5, md: 5 }}>
              Hi, I am John, <br />
              Creative Technologist
            </Typography>

            <Typography mb={{ xs: 3.5, md: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </Typography>

            <Button variant='contained' size='large'>
              Download Resume
            </Button>
          </Box>
          <Box>
            <Image src={avatar} width={250} height={250} alt='avatar' />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

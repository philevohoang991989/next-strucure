import HeroSection from "@/components/home/hero";
import { MainLayout } from "@/components/layout";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";
import { useTrans } from '../hooks';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { locale, locales, defaultLocale } = useRouter();
  const router = useRouter()

    const changeLang = (lang: any) => {
        router.push('/', '/', { locale: lang })
    }
  const trans = useTrans()
  return (
    <Box>
      <HeroSection />
      <Container>
        <p>locale: {locale}</p>
        <p>locales: {locales}</p>
        <p>defaultLocale: {defaultLocale}</p>
        <Box sx={{fontWeight:'bold'}}>{ trans.home.title }</Box>
        { trans.home.content }
        <button onClick={() => changeLang('vi')} >vi</button>
                <button onClick={() => changeLang('en')}>en</button>
        <Box>Home Page</Box>
      </Container>
    </Box>
  );
}

Home.Layout = MainLayout;

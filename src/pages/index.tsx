import HeroSection from "@/components/home/hero";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/models";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Inter } from "@next/font/google";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { locale, locales, defaultLocale } = useRouter();
  return (
    <Box>
      <HeroSection />
      <Container>
        <p>locale: {locale}</p>
        <p>locales: {locales}</p>
        <p>defaultLocale: {defaultLocale}</p>
        <Box>Home Page</Box>
      </Container>
    </Box>
  );
}

Home.Layout = MainLayout;

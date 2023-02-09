import { MainLayout } from "@/components/layout";
import { useTrans } from '@/hooks';
import { Box, Container, Typography } from "@mui/material";

import styles from "./about.module.scss";

// import dynamic from "next/dynamic";

// const Header = dynamic(()=>import('@/components/common/header'), {ssr: true})

export interface AboutPageProps {}

export default function AboutPage(props: AboutPageProps) {
  const trans = useTrans()
  return (
    <Container>
      <Box>
        <Typography component="h4" variant="h4" color="primary.main">
          {trans.about.title}
        </Typography>
        <Typography component="h6" variant="h6">
          {trans.about.content}
        </Typography>
      </Box>
    </Container>
  );
}

AboutPage.Layout = MainLayout;
export const getStaticProps = async () => {
  return {
    props: {},
  };
};

import { MainLayout } from "@/components/layout";
import { Box, Container, Typography } from "@mui/material";
import * as React from "react";
import { useTrans } from "@/hooks";

export interface BlogPageProps {}

export default function BlogPage(props: BlogPageProps) {
  const trans = useTrans();
  return (
    <Container>
      <Box>
        <Typography component="h4" variant="h4" color="primary.main">
          {trans.blog.title}
        </Typography>
        <Typography component="h6" variant="h6">
          {trans.blog.content}
        </Typography>
      </Box>
    </Container>
  );
}

BlogPage.Layout = MainLayout;

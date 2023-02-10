import Logo from "@/assets/icons/logo.svg";
import { useAuth, useTrans } from "@/hooks";
import { ItemMenu } from "@/models";
import { Container, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box } from "@mui/system";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";



export function HeaderDesktop() {
  const router = useRouter();
  const {locale} = useRouter()
  const trans = useTrans();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ROUTE_LIST: any = [
    {
      label: `${trans.menu.home}`,
      path: '/'
    },
  
    {
      label: `${trans.menu.about}`,
      path: '/about'
    },
    {
      label: `${trans.menu.blog}`,
      path: '/blog'
    }
  ]
  const { logout, profile } = useAuth();
  const [language, setLanguage] = React.useState<string | null>("en");
  const [listRouter, setListRouter] = useState<ItemMenu[]>();

  const changeLang = (lang: any) => {
    router.push("", "", { locale: lang });
  };

  useEffect(() => {
    setListRouter(ROUTE_LIST);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);
  useEffect(() => {
    router.locale && setLanguage(router.locale);
  }, [router]);

  async function handleLogoutClick() {
    try {
      await logout();
      console.log("redirect to login page");
      router.push("/login");
    } catch (error) {
      console.log("failed to logout", error);
    }
  }
  async function handleLoginClick() {
    router.push("/login");
  }

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setLanguage(newAlignment);
  };

  return (
    <Box display={{ xs: "none", md: "block" }} py={2}>
      <Container>
        <Stack direction="row" justifyContent="space-between">
          <div
            className="logo"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Image src={Logo} alt="logo" />
          </div>
          <List
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {listRouter &&
              listRouter.map((route: any) => (
                <ListItem sx={{ ml: 2, fontWeight: "medium" }} key={route.path}>
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
              <Button variant="text" onClick={handleLogoutClick}>
                Logout
              </Button>
            ) : (
              <Button variant="text" onClick={handleLoginClick}>
                Login
              </Button>
            )}
            <ToggleButtonGroup
              value={language}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              sx={{ ml: 2 }}
              className={styles.customToggleButton}
            >
              <ToggleButton
                value="en"
                onClick={() => changeLang("en")}
                size="small"
                aria-label="left aligned"
              >
                <span>EN</span>
              </ToggleButton>
              <ToggleButton
                value="vi"
                onClick={() => changeLang("vi")}
                size="small"
                aria-label="centered"
              >
                <span>VI</span>
              </ToggleButton>
            </ToggleButtonGroup>
          </List>
        </Stack>
      </Container>
    </Box>
  );
}

import { type NextPage } from "next";
import Head from "next/head";
import React, { useCallback, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  ActionIcon,
  AppShell,
  Button,
  Group,
  Header,
  Navbar,
  useMantineColorScheme,
} from "@mantine/core";
import { MainLinks } from "../component/main-links";
import { User } from "../component/user";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { Logo } from "../component/logo";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const router = useRouter();
  useEffect(() => {
    router.replace("/mfe1");
  }, [router]);
  return (
      <AppShell
        padding="md"
        fixed={false}
        navbar={
          <Navbar width={{ base: 300 }} p="xs">
            <Navbar.Section grow mt="xs">
              <MainLinks />
            </Navbar.Section>
            <Navbar.Section>
              <User />
            </Navbar.Section>
          </Navbar>
        }
        header={
          <Header height={60}>
            <Group sx={{ height: "100%" }} px={20} position="apart">
              <Logo colorScheme={colorScheme} />
              <ActionIcon
                variant="default"
                onClick={() => toggleColorScheme()}
                size={30}
              >
                {colorScheme === "dark" ? (
                  <IconSun size={16} />
                ) : (
                  <IconMoonStars size={16} />
                )}
              </ActionIcon>
            </Group>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <div></div>
      </AppShell>
  );
};

export default Home;

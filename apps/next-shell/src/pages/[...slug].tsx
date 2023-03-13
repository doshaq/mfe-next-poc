import { type NextPage } from "next";
import React, { useMemo } from "react";
import {
  ActionIcon,
  AppShell,
  Group,
  Header,
  Navbar,
  useMantineColorScheme,
} from "@mantine/core";
import { MainLinks, mfeRoutes } from "../component/main-links";
import { User } from "../component/user";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { Logo } from "../component/logo";
import { useRouter } from "next/router";
import DynamicComponent from "../component/dynamic-component";

const CatchAllPage: NextPage = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const router = useRouter();
  const i = router.query.slug?.[0] ?? undefined;
  //topmost
  const mfe = useMemo(
    () => mfeRoutes.find((c) => c.href.includes(i ?? "")),
    [i]
  );
  if (!mfe) {
    router.replace("404");
  }
  return (
    <>
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
        {mfe ? (
          <DynamicComponent
            system={{
              scope: mfe!.scope,
              url: mfe!.url,
              module: "./index",
            }}
            mountingStrategy={{
              rootPathHref: mfe!.href,
            }}
          />
        ) : (
          <div></div>
        )}
      </AppShell>
    </>
  );
};

export default CatchAllPage;

import React from "react";
import { IconBook, IconNote } from "@tabler/icons-react";
import { ThemeIcon, UnstyledButton, Group, Text } from "@mantine/core";
import { useRouter } from "next/router";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  url:string;
  scope:string;
  href: string;
}

function MainLink({ icon, color, label, href }: MainLinkProps) {
  const { push, pathname,asPath } = useRouter();
  return (
    <UnstyledButton
      onClick={() => push(href)}
      sx={(theme) => ({
        display: "block",
        width: "100%",
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.gray[2],
        },
        backgroundColor:
        asPath === href
            ? theme.colorScheme === "dark"
              ? theme.colors.dark[5]
              : theme.colors.gray[3]
            : undefined,
      })}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

export const mfeRoutes: MainLinkProps[] = [
  {
    icon: <IconBook size={16} />,
    color: "blue",
    label: "Books",
    href: "/mfe1",
    scope:"mfe1",
    url:"http://localhost:3002"
  },
  {
    icon: <IconNote size={16} />,
    color: "teal",
    label: "Reviews",
    href: "/mfe2",
    scope: "mfe2",
    url:"http://localhost:3003"
  },
];

export function MainLinks() {
  const links = mfeRoutes.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}

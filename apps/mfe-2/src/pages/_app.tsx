import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  useMantineTheme,
} from "@mantine/core";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import React, { useState } from "react";
import { QueryClient } from "react-query";
import { QueryWrapper } from "../api";
import { useLocation } from "react-router-dom";
const App: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "mantine-color-scheme",
    defaultValue: "light",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: 1,
        retryDelay: 3000,
      },
    },
  });
  return (
    <>
      <QueryWrapper client={queryClient}>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            theme={{
              colorScheme,
            }}
            withGlobalStyles
            withNormalizeCSS
          >
            {children}
          </MantineProvider>
        </ColorSchemeProvider>
      </QueryWrapper>
    </>
  );
};

export default App;

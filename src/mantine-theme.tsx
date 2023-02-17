import React, { useEffect, useState } from "react";
import { useColorScheme } from "@mantine/hooks";
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from "@mantine/core";

export function MantineTheme(props: React.PropsWithChildren) {
  // hook will return either 'dark' or 'light' on client
  // and always 'light' during ssr as window.matchMedia is not available

  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  const toggleColorScheme = (value: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme: colorScheme,
          primaryColor: "orange",
          fontFamily: `'Raleway', sans-serif`,
          headings: { fontFamily: `'Sen', sans-serif` },
          fontSizes: {
            xs: 12,
            sm: 14,
            md: 16,
            lg: 18,
            xl: 22,
          },
          datesLocale: "en-NZ",
          components: {
            Paper: {
              defaultProps: {},
              styles: {
                root: {
                  backgroundColor: "transparent !important",
                  backdropFilter: "blur(12vmax)",
                },
              },
            },
          },
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

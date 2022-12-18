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
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(preferredColorScheme);
  const toggleColorScheme = (value: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useEffect(() => {
    setColorScheme(preferredColorScheme);
  }, [preferredColorScheme]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
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
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        {props.children}
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

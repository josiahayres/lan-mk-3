import { useEffect } from "react";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { AppShell } from "@mantine/core";
import { usePrevious } from "@mantine/hooks";
import {
  NavigationProgress,
  completeNavigationProgress,
} from "@mantine/nprogress";

import { CustomHeader } from "../components/header";

export async function loader() {
  const headerLinks = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/competitors",
      label: "Competitors",
    },
    {
      link: "/contact",
      label: "Sign Up",
    },
  ];
  return { headerLinks };
}

export default function Root() {
  const { headerLinks } = useLoaderData() as any;
  const { pathname } = useLocation();
  const prevPath = usePrevious(location.pathname);

  useEffect(() => {
    if (prevPath !== pathname) completeNavigationProgress();
  }, [pathname, prevPath]);

  return (
    <AppShell
      padding="md"
      header={<CustomHeader links={headerLinks} />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <NavigationProgress autoReset />
      <Outlet />
    </AppShell>
  );
}

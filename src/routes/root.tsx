import { useEffect } from "react";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { AppShell } from "@mantine/core";
import { usePrevious } from "@mantine/hooks";
import {
  NavigationProgress,
  completeNavigationProgress,
} from "@mantine/nprogress";

import { BensHeader } from "../components/header";

export async function loader() {
  const headerLinks = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/projects",
      label: "Projects",
    },
    {
      link: "/contact",
      label: "Contact",
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
      header={<BensHeader links={headerLinks} />}
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

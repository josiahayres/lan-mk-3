import { useEffect } from "react";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { AppShell, Space } from "@mantine/core";
import { usePrevious } from "@mantine/hooks";
import {
  NavigationProgress,
  completeNavigationProgress,
  resetNavigationProgress,
  stopNavigationProgress,
  setNavigationProgress,
  startNavigationProgress,
} from "@mantine/nprogress";

import { CustomHeader } from "../components/header";
import { Footer } from "../components/footer";

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
    let timer: any;
    console.log("start");
    startNavigationProgress();
    if (prevPath !== pathname) {
      timer = setTimeout(() => {
        console.log("complete");
        completeNavigationProgress();
      }, 200);
    }
    return () => {
      if (!!timer) {
        console.log("cleanup");
        clearTimeout(timer);
      }
    };
  }, [pathname, prevPath]);

  return (
    <AppShell padding={0} header={<CustomHeader links={headerLinks} />}>
      <NavigationProgress />
      <Space h="md" />
      <Outlet />
      <Footer />
    </AppShell>
  );
}

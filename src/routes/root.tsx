import { useEffect } from "react";
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import { AppShell, Space } from "@mantine/core";
import { usePrevious } from "@mantine/hooks";
import {
  NavigationProgress,
  completeNavigationProgress,
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
  ];
  return { headerLinks };
}

export default function Root() {
  const { headerLinks } = useLoaderData() as any;
  const { pathname } = useLocation();
  const prevPath = usePrevious(location.pathname);

  useEffect(() => {
    let timer: any;
    startNavigationProgress();
    if (prevPath !== pathname) {
      timer = setTimeout(() => {
        completeNavigationProgress();
      }, 200);
    }
    return () => {
      if (!!timer) {
        clearTimeout(timer);
      }
    };
  }, [pathname, prevPath]);

  return (
    <AppShell padding={0} header={<CustomHeader links={headerLinks} />}>
      <NavigationProgress />
      <Space h="md" />{" "}
      {/** This sets space under the header as we disabled padding on the page, so footer uses full width */}
      <Outlet />
      <Footer />
    </AppShell>
  );
}

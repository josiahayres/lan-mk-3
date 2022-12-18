import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  Title,
  Anchor,
  Menu,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons";
import { Link, useLocation } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 56,

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },

  links: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  social: {
    width: 260,

    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
  linkActiveMobile: {
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface HeaderMiddleProps {
  links: { link: string; label: string }[];
}

export function CustomHeader({ links }: HeaderMiddleProps) {
  const [opened, { toggle }] = useDisclosure(false);
  const { pathname } = useLocation();
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      component={Link}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: pathname === link.link,
      })}
    >
      {link.label}
    </Anchor>
  ));

  const mobileItems = links.map((link) => (
    <Anchor key={link.label} component={Link} to={link.link}>
      <Menu.Item
        onClick={toggle}
        className={cx({
          [classes.linkActiveMobile]: pathname === link.link,
        })}
      >
        {link.label}
      </Menu.Item>
    </Anchor>
  ));

  return (
    <Header height={60} mb={120}>
      <Container className={classes.inner}>
        <Menu shadow="md" width={"90vw"} opened={opened}>
          <Menu.Target>
            <Burger
              opened={opened}
              onClick={toggle}
              size="sm"
              className={classes.burger}
            />
          </Menu.Target>
          <Menu.Dropdown mx="md">{mobileItems}</Menu.Dropdown>
        </Menu>

        <Group className={classes.links} spacing={5}>
          {items}
        </Group>
        <Title order={3}>LAN MK III</Title>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandFacebook size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}

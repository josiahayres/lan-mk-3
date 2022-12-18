import {
  Avatar,
  Text,
  Button,
  Paper,
  createStyles,
  Card,
  BackgroundImage,
  Group,
  Badge,
} from "@mantine/core";

export interface UserCardProps {
  avatar: string;
  image: string;
  name: string;
  gamerTag: string;
  platform: string;
  url: string;
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
  },
}));

export function UserCard({
  avatar,
  image,
  name,
  gamerTag,
  platform,
  url,
}: UserCardProps) {
  const { classes, theme } = useStyles();

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section sx={{ height: 140 }}>
        <BackgroundImage
          src={image}
          sx={{ height: "inherit" }}
        ></BackgroundImage>
      </Card.Section>
      <Avatar
        src={avatar}
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        bg={theme.primaryColor}
        className={classes.avatar}
      />
      <Text align="center" size="lg" weight={500} mt="sm">
        {name}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {gamerTag}
      </Text>
      <Group position="center">
        <Badge>{platform}</Badge>
      </Group>
      <Button
        variant="light"
        fullWidth
        mt="md"
        component="a"
        href={url}
        target="_blank"
        rel="noopener"
        color={theme.primaryColor}
      >
        View Stats
      </Button>
    </Card>
  );
}

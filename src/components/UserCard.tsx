import {
  Avatar,
  Text,
  Button,
  createStyles,
  Card,
  BackgroundImage,
  Group,
  Badge,
  Stack,
  Box,
  MantineColor,
} from "@mantine/core";
import { IconLink } from "@tabler/icons";

export interface UserCardProps {
  avatar: string;
  image: string;
  name: string;
  gamerTag: string;
  platform: string;
  url: string;
  elims?: number;
  wins?: number;
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
  elims = 0,
  wins = 0,
}: UserCardProps) {
  const { classes, theme } = useStyles();
  const colors: Record<string, MantineColor> = {
    xbox: "green",
    pc: "dark",
    playstation: "purple",
  };
  const platformColor = colors?.[platform.toLowerCase()] || "orange";

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
      <Stack>
        <Box>
          <Text align="center" size="lg" weight={500} mt="sm">
            {name}
          </Text>
          <Text align="center" size="sm" color="dimmed">
            {gamerTag}
          </Text>
        </Box>
        <Group position="center">
          <Badge variant="filled" color={platformColor}>
            {platform}
          </Badge>
        </Group>
        <Group position="center">
          <Badge variant="outline">{elims} elims</Badge>
          <Badge variant="outline">{wins} wins</Badge>
        </Group>
      </Stack>
      <Button
        variant="light"
        fullWidth
        mt="md"
        component="a"
        href={url}
        target="_blank"
        rel="noopener"
        color={theme.primaryColor}
        leftIcon={<IconLink size={18} stroke={1.5} />}
      >
        View all stats
      </Button>
    </Card>
  );
}

import { Suspense } from "react";
import { Carousel } from "@mantine/carousel";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  Container,
  Stack,
  Group,
  Switch,
  Card,
  Divider,
  Alert,
  Image,
  Space,
  Chip,
  Badge,
  BackgroundImage,
  SimpleGrid,
  Avatar,
  Box,
  List,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

function CarouselCard({
  image,
  title,
  category,
}: {
  image: string;
  title: string;
  category: string;
}) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      {/* <Button variant="white" color="dark">
        Read article
      </Button> */}
    </Paper>
  );
}

const data = [
  {
    image:
      "https://images.unsplash.com/photo-1580464360012-948b4fe5ddc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2835&q=80",
    title: "Overall Champion wins a Rare Fortnite Skin",
    category: "1st Place",
  },
  {
    image:
      "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDg2fHxnYW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    title: "Runner up wins a Rare Fortnite Emote",
    category: "2nd Place",
  },
  {
    image:
      "https://images.unsplash.com/flagged/photo-1580234820596-0876d136e6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2934&q=80",
    title: "Take home [consolation prize] for your efforts.",
    category: "3rd Place",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605158663591-681f789bd067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGdhbWluZyUyMGxvc2V8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    title: "Try harder next time if you want a prize",
    category: "Last place",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    title: "You can out-build any opponent to win the battle",
    category: "Best Builder",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603163768210-60e522c7e1a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjU4fHxnYW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
    title:
      "Maybe you can't build like a pro, but you make up for it with your accuracy",
    category: "Best Shot",
  },
];

export function Portfolio() {
  const [canRotate, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <CarouselCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container>
      <Stack spacing="xl">
        <Card shadow={"md"} withBorder radius={"lg"}>
          <Stack>
            <Title>
              Welcome to{" "}
              <Text
                span
                variant="gradient"
                inherit
                gradient={{ from: "blue", to: "cyan" }}
              >
                LAN MK
              </Text>
              <Text span fw="bold">
                {" "}
                III
              </Text>
            </Title>
            <Text>The third installment of the illustrious LAN MK series.</Text>
            <Image
              radius="md"
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f"
            />
          </Stack>
        </Card>
        <Card shadow={"md"} withBorder radius={"lg"}>
          <Title order={2}>Prize Pool</Title>
          <Space h="md" />
          <Carousel
            slideSize="50%"
            breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
            slideGap="xl"
            align="start"
            slidesToScroll={mobile ? 1 : 2}
          >
            {slides}
          </Carousel>
        </Card>
        <Card shadow={"md"} withBorder radius={"lg"}>
          <Title order={2} pb="md">
            History of LAN MK
          </Title>
          <SimpleGrid cols={2}>
            <Stack>
              <Title order={4}>LAN MK I</Title>
              <Group>
                <Badge>Feb 2021</Badge>
                <Badge>10 attendees</Badge>
                <Badge>Blaine's Flat</Badge>
              </Group>
              <Group>
                <Avatar title="Blaine" radius={"xl"}></Avatar>
                <Text>Winner: Blaine</Text>
              </Group>
            </Stack>
            <Stack>
              <Title order={4}>LAN MK II</Title>
              <Group>
                <Badge>Feb 2022</Badge>
                <Badge>12 attendees</Badge>
                <Badge>Blaine's Flat</Badge>
              </Group>
              <Group>
                <Avatar title="Blaine" radius={"xl"}></Avatar>
                <Text>Winner: Blaine</Text>
              </Group>
            </Stack>
          </SimpleGrid>
        </Card>
        <Card shadow={"md"} withBorder radius={"lg"}>
          <Title order={2}>Event Schedule</Title>
          <Box sx={{ height: "20vh" }}></Box>
        </Card>
        <Card shadow={"md"} withBorder radius={"lg"}>
          <Title order={2}>Requirements</Title>
          <List withPadding py="md">
            <List.Item>Gaming monitor</List.Item>
            <List.Item>Console or PC</List.Item>
            <List.Item>Controller / Keyboard</List.Item>
            <List.Item>Power Cable</List.Item>
          </List>
        </Card>
        <Card shadow={"md"} withBorder radius={"lg"}>
          <Title order={2}>What's provided</Title>
          <Box sx={{ height: "20vh" }}></Box>
        </Card>
      </Stack>
    </Container>
  );
}

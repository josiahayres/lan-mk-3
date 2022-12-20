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
  Card,
  Image,
  Space,
  Badge,
  SimpleGrid,
  Avatar,
  Box,
  List,
  Code,
  Alert,
  Table,
} from "@mantine/core";
import { IconBrandXbox, IconInfoCircle } from "@tabler/icons";
import { Link } from "react-router-dom";

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

export function Home() {
  const [canRotate, { toggle }] = useDisclosure(false);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <CarouselCard {...item} />
    </Carousel.Slide>
  ));

  const rows = [
    { name: "Warmup", time: "TBC" },
    { name: "Creative", time: "TBC" },
    { name: "Grand final", time: "TBC" },
  ].map((element) => (
    <tr key={element.name}>
      <td>{element.time}</td>
      <td>{element.name}</td>
    </tr>
  ));

  return (
    <Container>
      <Stack spacing="xl">
        <Card shadow={"md"} withBorder radius={"lg"}>
          <SimpleGrid
            cols={2}
            breakpoints={[{ maxWidth: "sm", cols: 1, spacing: "sm" }]}
          >
            <Stack>
              <Title>
                Welcome to{" "}
                <Text
                  span
                  variant="gradient"
                  inherit
                  gradient={{ from: "orange", to: "red" }}
                >
                  LAN MK
                </Text>
              </Title>
              <Text>
                Kia Ora!
                <br /> YOU are invited to LanMK3 <b>No Build Edition</b>!
              </Text>
              <Text>
                This year, the prize pool is worth over{" "}
                <Text span fw={700} color="red.7">
                  $300
                </Text>
                !<br />
                We hope you join us in the Battle Royales, Creative Tournaments
                and much, much more.
              </Text>
              <Text>
                Just like last time, all participants of LanMK are winners and
                will take home prizes. The overall champion of the event will
                win the coveted LanMK trophy!
              </Text>
            </Stack>

            <Box>
              <Image
                radius="md"
                src="./hero-image-vertical.png"
                fit="contain"
                height="300px"
              />
            </Box>
          </SimpleGrid>
        </Card>

        <Card shadow={"md"} withBorder radius={"lg"}>
          <Title order={2} pb="md">
            Prize Pool
          </Title>
          <Alert icon={<IconInfoCircle />}>
            Actual prizes are still being finalised!
          </Alert>
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
            Event Schedule
          </Title>
          <Box sx={{ minHeight: "20vh" }}>
            <Alert icon={<IconInfoCircle />}>
              The event schedule, creative maps, and custom game modes are still
              being finalised. Please provide any suggestions and requests to
              the organisers.
            </Alert>
            <Table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </Box>
        </Card>
        <Card shadow={"md"} withBorder radius={"lg"}>
          <Title order={2} pb="md">
            How to register?
          </Title>
          <Box sx={{ minHeight: "20vh" }}>
            <Stack>
              <Text>
                Cost of a LanMK3 ticket is{" "}
                <Text span fw={700}>
                  $10
                </Text>
                .
              </Text>
              <Text>
                This is payable only through bank transfer to:{" "}
                <Code sx={{ fontSize: "inherit" }}>12-3034-0879168-50</Code>.
              </Text>
              <Text>Entry without payment is not permissible.</Text>
            </Stack>
          </Box>
        </Card>
        <Card shadow={"md"} withBorder radius={"lg"}>
          <Title order={2} pb="md">
            Requirements
          </Title>
          <Text>LanMK is a BYO event. This includes:</Text>
          <List
            py="md"
            icon={
              <IconBrandXbox
                size={20}
                stroke={1.5}
                color={theme.primaryColor}
              />
            }
          >
            <List.Item>Gaming monitor</List.Item>
            <List.Item>Operating System: Console/PC</List.Item>
            <List.Item>Controller/Mouse & Keyboard</List.Item>
            <List.Item>Headset w/Microphone</List.Item>
            <List.Item>Power/Video/Audio Cables</List.Item>
            <List.Item>Lan Cable</List.Item>
            <List.Item>
              Any Snacks and Drinks you want (Snacks and Drinks will be
              provided)
            </List.Item>
          </List>
          <Alert icon={<IconInfoCircle />}>
            Your Operating System must be updated and have the latest version of
            Fortnite installed before attending this event.
          </Alert>
        </Card>
        <Card shadow={"md"} withBorder radius={"lg"}>
          <Title order={2} pb="md">
            Who's Competing
          </Title>
          <Box py="md">
            <Link to="/competitors">
              <Button fullWidth>See competitors</Button>
            </Link>
          </Box>
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
                <Avatar title="Harry" radius={"xl"}></Avatar>
                <Text>Winner: Harry</Text>
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
      </Stack>
    </Container>
  );
}

import { Alert, Container, SimpleGrid, Text } from "@mantine/core";
import React from "react";
import { UserCard, UserCardProps } from "../components/UserCard";

type Props = {};

export const Competitors = (props: Props) => {
  const people: UserCardProps[] = [
    {
      avatar:
        "https://cdn.thetrackernetwork.com/cdn/fortnite/2AFD1179_small.png",
      image:
        "https://cdn.thetrackernetwork.com/cdn/fm/3A6Efortnite-rocketsdark.jpg",
      gamerTag: "BOT daFish",
      name: "Josiah",
      platform: "XBOX",
      url: "https://fortnitetracker.com/profile/all/BOT%20daFish",
      wins: 385,
      elims: 7353,
      hoursPlayed: 755,
    },
    {
      avatar:
        "https://cdn.thetrackernetwork.com/cdn/fortnite/BDCD285_small.png",
      image:
        "https://cdn.thetrackernetwork.com/cdn/fm/3A6Efortnite-rocketsdark.jpg",
      gamerTag: "babe1bae",
      name: "Ben",
      platform: "PC",
      url: "https://fortnitetracker.com/profile/all/Babe1bae",
      wins: 882,
      elims: 26962,
      hoursPlayed: 936,
    },
    {
      avatar:
        "https://cdn.thetrackernetwork.com/cdn/fortnite/26146172_small.png",
      image:
        "https://cdn.thetrackernetwork.com/cdn/fm/3A6Efortnite-rocketsdark.jpg",
      gamerTag: "BOT Rskii",
      name: "Harry",
      platform: "XBOX",
      url: "https://fortnitetracker.com/profile/all/BOT%20Rskii",
      wins: 472,
      elims: 22332,
      hoursPlayed: 698,
    },

    // {
    //   avatar: "https://trackercdn.com/legacycdn/fortnite/75AE11874_small.png",
    //   image:
    //     "https://cdn.thetrackernetwork.com/cdn/fm/3A6Efortnite-rocketsdark.jpg",
    //   gamerTag: "BotSlay3r",
    //   name: "Andy",
    //   platform: "PLAYSTATION",
    //   url: "https://fortnitetracker.com/profile/all/BotSlay3r",
    //   wins: 0,
    //   elims: 0,
    // },
  ];
  return (
    <Container>
      <Alert color="red" mb="xl">
        <Text>You will be added to this list on confirmation of payment.</Text>
      </Alert>
      <SimpleGrid
        breakpoints={[
          { minWidth: "xl", cols: 3, spacing: "md" },
          { minWidth: "lg", cols: 3, spacing: "md" },
          { minWidth: "md", cols: 2, spacing: "sm" },
          { minWidth: "sm", cols: 2, spacing: "sm" },
          { minWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {people.map((eachPerson) => {
          return <UserCard {...eachPerson} />;
        })}
      </SimpleGrid>
    </Container>
  );
};

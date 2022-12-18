import { Container, SimpleGrid } from "@mantine/core";
import React from "react";
import { UserCard, UserCardProps } from "../components/user";

type Props = {};

export const Competitors = (props: Props) => {
  const people: UserCardProps[] = [
    {
      avatar: "JOSIAH",
      image:
        "https://cdn.thetrackernetwork.com/cdn/fm/3A6Efortnite-rocketsdark.jpg",
      gamerTag: "BOT daFish",
      name: "Josiah",
      platform: "XBOX",
      url: "https://fortnitetracker.com/profile/all/BOT%20daFish",
    },
    {
      avatar: "JOSIAH",
      image:
        "https://cdn.thetrackernetwork.com/cdn/fm/3A6Efortnite-rocketsdark.jpg",
      gamerTag: "BOT daFish",
      name: "Josiah",
      platform: "XBOX",
      url: "https://fortnitetracker.com/profile/all/BOT%20daFish",
    },
    {
      avatar: "JOSIAH",
      image:
        "https://cdn.thetrackernetwork.com/cdn/fm/3A6Efortnite-rocketsdark.jpg",
      gamerTag: "BOT daFish",
      name: "Josiah",
      platform: "XBOX",
      url: "https://fortnitetracker.com/profile/all/BOT%20daFish",
    },
  ];
  return (
    <Container>
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

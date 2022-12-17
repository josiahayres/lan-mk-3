import { Box, Card } from "@mantine/core";
import React from "react";
import { useMouse, useViewportSize } from "@mantine/hooks";

export const Interactive = (props) => {
  const { x, y } = useMouse();
  const { height, width } = useViewportSize();
  const xPercent = (x / width) * 100;
  const yPercent = (y / height) * 100;

  return (
    <Card h="70vh">
      {`x: ${x} y: ${y}`}
      {`x: ${width} y: ${height}`}
      {`xPercent: ${xPercent} yPercent: ${yPercent}`}

      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.gray[8]
              : theme.colors.gray[2],
          height: "30vh",
          aspectRatio: "1/1",
          borderRadius: theme.radius.xl,
          position: "relative",
          left: xPercent,
          top: yPercent,
        })}
      ></Box>
    </Card>
  );
};

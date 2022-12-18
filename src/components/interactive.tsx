import { Box, Card } from "@mantine/core";
import { useElementSize, useMouse, useViewportSize } from "@mantine/hooks";

export const Interactive = () => {
  const { x, y } = useMouse();
  const { height, width } = useViewportSize();
  const { ref, ...container } = useElementSize();
  const xPercent = (x / width) * 100;
  const yPercent = (y / height) * 100;

  const boxSize = 30;

  const relativeX = (container.width * xPercent) / 100;
  const relativeY = (container.height * yPercent) / 100;

  const calculatedX = relativeX - boxSize * 0.5;
  const calculatedY = relativeY - boxSize * 0.5;

  return (
    <Card h="70vh" ref={ref}>
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.gray[8]
              : theme.colors.gray[2],
          height: boxSize + "px",
          aspectRatio: "1/1",
          borderRadius: theme.radius.xl,
          position: "relative",
          left: `clamp(0px, ${calculatedX}px, ${container.width - boxSize}px)`,
          top: `clamp(0px, ${calculatedY}px, ${container.height - boxSize}px)`,
        })}
      ></Box>
    </Card>
  );
};

import { ActionIcon, createStyles, Group, GroupProps } from "@mantine/core";
import { IconBrandFacebook, IconBrandYoutube } from "@tabler/icons";

type Props = {
  groupProps?: GroupProps;
};

const useStyles = createStyles((theme) => ({
  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export const SocialMediaIcons = ({ groupProps }: Props) => {
  const { classes, cx } = useStyles();
  return (
    <Group
      spacing={0}
      position="right"
      noWrap
      {...groupProps}
      className={cx(classes.social, groupProps?.className)}
    >
      <ActionIcon size="lg">
        <IconBrandFacebook size={18} stroke={1.5} />
      </ActionIcon>
      <ActionIcon size="lg">
        <IconBrandYoutube size={18} stroke={1.5} />
      </ActionIcon>
    </Group>
  );
};

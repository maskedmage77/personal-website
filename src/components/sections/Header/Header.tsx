import { ActionIcon, Button, Group, Title } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';
import classes from './Header.module.css';
import { useWindowScrollCount } from '../../../hooks/useWindowScrollCount';

export default function Header() {
  const { windowCount } = useWindowScrollCount();

  return (
    <Group className={`${classes.header} ${windowCount >= 1 ? classes.background : ''}`}>
      <Group className={classes.left_section}>
        <ActionIcon
          variant="transparent"
          aria-label="Menu"
          size="lg"
          onClick={() => {
            throw new Error('Feature not implemented');
          }}
          className={classes.menu_button}
        >
          <IconMenu2 size={32} color="var(--font-color)" />
        </ActionIcon>

        <Title order={2} c="var(--font-color)">
          Jacob Hines
        </Title>
      </Group>

      <Group className={classes.center_section} gap={0}>
        <Button
          className={`${classes.nav_button} ${classes.selected}`}
          variant="subtle"
          size="compact-sm"
          color="var(--font-color)"
        >
          ABOUT
        </Button>

        <Button
          className={classes.nav_button}
          variant="subtle"
          size="compact-sm"
          color="var(--font-color)"
        >
          EXPERIENCE
        </Button>

        <Button
          className={classes.nav_button}
          variant="subtle"
          size="compact-sm"
          color="var(--font-color)"
        >
          PROJECTS
        </Button>

        <Button
          className={classes.nav_button}
          variant="subtle"
          size="compact-sm"
          color="var(--font-color)"
        >
          CONTACT
        </Button>
      </Group>
    </Group>
  );
}

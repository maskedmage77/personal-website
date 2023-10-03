import { useWindowScrollCount } from '../../../hooks/useWindowScrollCount';
import { ActionIcon, Anchor, Group, Title } from '@mantine/core';
import { IconMenu2 } from '@tabler/icons-react';
import classes from './Header.module.css';

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

      <Group className={classes.center_section} gap={"md"}>
        <Anchor
          className={`${classes.nav_button}`}
          variant="subtle"
          size="compact-sm"
          c="var(--font-color)"
          href="#about"
        >
          ABOUT
        </Anchor>

        <Anchor
          className={classes.nav_button}
          variant="subtle"
          size="compact-sm"
          c="var(--font-color)"
          href="#experience"
        >
          EXPERIENCE
        </Anchor>

        <Anchor
          className={classes.nav_button}
          variant="subtle"
          size="compact-sm"
          c="var(--font-color)"
          href="#projects"
        >
          PROJECTS
        </Anchor>

        <Anchor
          className={classes.nav_button}
          variant="subtle"
          size="compact-sm"
          c="var(--font-color)"
          href="#contact"
        >
          CONTACT
        </Anchor>
      </Group>
    </Group>
  );
}

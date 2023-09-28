import { Button, Group, Title } from "@mantine/core";
import classes from './Header.module.css'
import { IconMenu2 } from "@tabler/icons-react";

export default function Header() {
  return (
    <Group className={classes.header}>


      <Group className={classes.left_section}>

        <IconMenu2 size={32} color="var(--font-color)"/>

        <Title order={2} c="var(--font-color)">
          Jacob Hines
        </Title>

        <div></div>

      </Group>


      <Group className={classes.center_section} gap={0}>

        <Button className={`${classes.nav_button}, ${classes.selected}`} variant="subtle" size="compact-sm" color="var(--font-color)" >ABOUT</Button>

        <Button className={classes.nav_button} variant="subtle" size="compact-sm" color="var(--font-color)">EXPERIENCE</Button>

        <Button className={classes.nav_button} variant="subtle" size="compact-sm" color="var(--font-color)">PROJECTS</Button>

        <Button className={classes.nav_button} variant="subtle" size="compact-sm" color="var(--font-color)">CONTACT</Button>

      </Group>


    </Group>
  )
}

import { Button, Group, Title } from "@mantine/core";
import classes from './Header.module.css'
import { IconMenu2 } from "@tabler/icons-react";

export default function Header() {
  return (
    <Group className={classes.header}>


      <Group className={classes.left_section}>

        <IconMenu2 size={32} color="#E5E4D0"/>

        <Title order={2} c="#E5E4D0">
          Jacob Hines
        </Title>

        <div></div>

      </Group>


      <Group className={classes.center_section} gap={0}>

        <Button className={`${classes.nav_button}, ${classes.selected}`} variant="subtle" size="compact-sm" color="sand.2" >ABOUT</Button>

        <Button className={classes.nav_button} variant="subtle" size="compact-sm" color="sand.2">EXPERIENCE</Button>

        <Button className={classes.nav_button} variant="subtle" size="compact-sm" color="sand.2">PROJECTS</Button>

        <Button className={classes.nav_button} variant="subtle" size="compact-sm" color="sand.2">CONTACT</Button>

      </Group>


    </Group>
  )
}

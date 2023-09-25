import { Anchor, Button, Group, Title } from "@mantine/core";
import classes from './Header.module.css'
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <Group className={classes.header}>


      <Group className={classes.left_section}>

        <RxHamburgerMenu size={32} color="#E5E4D0"/>

        <Title order={2} c="#E5E4D0">
          Jacob Hines
        </Title>

      </Group>


      <Group className={classes.center_section} gap={0}>

        <Button variant="subtle" size="compact-sm" color="sand.1">ABOUT</Button>

        <Button variant="subtle" size="compact-sm" color="sand.1">EXPERIENCE</Button>

        <Button variant="subtle" size="compact-sm" color="sand.1">PROJECTS</Button>

        <Button variant="subtle" size="compact-sm" color="sand.1">CONTACT</Button>

      </Group>


    </Group>
  )
}

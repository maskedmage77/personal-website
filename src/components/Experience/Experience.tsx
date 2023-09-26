import { Container, Text } from "@mantine/core";
import classes from './Experience.module.css';

export function Experience() {
  return (
    <Container maw="100%" mih="100vh" mt="" className={classes.container}>

      <Text c="sand.2" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        I am a software developer who specializes in creating full-stack applications.
        To me every project is special and deserves to be treated as such. 
        I am a firm believer in the power of technology to change the world for the better. 
      </Text>

    </Container>
  )
}

import { Card, Container, SimpleGrid, Text, Title } from "@mantine/core";
import classes from './About.module.css';

export function About() {
  return (
    <Container mih="100vh" mt="" className={classes.container}>

      <Title ta="center" className={classes.title} pb="xl">About</Title>

      <Card shadow="sm" padding="lg" radius="md"  className={classes.card}>
        <Title ta="center" className={classes.title} order={2}>Frameworks</Title>
        <Text size="md" mt="md" className={classes.text}>
          I am a software developer who specializes in creating full-stack applications.
          To me every project is special and deserves to be treated as such. 
          I am a firm believer in the power of technology to change the world for the better. 
        </Text>
      </Card>

    </Container>
  )
}

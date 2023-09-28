import { Card, Container, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './Experience.module.css';

export function Experience() {
  return (
    <Container mih="100vh" mt="" className={classes.container}>
      <Title ta="center" className={classes.title} pb="xl">
        Experience
      </Title>

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 2 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        <Card shadow="sm" padding="lg" radius="md" className={classes.card}>
          <Title ta="center" className={classes.title} order={2}>
            Frameworks
          </Title>
          <Text size="md" mt="md" className={classes.text}>
            I am a software developer who specializes in creating full-stack applications. To me
            every project is special and deserves to be treated as such. I am a firm believer in the
            power of technology to change the world for the better.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" className={classes.card}>
          <Title ta="center" className={classes.title} order={2}>
            Frameworks
          </Title>
          <Text size="md" mt="md" className={classes.text}>
            I am a software developer who specializes in creating full-stack applications. To me
            every project is special and deserves to be treated as such. I am a firm believer in the
            power of technology to change the world for the better.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" className={classes.card}>
          <Title ta="center" className={classes.title} order={2}>
            Frameworks
          </Title>
          <Text size="md" mt="md" className={classes.text}>
            I am a software developer who specializes in creating full-stack applications. To me
            every project is special and deserves to be treated as such. I am a firm believer in the
            power of technology to change the world for the better.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg" radius="md" className={classes.card}>
          <Title ta="center" className={classes.title} order={2}>
            Frameworks
          </Title>
          <Text size="md" mt="md" className={classes.text}>
            I am a software developer who specializes in creating full-stack applications. To me
            every project is special and deserves to be treated as such. I am a firm believer in the
            power of technology to change the world for the better.
          </Text>
        </Card>
      </SimpleGrid>
    </Container>
  );
}

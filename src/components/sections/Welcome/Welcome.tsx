import { Title, Text, Container, Group, ActionIcon } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <Container maw="100%" mih="100vh" className={classes.container}>
      <Title className={classes.title} ta="center">
        Hello!
        <br />
        I'm{' '}
        <Text inherit variant="gradient" component="span" gradient={{ from: 'green', to: 'sand.2' }}>
          Jacob Hines
        </Text>
        !
      </Title>

      <Text c="var(--font-color)" ta="center" size="lg" maw={580} mx="auto" my="xl">
        I am a software developer who specializes in creating full-stack mobile and web
        applications. To me every project is special and deserves to be treated as such. I am a firm
        believer in the power of technology to change the world for the better.
      </Text>

      <Group>
        <ActionIcon
          variant="transparent"
          aria-label="Github"
          size="lg"
          onClick={() => {
            window.open('https://github.com/maskedmage77', '_blank');
          }}
        >
          <IconBrandGithub size={36} color="var(--font-color)" />
        </ActionIcon>

        <ActionIcon
          variant="transparent"
          aria-label="LinkedIn"
          size="lg"
          onClick={() => {
            window.open('https://www.linkedin.com/in/jacob-hines-a04677201/', '_blank');
          }}
        >
          <IconBrandLinkedin size={36} color="var(--font-color)" />
        </ActionIcon>
      </Group>
    </Container>
  );
}

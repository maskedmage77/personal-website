import { Badge, Card, Container, Group, SimpleGrid, Text, Title } from '@mantine/core';
import classes from './Experience.module.css';

export function Experience() {
  const experiences = [
    {
      title: 'Markedly, LLC',
      description: [
        'I have created Markedly, LLC to continue my passion for software development and support existing clients. I have worked with several clients to add additional features to their existing mobile applications, and provide technical consulting.',
      ],
      languages: ['Typescript', 'Javascript'],
      technologies: ['React Native', 'Expo', 'Payload CMS', 'Auth0'],
    },
    {
      title: 'BlindRobot',
      description: [
        'While working at Blindrobot I was part of several Software Development projects for various clients ranging from large corporations to small non-profit organizations.',
        'I had the opportunity to collaborate with industry professionals to deliver high performant beautifully designed web and mobile applications.',
      ],
      languages: ['Typescript', 'PHP', 'C#'],
      technologies: [
        'React Native',
        'React',
        'NextJS',
        'Node',
        'Laravel',
        'Docker',
        '.Net Core',
        'GCP',
        'Wordpress',
      ],
    },
    {
      title: 'Ivy Tech',
      description: [
        'I had the opportunity work for Ivy Tech while attending. I created educational software development documentation tailored for college classrooms, developed software to assist in scheduling classes for professors, and researched technology trends to enhance future course design.',
      ],
      languages: ['Java', 'Python', 'Javascript'],
      technologies: ['Spring','JavaFX', 'TKinter'],
    },
  ];

  return (
    <Container mt="" className={classes.container}>
      <Title ta="center" className={classes.title} pb="xl">
        Experience
      </Title>

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'lg' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {experiences.map((experience) => (
          <Card shadow="sm" padding="lg" radius="md" className={classes.card}>
            <Title className={classes.title} order={2}>
              {experience.title}
            </Title>

            {experience.description.map((item) => (
              <Text size="md" mt="md" className={classes.text}>
                {item}
              </Text>
            ))}

            <Title order={3} my="md" className={classes.title}>
              Languages
            </Title>

            <Group gap="sm">
              {experience.languages.map((language) => (
                <Badge className={classes.badge}>{language}</Badge>
              ))}
            </Group>

            <Title order={3} my="md" className={classes.title}>
              Technologies
            </Title>

            <Group gap="sm">
              {experience.technologies.map((technology) => (
                <Badge color="orange" className={classes.badge}>{technology}</Badge>
              ))}
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
}

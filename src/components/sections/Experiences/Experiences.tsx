import { Badge, Card, Group, SimpleGrid, Text, Title, Image } from '@mantine/core';
import { StyledContainer } from '../../elements/StyledContainer';
import experiences from '../../../constants/experiences';
import classes from './Experiences.module.css';

export function Experiences() {

  return (
    <StyledContainer id="experiences">
      <Title ta="center" className={classes.title} pb="xl">
        Experiences
      </Title>

      <SimpleGrid
        cols={{ base: 1, sm: 2, lg: 3 }}
        spacing={{ base: 10, sm: 'lg' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
        {experiences.map((experience, index) => (
          <Card shadow="sm" padding="lg" radius="md" className={classes.card} key={index}>

            <Group>

            {experience.image &&
              <Image src={experience.image} alt={experience.title} className={classes.image} />
            }

              <div>
                <Title className={classes.title} order={2}>
                  {experience.title}
                </Title>

                <Text className={classes.text} fs="italic" size="sm">
                  {experience.time}
                </Text>
              </div>

            </Group>

            {experience.description.map((item, index) => (
              <Text size="md" mt="md" className={classes.text} key={index}>
                {item}
              </Text>
            ))}

            <Title order={3} my="md" className={classes.title}>
              Languages
            </Title>

            <Group gap="sm">
              {experience.languages.map((language, index) => (
                <Badge className={classes.badge} key={index}>{language}</Badge>
              ))}
            </Group>

            <Title order={3} my="md" className={classes.title}>
              Technologies
            </Title>

            <Group gap="sm">
              {experience.technologies.map((technology, index) => (
                <Badge color="green" className={classes.badge} key={index}>{technology}</Badge>
              ))}
            </Group>
          </Card>
        ))}
      </SimpleGrid>
    </StyledContainer>
  );
}

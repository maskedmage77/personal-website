import { Card, SimpleGrid, Title, Text, ActionIcon, Group, Image, rem } from "@mantine/core";
import { IconBrandAndroid, IconBrandApple, IconWorldWww } from "@tabler/icons-react";
import { StyledContainer } from "../../elements/StyledContainer";
import classes from "./Projects.module.css";
import { Carousel } from "@mantine/carousel";

export function Projects() {

  const projects = [
    {
      name: 'Sparkle by Firefly - Mobile Application',
      images: [
        'projects/Sparkle/1.png',
        'projects/Sparkle/2D.png',
        'projects/Sparkle/3D.png',
        'projects/Sparkle/4D.png',
        'projects/Sparkle/5D.png',
        'projects/Sparkle/7D.png',
        'projects/Sparkle/8D.png',
        'projects/Sparkle/9D.png',
        'projects/Sparkle/10D.png',
        'projects/Sparkle/10L.png',
      ],
      description: [
        'Firefly Children and Family Alliance is a nonprofit that has supported Indiana families and adults for generations. I had the pleasure of working with Firefly to create a mobile application to assist in their mission to provide  valuable resources to build a healthy life.',
        'Sparkly by Firefly was created with the cross platform technology React Native and utilizes Laravel as a backend. The application is available on both the Apple App Store and Google Play Store.',
        'Key Features include: User Authentication, Light/Dark Mode, Multi-Language Support, HIPAA compliant Document Storage, Scrollable Vertical Video Feed, Interactive Resource Map, Community Events, Notifications, and more.',
      ],
      links: [
        {
          url: 'https://apps.apple.com/us/app/sparkle-by-firefly/id1669086121',
          title: 'Apple Store',
          icon: <IconBrandApple />,
        },
        {
          url: 'https://play.google.com/store/apps/details?id=com.firefly.sparkle',
          title: 'Google Play',
          icon: <IconBrandAndroid />,
        }
      ],
    },
    {
      name: "MetaBeasts - Web Experience",
      images: [
        'projects/MetaBeasts/showcase2.png',
        'projects/MetaBeasts/showcase3.png',
        'projects/MetaBeasts/showcase4.png',
        'projects/MetaBeasts/showcase5.png',
        'projects/MetaBeasts/showcase1.webp',
      ],
      description: [
        'MetaBeasts was an NFT project that I worked with to create an interactive web experience with Blockchain integrations. The project provided a highly interactive experience for users to explore the MetaBeasts universe and learn about the project. The website was built with React and NextJS. The website also integrates with the Ethereum Blockchain to allow purchasing of the NFTs and an interactive chest opening animation to reveal the NFTs to the user.'
      ],
      links: [
        {
          url: 'https://metabeasts.net/',
          title: 'Website',
          icon: <IconWorldWww />
        }
      ]
    },
    {
      name: "TechInsights - Mobile Application",
      images: [],
      description: [
        'The TechInsights mobile application allows their clients to view posts about important tech industry events like major investments, the release of new products, and sneak peeks into technical analyses being worked on.',
        'I had the opportunity to extend the existing functionality of the TechInsights mobile application and add several additional features including: In-App PDF manipulation, Custom In-App banners to promote new content as well as bug fixes and performance improvements.'
      ],
      links: [
        {
          url: '',
          title: 'Apple Store',
          icon: <IconBrandApple />,
        },
        {
          url: '',
          title: 'Google Play',
          icon: <IconBrandAndroid />,
        }
      ]
    }
  ]

  return (
    <StyledContainer>
      <Title className={classes.title} pb="xl">
        Projects
      </Title>

      <SimpleGrid
        cols={{ base: 1, sm: 1, lg: 1 }}
        spacing={{ base: 10, sm: 'lg' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}
      >
      {projects.map((project, index) => (
        <Card shadow="sm" p="lg" mb="lg" radius="md" className={classes.card} key={index}>
          
          <Title className={classes.title} order={2}>
            {project.name}
          </Title>

          {project.description.map((item, index) => (
            <Text size="md" mt="md" className={classes.text} key={index}>
              {item}
            </Text>
          ))}

          <Group my="md">
          {project.links.map((link, index) => (
            <ActionIcon key={index} size="lg" onClick={
              () => window.open(link.url, "_blank")
            } aria-label={link.title}>
              {link.icon}
            </ActionIcon>
          ))}
          </Group>
          <Carousel withIndicators height={400} loop>
            {project.images.map((image, index) => (
              <Image
                src={image}
                key={index}
                height={360}
                fit="contain"
                alt="project image"
              />
            ))}
          </Carousel>
        </Card>
      ))}
      </SimpleGrid>
    </StyledContainer>
  )
}

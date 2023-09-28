import { Blockquote, Card, Container, Image, Stack, Text, Title, Transition } from "@mantine/core";
import { useDebouncedValue, useWindowScroll } from "@mantine/hooks";
import { IconInfoCircle } from '@tabler/icons-react';
import { useEffect, useState } from "react";
import classes from './About.module.css';

export function About() {

  const [opened, setOpened] = useState(false);
  const [scroll, _] = useWindowScroll();
  const [debounced] = useDebouncedValue(scroll, 50); 

  useEffect(() => {
    if (opened) return;
    if (debounced.y < window.innerHeight) return;
    setOpened(true);
  }, [debounced]);

  return (
    <Container mih="100vh" mt="" className={classes.container}>



      <Transition
        mounted={opened}
        transition={'slide-right'}
        duration={500}
        timingFunction="ease"
        keepMounted
      >
        {(transitionStyle) => (
          <>
            <Title className={classes.title} mb="xl" style={{
              ...transitionStyle,
            }}>
              About Me
            </Title>

            <Card shadow="lg" padding="lg" radius="md" className={classes.card} style={{
              ...transitionStyle,
            }}>

              <Image src="headshot.jpg" alt="Jacob Hines" radius="50%" className={classes.image} />

              <Stack className={classes.intro} gap="lg" py="md">

                <Text size="md"  className={classes.text}>
                  I am a software developer who specializes in creating full-stack mobile and web applications.
                  I utilize a variety of technologies to build responsive, performant, and scalable applications.
                  When I think about software development, I think about the following quote:
                </Text>

                <Blockquote
                  cite="– Antoine de Saint-Exupery"
                  icon={<IconInfoCircle/>}
                  classNames={{ icon: classes.blockquote_icon }}
                >
                  Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.
                </Blockquote>

              </Stack>

              <Stack className={classes.continuation}>
                
                <Text size="md" className={classes.text}>
                  I am a firm believer in the importance of simplicity and minimalism in software development.
                  Too often, developers rush to get a product out the door, and in doing so, they create 
                  bloated and complex applications that are difficult to maintain and scale. 
                  This act creates what is known as technical debt.
                  I believe that the best software is that which is simple, intuitive, and easy to use.
                </Text>

                <Title>

                </Title>

              </Stack>
                
            </Card>
          </>
        )}
      </Transition>

    </Container>
  )
}

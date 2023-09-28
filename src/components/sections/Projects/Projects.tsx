import { StyledContainer } from "../../elements/StyledContainer";
import { Card, Title } from "@mantine/core";
import classes from "./Projects.module.css";

export function Projects() {
  return (
    <StyledContainer>
      <Title>
        Projects
      </Title>
      <Card
        padding="lg"
        radius="md"
        className={classes.card}
      >
      </Card>
    </StyledContainer>
  )
}

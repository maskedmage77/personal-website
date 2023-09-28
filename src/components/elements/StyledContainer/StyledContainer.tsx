import classes from "./StyledContainer.module.css";
import { Container } from "@mantine/core";

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

export function StyledContainer({ children, ...props}: Props) {
  return (
    <Container className={classes.container} {...props}>
      {children}
    </Container>
  )
}

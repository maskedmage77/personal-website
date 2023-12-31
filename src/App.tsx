import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import './App.css';

export default function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <Router />
    </MantineProvider>
  );
}

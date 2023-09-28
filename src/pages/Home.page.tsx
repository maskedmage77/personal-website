import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Welcome from '../components/sections/Welcome';
import Header from '../components/sections/Header';
import About from '../components/sections/About';

export function HomePage() {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Experience />
      <Projects />
    </>
  );
}

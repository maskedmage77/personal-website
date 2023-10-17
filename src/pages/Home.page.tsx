import Experiences from '../components/sections/Experiences';
import Projects from '../components/sections/Projects';
import Welcome from '../components/sections/Welcome';
import Header from '../components/sections/Header';
import About from '../components/sections/About';

export default function HomePage() {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Experiences />
      <Projects />
    </>
  );
}

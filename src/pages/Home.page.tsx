import Experience from '../components/Experience';
import Welcome from '../components/Welcome';
import Header from '../components/Header';
import About from '../components/About';

export function HomePage() {
  return (
    <>
      <Header />
      <Welcome />
      <About />
      <Experience />
    </>
  );
}

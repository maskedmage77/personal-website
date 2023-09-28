import Welcome from "../components/Welcome";
import Header from "../components/Header";
import About from "../components/About";
import Experience from "../components/Experience";

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

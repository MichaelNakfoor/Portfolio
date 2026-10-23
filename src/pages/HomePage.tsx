import Work from "../components/Work";
import Skills from "../components/Skills";
import About from "../components/About";

export default function HomePage() {
  return (
    <>
      <Work />
      <Skills />
      <About showSignature={false} />
    </>
  );
}

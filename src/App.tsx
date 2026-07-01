import { Box } from '@chakra-ui/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Concept } from './components/Concept';
import { Gallery } from './components/Gallery';
import { Menu } from './components/Menu';
import { Flow } from './components/Flow';
import { InstagramCTA } from './components/InstagramCTA';
import { AccessInfo } from './components/AccessInfo';
import { Footer } from './components/Footer';

function App() {
  return (
    <Box minH="100vh">
      <Navbar />
      <main>
        <Hero />
        <Concept />
        <Gallery />
        <Menu />
        <Flow />
        <InstagramCTA />
        <AccessInfo />
      </main>
      <Footer />
    </Box>
  );
}

export default App;

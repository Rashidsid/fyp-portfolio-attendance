import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { TechStack } from './components/TechStack';
import { AdminFeatures } from './components/AdminFeatures';
import { WorkFlow } from './components/WorkFlow';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="tech-stack">
        <TechStack />
      </div>
      <div id="admin">
        <AdminFeatures />
      </div>
      <div id="workflow">
        <WorkFlow />
      </div>
      <Footer />
    </div>
  );
}
// Main layout

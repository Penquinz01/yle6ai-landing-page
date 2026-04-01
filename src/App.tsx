import Hero from './components/Hero';
import Problem from './components/Problem';
import WorkflowVisualizer from './components/WorkflowVisualizer';
import Capabilities from './components/Capabilities';
import Industries from './components/Industries';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Problem />
      <WorkflowVisualizer />
      <Capabilities />
      <Industries />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

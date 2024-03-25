import Header from './components/header';
import IntroSection from './Sections/intro';
import AboutSection from './Sections/about';
import OverviewSection from './Sections/overview';
import VideoSection from './Sections/video';
import CreativeSpeakersSection from './Sections/creativespeakers';
import ProgramsSection from './Sections/programs';
import RegisterSection from './Sections/register';
import FAQSection from './Sections/faq';
import VenueSection from './Sections/venue';
import SponsorsSection from './Sections/sponsors';
import ContactSection from './Sections/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroSection />
      <AboutSection />
      <OverviewSection />
      <VideoSection />
      <CreativeSpeakersSection />
      <ProgramsSection />
      <RegisterSection />
      <FAQSection />
      <VenueSection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

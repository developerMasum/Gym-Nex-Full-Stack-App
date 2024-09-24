import AccordionAbout from "./Components/Accordion";
import AboutBanner from "./Components/Banner";
import Journey from "./Components/Journey";
import Trainers from "./Components/Trainers";

const AboutPage = () => {
  return (
    <>
      <AboutBanner />
      <AccordionAbout />
      <Journey />
      <Trainers />
    </>
  );
};

export default AboutPage;

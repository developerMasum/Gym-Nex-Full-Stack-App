import ReuseAbleBanner from "@/components/Common/ReuseAbleBanner";
import ContactSection from "./Components/ContactSection";
// import Map from "./Components/Maps";

const ContactPage = () => {
  return (
    <div>
      <ReuseAbleBanner name="Contact" path="Contact" />
      {/* <Map /> */}
      <ContactSection />
    </div>
  );
};

export default ContactPage;

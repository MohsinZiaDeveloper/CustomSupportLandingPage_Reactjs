import "./App.css";
import CustomsClearance from "./components/CustomsClearance";
import ContactUs from "./components/ContactUs";
import CustomSupport from "./components/CustomSupport";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HowWeWork from "./components/HowWeWork";
import LeadingCustoms from "./components/LeadingCustoms";
import Nav from "./components/Nav";
import Plan from "./components/Plan";
import Ship from "./components/Ship";
import WeOffer from "./components/WeOffer";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <HowWeWork />
      <LeadingCustoms />
      <Plan />
      <WeOffer />
      <Ship />
      <CustomSupport />
      <CustomsClearance />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;

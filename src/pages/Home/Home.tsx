import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Services from "../../components/Services/Services";
import Portfolio from "../../components/Portfolio/Portfolio";
import Process from "../../components/Process/Process";
import WhyUs from "../../components/WhyUs/WhyUs";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <WhyUs/>
      <Testimonials/>
      <FAQ/>
      <Footer/>
    </>
  );
};

export default Home;
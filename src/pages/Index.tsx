import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import Differentials from "@/components/Differentials";
import HowItWorks from "@/components/HowItWorks";
import Trust from "@/components/Trust";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BrandLogos from "@/components/BrandLogos";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Differentials />
        <HowItWorks />
        <Trust />
        <Contact />
      </main>
      <BrandLogos />
      <Footer />
    </div>
  );
};

export default Index;

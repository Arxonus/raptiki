import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Lessons from "@/components/Lessons";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-body">
      <Header />
      <main>
        <Hero />
        <Products />
        <Lessons />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

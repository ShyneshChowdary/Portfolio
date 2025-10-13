import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Education />
      <Contact />
      
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Shynesh Raparla. Building the future with AI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Shynesh Raparla
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Aspiring AI Developer
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            From Vijayawada, India | Building the Future with Artificial Intelligence
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              variant="hero" 
              size="lg"
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              asChild
            >
              <a href="https://www.linkedin.com/in/shyneshraparla" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              asChild
            >
              <a href="https://x.com/ShyneshChowdary" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-5 w-5" />
                X Profile
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

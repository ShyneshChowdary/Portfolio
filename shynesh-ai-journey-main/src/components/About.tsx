import { Card, CardContent } from "@/components/ui/card";
import { Target, Globe, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A passionate technologist on a mission to shape the future through artificial intelligence
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border-2 hover:border-secondary transition-all duration-300">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-secondary/20 rounded-full">
                  <Target className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Goal</h3>
              <p className="text-muted-foreground">
                To become a skilled AI Developer and contribute to cutting-edge artificial intelligence solutions
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-accent transition-all duration-300">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-accent/20 rounded-full">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Next Step</h3>
              <p className="text-muted-foreground">
                Planning to pursue Masters degree in France to expand knowledge and global perspective
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-2 hover:border-primary transition-all duration-300">
            <CardContent className="pt-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="p-3 bg-primary/20 rounded-full">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Passion</h3>
              <p className="text-muted-foreground">
                Driven by curiosity and determination to explore the frontiers of AI and machine learning
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

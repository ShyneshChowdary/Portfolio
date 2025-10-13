import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-lg">
            Feel free to reach out for collaborations or opportunities
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Get in Touch</CardTitle>
            <CardDescription className="text-base">
              Available for opportunities and collaborations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full justify-start text-lg hover:bg-primary/10 hover:border-primary"
                asChild
              >
                <a href="https://www.linkedin.com/in/shyneshraparla" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-3 h-6 w-6 text-primary" />
                  <span>Connect on LinkedIn</span>
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full justify-start text-lg hover:bg-secondary/10 hover:border-secondary"
                asChild
              >
                <a href="https://x.com/ShyneshChowdary" target="_blank" rel="noopener noreferrer">
                  <Twitter className="mr-3 h-6 w-6 text-secondary" />
                  <span>Follow on X</span>
                </a>
              </Button>
              
              <div className="pt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Based in Vijayawada, India
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;

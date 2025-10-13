import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, School, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      degree: "Bachelor of Technology (BTech)",
      institution: "Lakireddy Balireddy College of Engineering",
      location: "Mylavaram, India",
      type: "Undergraduate"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-secondary" />,
      degree: "Intermediate Education",
      institution: "Sastra Jr College",
      location: "Kanuru, India",
      type: "Higher Secondary"
    },
    {
      icon: <School className="h-8 w-8 text-accent" />,
      degree: "Secondary Education",
      institution: "Viswabharari EM High School",
      location: "Gudivada, India",
      type: "High School"
    }
  ];

  return (
    <section id="education" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Education
          </h2>
          <p className="text-muted-foreground text-lg">
            My academic journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <CardHeader>
                <div className="mb-4">{edu.icon}</div>
                <CardTitle className="text-xl">{edu.type}</CardTitle>
                <CardDescription className="text-base font-semibold text-foreground">
                  {edu.degree}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-muted-foreground">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

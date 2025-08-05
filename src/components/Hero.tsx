import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary to-secondary overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: "url('/lovable-uploads/a127b764-b04a-4deb-bb07-51a08c7ef298.png')"
        }}
      />
      
      {/* Curved Green Element */}
      <div className="absolute bottom-0 right-0 w-full h-full">
        <svg 
          viewBox="0 0 1200 800" 
          className="absolute bottom-0 right-0 w-full h-full"
          preserveAspectRatio="xMaxYMax slice"
        >
          <path 
            d="M400 800 Q800 200 1200 400 L1200 800 Z" 
            fill="hsl(var(--accent))" 
            opacity="0.6"
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="max-w-2xl">
          <h1 className="font-dela text-5xl md:text-7xl text-primary-foreground leading-tight mb-6 tracking-wide">
            WE MANAGE EV LOADS.
            <br />
            AND SO MUCH MORE.
          </h1>
          
          <p className="font-chivo text-xl md:text-2xl text-primary-foreground/90 mb-12 leading-relaxed">
            Industry-leading EV load management and insights for electric utilities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-8 py-4 text-lg"
            >
              SCHEDULE A CALL
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-chivo font-bold px-8 py-4 text-lg"
            >
              SIGN UP
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
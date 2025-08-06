import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Blue curved background */}
      <div className="absolute top-0 left-0 w-full h-[60vh] md:h-[70vh] z-5">
        <svg 
          viewBox="0 0 1200 600" 
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 0 L1200 0 L1200 400 Q600 500 0 450 Z" 
            fill="hsl(var(--primary))"
          />
        </svg>
      </div>
      
      {/* Decorative shapes */}
      <div className="absolute top-16 right-4 md:top-24 md:right-8 w-12 h-12 md:w-20 md:h-20 opacity-20 z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="hsl(var(--accent))" />
        </svg>
      </div>
      
      <div className="absolute bottom-32 right-8 md:bottom-40 md:right-16 w-10 h-10 md:w-16 md:h-16 opacity-15 z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path 
            d="M50 100 Q20 60 60 40 Q120 20 160 60 Q180 100 140 140 Q80 160 50 100 Z" 
            fill="hsl(var(--accent))"
          />
        </svg>
      </div>
      
      {/* Main content */}
      <div className="relative z-20 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <h1 className="font-dela text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-4 md:mb-6">
              WE MANAGE EV LOADS.
              <br />
              AND SO MUCH MORE.
            </h1>
            
            <p className="font-chivo text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 md:mb-10 leading-relaxed max-w-2xl">
              Industry-leading EV load management and insights for electric utilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-6 py-3 text-base md:px-8 md:py-4 md:text-lg"
              >
                SCHEDULE A CALL
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-chivo font-bold px-6 py-3 text-base md:px-8 md:py-4 md:text-lg"
              >
                SIGN UP
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
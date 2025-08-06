import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Blue Curved Background Section with background image */}
      <div className="absolute top-0 left-0 w-full h-3/4 z-5">
        <svg 
          viewBox="0 0 1200 600" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern id="backgroundPattern" x="0" y="0" width="100%" height="100%">
              <image href="/background.jpeg" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"/>
            </pattern>
          </defs>
          <path 
            d="M0 0 L1200 0 L1200 400 Q800 500 400 450 Q200 420 0 480 Z" 
            fill="url(#backgroundPattern)"
          />
        </svg>
      </div>
      
      {/* Green Organic Shape Elements */}
      <div className="absolute top-1/4 right-4 md:right-16 w-32 h-32 md:w-64 md:h-64 opacity-20 z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="hsl(var(--accent))" />
        </svg>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 md:right-1/3 w-24 h-24 md:w-48 md:h-48 opacity-15 z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path 
            d="M50 100 Q20 60 60 40 Q120 20 160 60 Q180 100 140 140 Q80 160 50 100 Z" 
            fill="hsl(var(--accent))"
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12 flex items-start pt-20 md:pt-32 min-h-screen">
        <div className="w-full max-w-4xl relative -ml-16 md:-ml-48 lg:-ml-64 -mt-16 md:-mt-24 lg:-mt-32">
          {/* Blob shape background */}
          <div className="absolute inset-0 -m-8 md:-m-12 lg:-m-16 z-0">
            <svg 
              viewBox="0 0 1200 800" 
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path 
                d="M100 100 C200 50, 400 80, 600 120 C800 160, 1000 200, 1100 300 C1200 400, 1150 500, 1000 550 C850 600, 600 580, 400 520 C200 460, 100 400, 80 300 C60 200, 80 150, 100 100 Z" 
                fill="hsl(var(--primary))"
              />
            </svg>
          </div>
          
          {/* Conteúdo */}
          <div className="relative z-10 p-6 md:p-12 lg:p-16">
            <h1 className="font-dela text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-4 md:mb-6 tracking-wide">
              WE MANAGE EV LOADS.
              <br />
              AND SO MUCH MORE.
            </h1>
            
            <p className="font-chivo text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-8 md:mb-12 leading-relaxed">
              Industry-leading EV load management and insights for electric utilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
              >
                SCHEDULE A CALL
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-chivo font-bold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg"
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
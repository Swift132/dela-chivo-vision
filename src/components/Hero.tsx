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
      <div className="absolute top-1/4 right-2 sm:right-4 md:right-8 lg:right-16 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 opacity-20 z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="hsl(var(--accent))" />
        </svg>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 sm:right-1/3 md:right-1/3 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-36 lg:h-36 xl:w-48 xl:h-48 opacity-15 z-10">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path 
            d="M50 100 Q20 60 60 40 Q120 20 160 60 Q180 100 140 140 Q80 160 50 100 Z" 
            fill="hsl(var(--accent))"
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12 flex items-start pt-12 sm:pt-16 md:pt-24 lg:pt-32 min-h-screen">
        <div className="w-full max-w-5xl relative -ml-4 sm:-ml-8 md:-ml-16 lg:-ml-32 xl:-ml-48 -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-24 xl:-mt-32">
          {/* Blob shape background */}
          <div className="absolute inset-0 -m-4 sm:-m-6 md:-m-8 lg:-m-12 xl:-m-16 z-0">
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
          
          {/* Content */}
          <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16">
            <h1 className="font-dela text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-primary-foreground leading-tight mb-3 sm:mb-4 md:mb-6 tracking-wide">
              WE MANAGE EV LOADS.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              AND SO MUCH MORE.
            </h1>
            
            <p className="font-chivo text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/90 mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed max-w-3xl">
              Industry-leading EV load management and insights for electric utilities.
            </p>
            
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-4 sm:px-6 md:px-8 py-3 md:py-4 text-sm sm:text-base md:text-lg w-full xs:w-auto"
              >
                SCHEDULE A CALL
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-chivo font-bold px-4 sm:px-6 md:px-8 py-3 md:py-4 text-sm sm:text-base md:text-lg w-full xs:w-auto"
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
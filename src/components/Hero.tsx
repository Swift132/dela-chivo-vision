import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/158fdc9a-3bf1-40d5-ab60-88704c847a55.png"
          alt="Electric vehicle charging background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Blue curved background section */}
      <div className="absolute top-0 left-0 w-full h-3/4 z-10">
        <svg 
          viewBox="0 0 1440 900" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMin slice"
        >
          <path 
            d="M0 0 L1440 0 L1440 600 Q1100 650 800 600 Q500 550 300 580 Q100 610 0 550 Z" 
            fill="hsl(var(--primary) / 0.85)"
          />
        </svg>
      </div>

      {/* Green organic shape at bottom */}
      <div className="absolute bottom-0 left-0 w-full z-15">
        <svg 
          viewBox="0 0 1440 200" 
          className="w-full h-32 md:h-48 lg:h-64"
          preserveAspectRatio="none"
        >
          <path 
            d="M0 200 Q360 100 720 150 Q1080 200 1440 120 L1440 200 Z" 
            fill="hsl(var(--accent))"
          />
        </svg>
      </div>
      
      {/* Content with polygon background */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex items-start pt-20 md:pt-32 min-h-screen">
        <div className="w-full max-w-4xl relative">
          {/* Polygon shape background for text */}
          <div className="absolute inset-0 -m-8 md:-m-12 lg:-m-16 z-0">
            <svg 
              viewBox="0 0 1200 800" 
              className="w-full h-full"
              preserveAspectRatio="xMidYMid meet"
            >
              <path 
                d="M100 100 C200 50, 400 80, 600 120 C800 160, 1000 200, 1100 300 C1200 400, 1150 500, 1000 550 C850 600, 600 580, 400 520 C200 460, 100 400, 80 300 C60 200, 80 150, 100 100 Z" 
                fill="hsl(var(--primary) / 0.9)"
              />
            </svg>
          </div>

          <div className="relative z-10 p-6 md:p-12 lg:p-16">
            <h1 className="font-dela text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-6 sm:mb-8 tracking-wide">
              WE MANAGE EV LOADS.
              <br />
              <span className="block">AND SO MUCH MORE.</span>
            </h1>
            
            <p className="font-chivo text-lg sm:text-xl lg:text-2xl text-primary-foreground/90 mb-8 sm:mb-12 leading-relaxed max-w-xl">
              Industry-leading EV load management and insights for electric utilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-8 py-4 text-base rounded-full"
              >
                SCHEDULE A CALL
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-chivo font-bold px-8 py-4 text-base rounded-full bg-transparent"
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
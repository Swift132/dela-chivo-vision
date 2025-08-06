import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Blue curved background section */}
      <div className="absolute inset-0 z-0">
        <svg 
          viewBox="0 0 1440 900" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMin slice"
        >
          <path 
            d="M0 0 L1440 0 L1440 600 Q1100 650 800 600 Q500 550 300 580 Q100 610 0 550 Z" 
            fill="hsl(var(--primary))"
          />
        </svg>
      </div>

      {/* Green organic shape at bottom */}
      <div className="absolute bottom-0 left-0 w-full z-10">
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

      {/* Car image */}
      <div className="absolute right-4 sm:right-8 lg:right-16 bottom-16 sm:bottom-20 lg:bottom-24 z-20 w-1/2 sm:w-2/5 lg:w-1/3 max-w-md">
        <img 
          src="/lovable-uploads/33e95573-8f58-4715-ae91-db7a458dc6db.png"
          alt="Electric vehicle charging"
          className="w-full h-auto object-contain"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="max-w-2xl lg:max-w-3xl">
          <h1 className="font-dela text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mb-6 sm:mb-8 tracking-wide">
            WE MANAGE EV LOADS.
            <br />
            <span className="block">AND SO MUCH MORE.</span>
          </h1>
          
          <p className="font-chivo text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 leading-relaxed max-w-xl">
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
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-chivo font-bold px-8 py-4 text-base rounded-full bg-transparent"
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
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Blue Curved Background Section */}
      <div className="absolute top-0 left-0 w-full h-3/4">
        <svg 
          viewBox="0 0 1200 600" 
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <path 
            d="M0 0 L1200 0 L1200 400 Q800 500 400 450 Q200 420 0 480 Z" 
            fill="hsl(var(--primary))"
          />
        </svg>
      </div>
      
      {/* Green Organic Shape Elements */}
      <div className="absolute top-1/4 right-16 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" fill="hsl(var(--accent))" />
        </svg>
      </div>
      
      <div className="absolute bottom-1/4 right-1/3 w-48 h-48 opacity-15">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path 
            d="M50 100 Q20 60 60 40 Q120 20 160 60 Q180 100 140 140 Q80 160 50 100 Z" 
            fill="hsl(var(--accent))"
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="max-w-3xl">
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
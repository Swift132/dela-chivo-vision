import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary px-4 py-3 md:px-6 md:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/eae3e60e-5093-4dc0-a582-b4a8bc04aadc.png" 
            alt="Sagewell" 
            className="h-10 md:h-12 lg:h-14"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <a href="#" className="text-primary-foreground hover:text-accent transition-colors font-chivo font-medium text-sm lg:text-base">
            SOLUTIONS
          </a>
          <a href="#" className="text-primary-foreground hover:text-accent transition-colors font-chivo font-medium text-sm lg:text-base">
            CASE STUDIES
          </a>
          <a href="#" className="text-primary-foreground hover:text-accent transition-colors font-chivo font-medium text-sm lg:text-base">
            ABOUT US
          </a>
        </nav>
        
        <Button 
          variant="default" 
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-3 py-2 text-xs md:px-4 md:py-2 md:text-sm lg:px-6 lg:text-base"
        >
          CONTACT US
        </Button>
      </div>
    </header>
  );
};

export default Header;
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative z-50 bg-white px-4 sm:px-6 lg:px-8 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/eae3e60e-5093-4dc0-a582-b4a8bc04aadc.png" 
            alt="Sagewell" 
            className="h-8 sm:h-10 md:h-12"
          />
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          <a href="#" className="text-foreground hover:text-primary transition-colors font-chivo font-medium text-sm xl:text-base">
            SOLUTIONS
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-chivo font-medium text-sm xl:text-base">
            CASE STUDIES
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors font-chivo font-medium text-sm xl:text-base">
            ABOUT US
          </a>
        </nav>
        
        <Button 
          variant="default" 
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full"
        >
          CONTACT US
        </Button>
      </div>
    </header>
  );
};

export default Header;
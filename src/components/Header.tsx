import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary px-4 py-4 md:px-6 md:py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/eae3e60e-5093-4dc0-a582-b4a8bc04aadc.png" 
            alt="Sagewell" 
            className="h-16 md:h-20 lg:h-24"
          />
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <a href="#" className="text-primary-foreground hover:text-accent transition-colors font-chivo font-medium text-base xl:text-lg">
            SOLUTIONS
          </a>
          <a href="#" className="text-primary-foreground hover:text-accent transition-colors font-chivo font-medium text-base xl:text-lg">
            CASE STUDIES
          </a>
          <a href="#" className="text-primary-foreground hover:text-accent transition-colors font-chivo font-medium text-base xl:text-lg">
            ABOUT US
          </a>
        </nav>
        
        <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:text-lg">
          CONTACT US
        </Button>
      </div>
    </header>
  );
};

export default Header;
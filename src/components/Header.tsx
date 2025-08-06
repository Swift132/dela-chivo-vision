import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="relative z-50 bg-primary px-0 sm:px-2 lg:px-4 py-6 shadow-sm">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center ml-2 sm:ml-4 lg:ml-6">
          <img 
            src="/header-logo.png" 
            alt="Sagewell" 
            className="h-16 sm:h-20 md:h-24"
          />
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
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
        
        <Button 
          variant="default" 
          className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-base sm:text-lg rounded-full"
        >
          CONTACT US
        </Button>
      </div>
    </header>
  );
};

export default Header;
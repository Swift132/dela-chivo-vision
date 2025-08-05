import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-primary px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/eae3e60e-5093-4dc0-a582-b4a8bc04aadc.png" 
            alt="Sagewell" 
            className="h-8"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-primary-foreground hover:text-accent transition-colors font-chivo font-medium">
            SOLUTIONS
          </a>
          <a href="#" className="text-primary-foreground hover:text-accent transition-colors font-chivo font-medium">
            CASE STUDIES
          </a>
          <a href="#" className="text-primary-foreground hover:text-accent transition-colors font-chivo font-medium">
            ABOUT US
          </a>
        </nav>
        
        <Button variant="default" className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-6">
          CONTACT US
        </Button>
      </div>
    </header>
  );
};

export default Header;
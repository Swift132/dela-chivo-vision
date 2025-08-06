import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <>
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

        {/* Behind main text SVG */}
        <div className="absolute left-0 -top-16 z-10 w-[40%] sm:w-[50%] md:w-[55%] lg:w-[60%] xl:w-[65%] h-full">
          <img
            src="/behind-main-text.svg"
            alt="Background shape"
            className="w-full h-full object-contain"
          />
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
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
        
        {/* Content with polygon background */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 flex items-start pt-32 md:pt-40 lg:pt-48 min-h-screen ml-4 sm:ml-6 md:ml-8 lg:ml-10">
          <div className="w-full max-w-7xl relative">
            <div className="relative z-10 p-6 md:p-12 lg:p-16">
              <h1 className="font-dela text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground leading-tight mb-6 sm:mb-8 tracking-wide">
                <div className="mb-4">
                  WE MANAGE EV LOADS.
                </div>
                <div>
                  AND SO MUCH MORE.
                </div>
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

      {/* Solutions Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 md:mb-16">
            <h2 className="font-dela text-3xl md:text-4xl lg:text-5xl text-primary mb-4 sm:mb-0">
              OUR SOLUTIONS
            </h2>
            <Button 
              variant="default" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-chivo font-bold px-6 py-3 text-sm rounded-full"
            >
              VIEW ALL OUR SOLUTIONS
            </Button>
          </div>

          {/* Solution Card */}
          <div className="bg-background rounded-3xl overflow-hidden shadow-lg relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/lovable-uploads/47f4ea7e-c50a-4f88-b9b0-5acb385ceb43.png"
                alt="Person with electric vehicle"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Orange curved outline with tapering effect */}
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Orange outline with tapering - thicker at bottom, thinner at top */}
                <defs>
                  <linearGradient id="orangeTaper" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#e8834a" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#e8834a" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#e8834a" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                
                {/* Main orange outline path */}
                <path
                  d="M0 0 L53 0 Q63 20 63 50 Q63 80 53 100 L0 100 Z"
                  fill="url(#orangeTaper)"
                  stroke="#e8834a"
                  strokeWidth="0.15"
                />
                
                {/* Additional tapering effect with multiple paths */}
                <path
                  d="M0 0 L52.5 0 Q62.5 20 62.5 50 Q62.5 80 52.5 100 L0 100 Z"
                  fill="none"
                  stroke="#e8834a"
                  strokeWidth="0.08"
                  opacity="0.6"
                />
                
                <path
                  d="M0 0 L52 0 Q62 20 62 50 Q62 80 52 100 L0 100 Z"
                  fill="none"
                  stroke="#e8834a"
                  strokeWidth="0.03"
                  opacity="0.4"
                />
              </svg>
            </div>
            
            {/* White curved overlay extending to the left */}
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 0 L50 0 Q60 20 60 50 Q60 80 50 100 L0 100 Z"
                  fill="white"
                />
              </svg>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="max-w-md">
                <div className="mb-4">
                  <span className="text-primary font-chivo font-medium text-sm uppercase tracking-wide">
                    EV LOAD MANAGEMENT
                  </span>
                </div>
                
                <h3 className="font-dela text-2xl md:text-3xl lg:text-4xl text-primary mb-6 leading-tight">
                  BRING YOUR OWN CHARGER
                </h3>
                
                <p className="text-gray-600 font-chivo text-base md:text-lg leading-relaxed mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-6 py-3 text-sm rounded-full self-start"
                >
                  LEARN MORE: BRING YOUR OWN CHARGER
                </Button>
              </div>
            </div>
          </div>

          {/* Second Solution Card */}
          <div className="bg-background rounded-3xl overflow-hidden shadow-lg relative mt-8 md:mt-12">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/background.jpeg"
                alt="Electric vehicle charging station"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Green curved outline with tapering effect */}
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Green outline with tapering - thicker at bottom, thinner at top */}
                <defs>
                  <linearGradient id="greenTaper" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#61d345" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#61d345" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#61d345" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                
                {/* Main green outline path */}
                <path
                  d="M0 0 L53 0 Q63 20 63 50 Q63 80 53 100 L0 100 Z"
                  fill="url(#greenTaper)"
                  stroke="#61d345"
                  strokeWidth="0.15"
                />
                
                {/* Additional tapering effect with multiple paths */}
                <path
                  d="M0 0 L52.5 0 Q62.5 20 62.5 50 Q62.5 80 52.5 100 L0 100 Z"
                  fill="none"
                  stroke="#61d345"
                  strokeWidth="0.08"
                  opacity="0.6"
                />
                
                <path
                  d="M0 0 L52 0 Q62 20 62 50 Q62 80 52 100 L0 100 Z"
                  fill="none"
                  stroke="#61d345"
                  strokeWidth="0.03"
                  opacity="0.4"
                />
              </svg>
            </div>
            
            {/* White curved overlay extending to the right */}
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M50 0 L100 0 L100 100 L50 100 Q40 80 40 50 Q40 20 50 0 Z"
                  fill="white"
                />
              </svg>
            </div>
            
            {/* Content positioned on the right */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16 flex justify-end">
              <div className="max-w-md text-right">
                <div className="mb-4">
                  <span className="text-primary font-chivo font-medium text-sm uppercase tracking-wide">
                    SMART CHARGING
                  </span>
                </div>
                
                <h3 className="font-dela text-2xl md:text-3xl lg:text-4xl text-primary mb-6 leading-tight">
                  LOAD BALANCING
                </h3>
                
                <p className="text-gray-600 font-chivo text-base md:text-lg leading-relaxed mb-8">
                  Optimize your electric vehicle charging infrastructure with intelligent load balancing technology. Reduce grid stress and maximize efficiency across your charging network.
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-6 py-3 text-sm rounded-full self-end"
                >
                  LEARN MORE: LOAD BALANCING
                </Button>
              </div>
            </div>
          </div>

          {/* Third Solution Card */}
          <div className="bg-background rounded-3xl overflow-hidden shadow-lg relative mt-8 md:mt-12">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="/lovable-uploads/a127b764-b04a-4deb-bb07-51a08c7ef298.png"
                alt="Electric vehicle charging infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Blue curved outline with tapering effect */}
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                {/* Blue outline with tapering - thicker at bottom, thinner at top */}
                <defs>
                  <linearGradient id="blueTaper" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                
                {/* Main blue outline path */}
                <path
                  d="M0 0 L53 0 Q63 20 63 50 Q63 80 53 100 L0 100 Z"
                  fill="url(#blueTaper)"
                  stroke="#3b82f6"
                  strokeWidth="0.15"
                />
                
                {/* Additional tapering effect with multiple paths */}
                <path
                  d="M0 0 L52.5 0 Q62.5 20 62.5 50 Q62.5 80 52.5 100 L0 100 Z"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="0.08"
                  opacity="0.6"
                />
                
                <path
                  d="M0 0 L52 0 Q62 20 62 50 Q62 80 52 100 L0 100 Z"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="0.03"
                  opacity="0.4"
                />
              </svg>
            </div>
            
            {/* White curved overlay extending to the left */}
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 0 L50 0 Q60 20 60 50 Q60 80 50 100 L0 100 Z"
                  fill="white"
                />
              </svg>
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="max-w-md">
                <div className="mb-4">
                  <span className="text-primary font-chivo font-medium text-sm uppercase tracking-wide">
                    GRID OPTIMIZATION
                  </span>
                </div>
                
                <h3 className="font-dela text-2xl md:text-3xl lg:text-4xl text-primary mb-6 leading-tight">
                  SMART GRID INTEGRATION
                </h3>
                
                <p className="text-gray-600 font-chivo text-base md:text-lg leading-relaxed mb-8">
                  Seamlessly integrate EV charging with smart grid technology. Monitor, control, and optimize energy distribution across your entire network infrastructure.
                </p>
                
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-6 py-3 text-sm rounded-full self-start"
                >
                  LEARN MORE: SMART GRID INTEGRATION
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EV Adoption Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between mb-16">
            {/* Left Section - Main Heading */}
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="font-dela text-4xl md:text-5xl lg:text-6xl text-[#1e3a8a] leading-tight mb-6">
                <div className="mb-2">EV ADOPTION</div>
                <div>STARTS HERE.</div>
              </h2>
              <p className="font-chivo text-lg md:text-xl text-[#1e3a8a] leading-relaxed max-w-lg">
                Follow the data, understand your customers and manage your EV loads with sophisticated AI-driven programs.
              </p>
            </div>

            {/* Right Section - Lorem Ipsum */}
            <div className="w-full lg:w-1/2 lg:pl-12">
              <p className="font-chivo text-base md:text-lg text-[#1e3a8a] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>

          {/* Bottom Section - Apple Logos */}
          <div className="flex justify-center items-center space-x-8 md:space-x-12 lg:space-x-16">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-12 h-12 md:w-16 md:h-16">
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-full h-full fill-[#7A92A8]"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="bg-background py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Section - Image Container */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative">
                <img
                  src="/round-image.svg"
                  alt="Round image frame"
                  className="w-full h-auto"
                />
                
                {/* Circular image inside */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 rounded-full overflow-hidden">
                    <img
                      src="/sunset-car.jpg"
                      alt="Person with electric vehicle at sunset"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Text Content */}
            <div className="w-full lg:w-1/2 lg:pl-8">
              <div className="mb-4">
                <span className="text-primary font-chivo font-medium text-sm uppercase tracking-wide">
                  CUSTOMER XY
                </span>
              </div>
              
              <h3 className="font-dela text-3xl md:text-4xl lg:text-5xl text-primary mb-6 leading-tight">
                45% INCREASE IN ADOPTION RATES
              </h3>
              
              <p className="text-gray-600 font-chivo text-base md:text-lg leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-6 py-3 text-sm rounded-full"
              >
                READ THE CASE STUDY
              </Button>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20">
            <Button 
              variant="outline" 
              size="icon"
              className="w-12 h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 border-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
          </div>
          
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20">
            <Button 
              variant="outline" 
              size="icon"
              className="w-12 h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 border-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="w-3 h-3 rounded-full bg-primary/30"></div>
            <div className="w-3 h-3 rounded-full bg-primary/30"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground relative">
        {/* Background with organic cut */}
        <div className="absolute inset-0">
          <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="footerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary))" />
              </linearGradient>
            </defs>
            <path 
              d="M0 0 L100 0 L100 100 L0 100 Z" 
              fill="url(#footerGradient)"
            />
          </svg>
        </div>
        
        {/* Organic cut overlay */}
        <div className="absolute top-0 left-0 w-full">
          <svg 
            viewBox="0 0 1440 200" 
            className="w-full h-32 md:h-48 lg:h-64"
            preserveAspectRatio="none"
            style={{ transform: 'rotate(180deg)' }}
          >
            <path 
              d="M0 200 Q360 100 720 150 Q1080 200 1440 120 L1440 200 Z" 
              fill="hsl(var(--background))"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 pt-32 md:pt-40">
          {/* Newsletter Section */}
          <div className="text-center mb-16 md:mb-20">
            <h3 className="font-dela text-3xl md:text-4xl lg:text-5xl mb-4">
              STAY ON TOP
            </h3>
            <p className="font-chivo text-lg md:text-xl mb-8 text-primary-foreground/90">
              Get fresh industry insights into your inbox!
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-chivo font-bold px-8 py-4 rounded-xl"
                >
                  SIGN UP FOR OUR NEWSLETTER
                </Button>
              </div>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Left Column - Logo and Description */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <h4 className="font-dela text-2xl md:text-3xl">sagewell</h4>
              </div>
              <p className="font-chivo text-primary-foreground/80 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Right Column - Follow Us and Contact Us */}
            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Follow Us */}
              <div>
                <h5 className="font-dela text-lg md:text-xl mb-4">FOLLOW US</h5>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </Button>
                  <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </Button>
                </div>
              </div>

              {/* Contact Us */}
              <div>
                <h5 className="font-dela text-lg md:text-xl mb-4">CONTACT US</h5>
                <div className="space-y-2 font-chivo text-primary-foreground/90">
                  <p>(617) 963-8141</p>
                  <p>info@sagewell.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - Copyright and Legal */}
          <div className="border-t border-white/20 pt-8 pb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="text-sm text-primary-foreground/70 font-chivo leading-relaxed max-w-2xl">
                Copyright © 2008-2024 Sagewell, Inc. Sagewell, EVSage, SageSight, SageScore, and VPPSage are service marks of Sagewell, Inc. Bring Your Own Charger is a registered trademark of Sagewell, Inc. All other trademarks cited herein are the property of their respective owners.
              </div>
              <div className="flex space-x-6 text-sm font-chivo">
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  PRIVACY POLICY
                </a>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  TERMS AND CONDITIONS
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Hero;
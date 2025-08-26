import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/fashion-hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Elegant fashion collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
            Discover Your
            <span className="block text-fashion-rose">Style</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Explore our curated collection of elegant fashion pieces designed for the modern woman.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-button text-primary-foreground hover:opacity-90 transition-all duration-300">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-fashion-rose text-fashion-rose hover:bg-fashion-blush">
              View Collection
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-fashion-rose rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-fashion-rose/60 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-fashion-rose/40 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
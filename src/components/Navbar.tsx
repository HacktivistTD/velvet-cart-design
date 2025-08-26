import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingBag, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">ÉLÉGANTE</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-foreground hover:text-fashion-rose transition-colors duration-200">
                Home
              </a>
              <a href="/products" className="text-foreground hover:text-fashion-rose transition-colors duration-200">
                Products
              </a>
              <a href="/about" className="text-foreground hover:text-fashion-rose transition-colors duration-200">
                About Us
              </a>
              <a href="/contact" className="text-foreground hover:text-fashion-rose transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-foreground hover:text-fashion-rose">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button variant="outline">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
            <a
              href="/"
              className="block px-3 py-2 text-foreground hover:text-fashion-rose transition-colors duration-200"
              onClick={toggleMenu}
            >
              Home
            </a>
            <a
              href="/products"
              className="block px-3 py-2 text-foreground hover:text-fashion-rose transition-colors duration-200"
              onClick={toggleMenu}
            >
              Products
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-foreground hover:text-fashion-rose transition-colors duration-200"
              onClick={toggleMenu}
            >
              About Us
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 text-foreground hover:text-fashion-rose transition-colors duration-200"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="flex items-center space-x-2 px-3 py-2">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-fashion-rose">
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="sm">
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-fashion-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-fashion-rose">ÉLÉGANTE</h3>
            <p className="text-gray-300 leading-relaxed">
              Discover timeless elegance with our curated collection of modern fashion pieces designed for the contemporary woman.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-fashion-rose">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-fashion-rose">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-fashion-rose">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-fashion-rose transition-colors">
                Home
              </a>
              <a href="/products" className="block text-gray-300 hover:text-fashion-rose transition-colors">
                Products
              </a>
              <a href="/about" className="block text-gray-300 hover:text-fashion-rose transition-colors">
                About Us
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-fashion-rose transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Categories</h4>
            <div className="space-y-2">
              <a href="/products?category=blouses" className="block text-gray-300 hover:text-fashion-rose transition-colors">
                Blouses
              </a>
              <a href="/products?category=crop-tops" className="block text-gray-300 hover:text-fashion-rose transition-colors">
                Crop Tops
              </a>
              <a href="/products?category=skirts" className="block text-gray-300 hover:text-fashion-rose transition-colors">
                Skirts
              </a>
              <a href="/products?category=frocks" className="block text-gray-300 hover:text-fashion-rose transition-colors">
                Frocks
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-fashion-rose" />
                <span className="text-gray-300">info@elegante.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-fashion-rose" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-fashion-rose" />
                <span className="text-gray-300">123 Fashion St, Style City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ÉLÉGANTE. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-fashion-rose text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-fashion-rose text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
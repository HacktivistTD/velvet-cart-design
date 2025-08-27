import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 bg-fashion-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              About ÉLÉGANTE
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover the story behind our passion for creating timeless fashion pieces that celebrate the modern woman's elegance and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2020, ÉLÉGANTE emerged from a simple belief: every woman deserves to feel confident and beautiful in what she wears. Our journey began with a small team of passionate designers who shared a vision of creating fashion that transcends trends and celebrates individuality.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                What started as a boutique collection has grown into a beloved brand, serving thousands of women who appreciate quality craftsmanship, thoughtful design, and sustainable fashion practices.
              </p>
              <Button className="bg-gradient-button text-primary-foreground hover:opacity-90">
                Shop Our Collection
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square bg-fashion-blush rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="h-16 w-16 text-fashion-rose mx-auto mb-4" />
                  <p className="text-fashion-charcoal font-semibold">Crafted with Love</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-fashion-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to empowering women through fashion that makes them feel confident, comfortable, and authentically themselves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8">
                <Heart className="h-12 w-12 text-fashion-rose mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Quality First</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We source the finest materials and work with skilled artisans to ensure every piece meets our high standards of quality and durability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8">
                <Award className="h-12 w-12 text-fashion-rose mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Sustainable Fashion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to ethical production practices and sustainable materials that respect both people and the planet.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="pt-8">
                <Users className="h-12 w-12 text-fashion-rose mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Community Focused</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in building a community of confident women who support and inspire each other to embrace their unique style.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-fashion-blush rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fashion-charcoal">1</span>
              </div>
              <h4 className="font-semibold text-primary mb-2">Authenticity</h4>
              <p className="text-sm text-muted-foreground">Stay true to our values and our customers' needs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-fashion-blush rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fashion-charcoal">2</span>
              </div>
              <h4 className="font-semibold text-primary mb-2">Innovation</h4>
              <p className="text-sm text-muted-foreground">Continuously evolve and improve our designs.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-fashion-blush rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fashion-charcoal">3</span>
              </div>
              <h4 className="font-semibold text-primary mb-2">Excellence</h4>
              <p className="text-sm text-muted-foreground">Deliver exceptional quality in every detail.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-fashion-blush rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-fashion-charcoal">4</span>
              </div>
              <h4 className="font-semibold text-primary mb-2">Empowerment</h4>
              <p className="text-sm text-muted-foreground">Help women feel confident and beautiful.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
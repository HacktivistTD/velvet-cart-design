import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, CreditCard } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { CartItem } from '@/types';
import blouseImage from '@/assets/blouse-1.jpg';
import cropTopImage from '@/assets/crop-top-1.jpg';

// Mock cart data - in real app this would come from context/state management
const mockCartItems: CartItem[] = [
  {
    product: {
      id: '1',
      title: 'Elegant Silk Blouse',
      description: '',
      price: 89,
      image: blouseImage,
      category: 'Blouses',
      sizes: ['XS', 'S', 'M', 'L', 'XL']
    },
    size: 'M',
    quantity: 2
  },
  {
    product: {
      id: '2',
      title: 'Chic Crop Top',
      description: '',
      price: 45,
      image: cropTopImage,
      category: 'Crop Tops',
      sizes: ['XS', 'S', 'M', 'L']
    },
    size: 'S',
    quantity: 1
  }
];

const Checkout = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    deliveryAddress: '',
    phoneNumber1: '',
    phoneNumber2: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const cartItems = mockCartItems;
  const subtotal = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = 10;
  const total = subtotal + shipping;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with Supabase to save orders
    // For now, just show success message
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. We'll contact you soon to confirm your order.",
      });
      setIsSubmitting(false);
      // In real app, redirect to order confirmation page
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-8 bg-fashion-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-primary">Checkout</h1>
          </div>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div>
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Cash on Delivery Details
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="deliveryAddress">Delivery Address *</Label>
                      <Textarea
                        id="deliveryAddress"
                        name="deliveryAddress"
                        value={formData.deliveryAddress}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Enter your complete delivery address including city, area, and landmark"
                        rows={4}
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phoneNumber1">Primary Phone Number *</Label>
                        <Input
                          id="phoneNumber1"
                          name="phoneNumber1"
                          type="tel"
                          value={formData.phoneNumber1}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="e.g., +1 (555) 123-4567"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phoneNumber2">Alternative Phone Number *</Label>
                        <Input
                          id="phoneNumber2"
                          name="phoneNumber2"
                          type="tel"
                          value={formData.phoneNumber2}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                          placeholder="e.g., +1 (555) 987-6543"
                        />
                      </div>
                    </div>

                    <div className="bg-fashion-blush p-4 rounded-lg">
                      <h4 className="font-semibold text-fashion-charcoal mb-2">Cash on Delivery</h4>
                      <p className="text-sm text-fashion-charcoal/80">
                        You will pay ${total.toFixed(2)} in cash when your order is delivered to your address.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-button text-primary-foreground hover:opacity-90"
                    >
                      {isSubmitting ? 'Processing Order...' : 'Place Order'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div>
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Order Items */}
                    <div className="space-y-3">
                      {cartItems.map((item) => (
                        <div key={`${item.product.id}-${item.size}`} className="flex gap-3">
                          <div className="w-16 h-16 flex-shrink-0">
                            <img
                              src={item.product.image}
                              alt={item.product.title}
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm text-primary truncate">
                              {item.product.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">
                                Size: {item.size}
                              </Badge>
                              <span className="text-xs text-muted-foreground">
                                Qty: {item.quantity}
                              </span>
                            </div>
                            <p className="text-sm font-semibold text-fashion-rose mt-1">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    {/* Price Summary */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span className="text-primary">Total</span>
                        <span className="text-fashion-rose">${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="bg-secondary/20 p-4 rounded-lg mt-6">
                      <h4 className="font-semibold text-sm mb-2">Delivery Information</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Free delivery on orders above $100</li>
                        <li>• Estimated delivery: 3-5 business days</li>
                        <li>• Cash payment on delivery</li>
                        <li>• 30-day return policy</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
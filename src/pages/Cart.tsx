import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
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

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const updateQuantity = (productId: string, size: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(productId, size);
      return;
    }

    setCartItems(items =>
      items.map(item =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeItem = (productId: string, size: string) => {
    setCartItems(items =>
      items.filter(item => !(item.product.id === productId && item.size === size))
    );
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  const shipping = 10; // Fixed shipping cost
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-primary mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Link to="/products">
              <Button className="bg-gradient-button text-primary-foreground hover:opacity-90">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-16 bg-fashion-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Shopping Cart
            </h1>
            <p className="text-lg text-muted-foreground">
              Review your items before checkout
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Cart Items ({cartItems.length})
              </h2>
              
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <Card key={`${item.product.id}-${item.size}`} className="border-border/50">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row gap-4">
                        {/* Product Image */}
                        <div className="w-full sm:w-24 h-32 sm:h-24 flex-shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.title}
                            className="w-full h-full object-cover rounded-md"
                          />
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-primary">{item.product.title}</h3>
                              <Badge variant="secondary" className="mt-1">
                                {item.product.category}
                              </Badge>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.product.id, item.size)}
                              className="text-muted-foreground hover:text-destructive"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                            <div className="flex items-center gap-4">
                              <span className="text-sm text-muted-foreground">Size: {item.size}</span>
                              <span className="font-semibold text-fashion-rose">${item.product.price}</span>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                                className="h-8 w-8"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                                className="h-8 w-8"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="border-border/50 sticky top-4">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold text-primary mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">${subtotal.toFixed(2)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-semibold">${shipping.toFixed(2)}</span>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-bold">
                        <span className="text-primary">Total</span>
                        <span className="text-fashion-rose">${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4">
                      <Link to="/checkout">
                        <Button className="w-full bg-gradient-button text-primary-foreground hover:opacity-90">
                          Proceed to Checkout
                        </Button>
                      </Link>
                      
                      <Link to="/products">
                        <Button variant="outline" className="w-full border-fashion-rose text-fashion-rose hover:bg-fashion-blush">
                          Continue Shopping
                        </Button>
                      </Link>
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

export default Cart;
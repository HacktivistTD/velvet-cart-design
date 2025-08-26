import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  sizes: string[];
}

const ProductCard = ({ id, title, price, image, category, sizes }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <Card className="group relative overflow-hidden bg-gradient-card border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Category Badge */}
        <Badge className="absolute top-3 left-3 bg-fashion-blush text-fashion-charcoal">
          {category}
        </Badge>
        
        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/80 hover:bg-background"
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart 
            className={`h-4 w-4 ${isLiked ? 'fill-fashion-rose text-fashion-rose' : 'text-muted-foreground'}`} 
          />
        </Button>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-2 line-clamp-1">
          {title}
        </h3>
        <p className="text-2xl font-bold text-fashion-rose mb-3">
          ${price}
        </p>
        
        {/* Size Selection */}
        <div className="mb-4">
          <p className="text-sm text-muted-foreground mb-2">Size:</p>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <Button
                key={size}
                variant={selectedSize === size ? "default" : "outline"}
                size="sm"
                className={`text-xs ${
                  selectedSize === size 
                    ? 'bg-fashion-rose text-white' 
                    : 'border-border hover:border-fashion-rose'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-y-2">
        <Button className="w-full bg-gradient-button text-primary-foreground hover:opacity-90">
          <ShoppingBag className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
        <Button variant="outline" className="w-full border-fashion-rose text-fashion-rose hover:bg-fashion-blush">
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
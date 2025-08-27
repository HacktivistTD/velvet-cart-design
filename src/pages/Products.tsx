import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import blouseImage from '@/assets/blouse-1.jpg';
import cropTopImage from '@/assets/crop-top-1.jpg';
import skirtImage from '@/assets/skirt-1.jpg';
import frockImage from '@/assets/frock-1.jpg';

const allProducts = [
  {
    id: '1',
    title: 'Elegant Silk Blouse',
    price: 89,
    image: blouseImage,
    category: 'Blouses',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    title: 'Chic Crop Top',
    price: 45,
    image: cropTopImage,
    category: 'Crop Tops',
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '3',
    title: 'Pleated Midi Skirt',
    price: 65,
    image: skirtImage,
    category: 'Skirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '4',
    title: 'Floral Summer Frock',
    price: 120,
    image: frockImage,
    category: 'Frocks',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '5',
    title: 'Classic White Blouse',
    price: 75,
    image: blouseImage,
    category: 'Blouses',
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '6',
    title: 'Trendy Fitted Crop Top',
    price: 39,
    image: cropTopImage,
    category: 'Crop Tops',
    sizes: ['XS', 'S', 'M', 'L']
  }
];

const categories = ['All', 'Blouses', 'Crop Tops', 'Skirts', 'Frocks'];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = allProducts.filter(product => 
    selectedCategory === 'All' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Page Header */}
      <section className="py-16 bg-fashion-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Our Products
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of elegant fashion pieces designed for the modern woman.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? 
                    'bg-fashion-rose text-white' : 
                    'border-border hover:border-fashion-rose'
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                category={product.category}
                sizes={product.sizes}
              />
            ))}
          </div>

          {/* No Products Found */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
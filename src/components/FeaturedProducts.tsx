import ProductCard from './ProductCard';
import blouseImage from '@/assets/blouse-1.jpg';
import cropTopImage from '@/assets/crop-top-1.jpg';
import skirtImage from '@/assets/skirt-1.jpg';
import frockImage from '@/assets/frock-1.jpg';

const featuredProducts = [
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
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-fashion-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium fashion pieces that define contemporary elegance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
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

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-button text-primary-foreground px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
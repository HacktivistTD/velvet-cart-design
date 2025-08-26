import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    name: 'Blouses',
    description: 'Elegant and sophisticated tops for every occasion',
    count: '24 Items',
    color: 'bg-fashion-blush'
  },
  {
    name: 'Crop Tops',
    description: 'Trendy and chic pieces for a modern look',
    count: '18 Items',
    color: 'bg-fashion-cream'
  },
  {
    name: 'Skirts',
    description: 'From casual to formal, find your perfect fit',
    count: '32 Items',
    color: 'bg-secondary'
  },
  {
    name: 'Frocks',
    description: 'Beautiful dresses for special moments',
    count: '15 Items',
    color: 'bg-accent'
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our diverse range of fashion categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="group cursor-pointer border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-0">
                <div className={`h-32 ${category.color} rounded-t-lg relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10" />
                  <div className="absolute bottom-4 right-4 text-fashion-charcoal/60 font-bold text-sm">
                    {category.count}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-fashion-rose transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <Button variant="outline" size="sm" className="border-fashion-rose text-fashion-rose hover:bg-fashion-blush">
                    Shop Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
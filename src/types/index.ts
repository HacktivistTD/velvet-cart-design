export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  sizes: string[];
  createdAt?: Date;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface Order {
  id: string;
  customerName: string;
  deliveryAddress: string;
  phoneNumbers: [string, string];
  items: CartItem[];
  totalPrice: number;
  status: 'pending' | 'processing' | 'delivered';
  createdAt: Date;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ProductTag = 'популярный' | 'акция' | 'новинка';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  tags?: ProductTag[];
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="relative bg-gray-200 aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {product.tags && product.tags.length > 0 && (
          <div className="absolute top-2 left-2 flex flex-wrap gap-1">
            {product.tags.includes('популярный') && (
              <span className="bg-orange-500 text-white px-2 py-1 text-xs font-medium rounded-md">Популярный</span>
            )}
            {product.tags.includes('акция') && (
              <span className="bg-red-500 text-white px-2 py-1 text-xs font-medium rounded-md">Акция</span>
            )}
            {product.tags.includes('новинка') && (
              <span className="bg-green-500 text-white px-2 py-1 text-xs font-medium rounded-md">Новинка</span>
            )}
          </div>
        )}
      </div>
      <CardContent className="p-4 flex-grow flex flex-col">
        <div className="text-xs text-gray-500 mb-1">{product.category}</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{product.description}</p>
        <div className="mt-2 flex items-end justify-between">
          <div className="text-lg font-bold text-gray-900">{product.price}</div>
          <Button size="sm">Подробнее</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

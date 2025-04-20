
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "Винтовые компрессоры",
    description: "Энергоэффективные решения для подачи сжатого воздуха",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Поршневые компрессоры",
    description: "Надежность и производительность для малых предприятий",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Осушители воздуха",
    description: "Системы очистки и подготовки сжатого воздуха",
    image: "/placeholder.svg",
  },
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Наша продукция</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Полный спектр решений для систем сжатого воздуха
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Button variant="ghost" className="group text-blue-600 hover:text-blue-800 p-0">
                  Подробнее
                  <ChevronRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="px-6 py-3 bg-blue-600 hover:bg-blue-700">
            Смотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;

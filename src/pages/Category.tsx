
import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "@/components/ui/navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, SlidersHorizontal, X } from "lucide-react";

// Имитация данных продуктов
const products = [
  {
    id: 1,
    name: "KAESER SK 22",
    category: "Винтовые компрессоры",
    description: "Мощность: 11 кВт, Производительность: 2.0 м³/мин, Давление: 8 бар",
    price: "720 000 ₽",
    image: "/placeholder.svg",
    tags: ["популярный", "акция"]
  },
  {
    id: 2,
    name: "KAESER SM 9",
    category: "Винтовые компрессоры",
    description: "Мощность: 5.5 кВт, Производительность: 0.9 м³/мин, Давление: 8 бар",
    price: "450 000 ₽",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "KAESER ASK 40",
    category: "Винтовые компрессоры",
    description: "Мощность: 22 кВт, Производительность: 4.0 м³/мин, Давление: 10 бар",
    price: "1 350 000 ₽",
    image: "/placeholder.svg",
    tags: ["новинка"]
  },
  {
    id: 4,
    name: "KAESER BSD 75",
    category: "Винтовые компрессоры",
    description: "Мощность: 45 кВт, Производительность: 7.5 м³/мин, Давление: 8.5 бар",
    price: "2 840 000 ₽",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "KAESER CSD 125",
    category: "Винтовые компрессоры",
    description: "Мощность: 75 кВт, Производительность: 12.5 м³/мин, Давление: 10 бар",
    price: "4 950 000 ₽",
    image: "/placeholder.svg",
    tags: ["популярный"]
  },
  {
    id: 6,
    name: "KAESER ESD 250",
    category: "Винтовые компрессоры",
    description: "Мощность: 132 кВт, Производительность: 25.0 м³/мин, Давление: 8.5 бар",
    price: "8 750 000 ₽",
    image: "/placeholder.svg"
  }
];

const filters = [
  {
    name: "Серия",
    options: ["SK", "SM", "ASK", "BSD", "CSD", "ESD"]
  },
  {
    name: "Давление",
    options: ["7.5 бар", "8 бар", "10 бар", "13 бар"]
  },
  {
    name: "Производительность",
    options: ["до 1 м³/мин", "1-5 м³/мин", "5-10 м³/мин", "свыше 10 м³/мин"]
  }
];

const Category = () => {
  const { categoryName } = useParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  
  const getBreadcrumbTitle = () => {
    if (categoryName) {
      return decodeURIComponent(categoryName);
    }
    return "Компрессоры";
  };

  // Функция обработки изменения слайдера цены
  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="pt-20 bg-gray-50">
        {/* Хлебные крошки */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm text-gray-500">
            <a href="/" className="hover:text-blue-600">Главная</a>
            <ChevronRight className="h-4 w-4 mx-2" />
            <a href="/catalog" className="hover:text-blue-600">Каталог</a>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="font-medium text-gray-900">{getBreadcrumbTitle()}</span>
          </div>
        </div>

        {/* Заголовок категории */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">{getBreadcrumbTitle()}</h1>
          <p className="mt-2 text-gray-600 max-w-4xl">
            Винтовые компрессоры KAESER — это надежные и энергоэффективные системы для подачи сжатого воздуха, 
            идеально подходящие для промышленного применения. Широкий модельный ряд позволяет выбрать оптимальное 
            решение для любых задач.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
            {/* Мобильные фильтры */}
            <Button 
              variant="outline" 
              className="flex items-center lg:hidden w-full mb-4"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Фильтры
            </Button>

            {/* Мобильный слайдаут с фильтрами */}
            {mobileFiltersOpen && (
              <div className="fixed inset-0 flex z-40 lg:hidden">
                <div className="fixed inset-0 bg-black bg-opacity-25" onClick={() => setMobileFiltersOpen(false)} />
                <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Фильтры</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="mt-4 px-4">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">Цена</h3>
                        <div className="mt-4">
                          <Slider 
                            defaultValue={[0, 100]} 
                            max={100} 
                            step={1} 
                            value={priceRange}
                            onValueChange={handlePriceChange}
                            className="mt-2" 
                          />
                          <div className="mt-2 flex justify-between text-xs text-gray-500">
                            <span>от {(priceRange[0] * 100000).toLocaleString()} ₽</span>
                            <span>до {(priceRange[1] * 100000).toLocaleString()} ₽</span>
                          </div>
                        </div>
                      </div>

                      {filters.map((section) => (
                        <div key={section.name}>
                          <h3 className="text-sm font-medium text-gray-900">{section.name}</h3>
                          <div className="mt-2 space-y-2">
                            {section.options.map((option) => (
                              <div key={option} className="flex items-center">
                                <Checkbox id={`mobile-${section.name}-${option}`} />
                                <label htmlFor={`mobile-${section.name}-${option}`} className="ml-3 text-sm text-gray-600">
                                  {option}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Десктопные фильтры */}
            <div className="hidden lg:block">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Фильтры</h3>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Цена</h3>
                    <div className="mt-4">
                      <Slider 
                        defaultValue={[0, 100]} 
                        max={100} 
                        step={1} 
                        value={priceRange}
                        onValueChange={handlePriceChange}
                        className="mt-2" 
                      />
                      <div className="mt-2 flex justify-between text-xs text-gray-500">
                        <span>от {(priceRange[0] * 100000).toLocaleString()} ₽</span>
                        <span>до {(priceRange[1] * 100000).toLocaleString()} ₽</span>
                      </div>
                    </div>
                  </div>

                  {filters.map((section) => (
                    <div key={section.name}>
                      <Separator className="my-4" />
                      <h3 className="text-sm font-medium text-gray-900">{section.name}</h3>
                      <div className="mt-2 space-y-2">
                        {section.options.map((option) => (
                          <div key={option} className="flex items-center">
                            <Checkbox id={`${section.name}-${option}`} />
                            <label htmlFor={`${section.name}-${option}`} className="ml-3 text-sm text-gray-600">
                              {option}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 space-y-2">
                  <Button className="w-full">Применить</Button>
                  <Button variant="outline" className="w-full">Сбросить</Button>
                </div>
              </div>
            </div>

            {/* Список продуктов */}
            <div className="mt-6 lg:col-span-3 lg:mt-0">
              <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;

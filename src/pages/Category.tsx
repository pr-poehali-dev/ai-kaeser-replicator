
import { useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "@/components/ui/navbar";
import Footer from "@/components/Footer";
import { Product, Filter } from "@/types/product";
import ProductGrid from "@/components/category/ProductGrid";
import FilterSection from "@/components/category/FilterSection";
import MobileFilters from "@/components/category/MobileFilters";
import CategoryBreadcrumbs from "@/components/category/CategoryBreadcrumbs";
import CategoryHeader from "@/components/category/CategoryHeader";

// Имитация данных продуктов
const products: Product[] = [
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

const filters: Filter[] = [
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
        <CategoryBreadcrumbs categoryName={categoryName} />

        {/* Заголовок категории */}
        <CategoryHeader title={getBreadcrumbTitle()} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="lg:grid lg:grid-cols-4 lg:gap-x-8">
            {/* Мобильные фильтры */}
            <MobileFilters 
              isOpen={mobileFiltersOpen}
              onOpen={() => setMobileFiltersOpen(true)} 
              onClose={() => setMobileFiltersOpen(false)}
              filters={filters}
              priceRange={priceRange}
              onPriceChange={handlePriceChange}
            />

            {/* Десктопные фильтры */}
            <div className="hidden lg:block">
              <FilterSection 
                filters={filters}
                priceRange={priceRange}
                onPriceChange={handlePriceChange}
              />
            </div>

            {/* Список продуктов */}
            <div className="mt-6 lg:col-span-3 lg:mt-0">
              <ProductGrid products={products} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Category;

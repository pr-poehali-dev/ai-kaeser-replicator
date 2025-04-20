
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryBreadcrumbsProps {
  categoryName: string | undefined;
}

const CategoryBreadcrumbs = ({ categoryName }: CategoryBreadcrumbsProps) => {
  const getBreadcrumbTitle = () => {
    if (categoryName) {
      return decodeURIComponent(categoryName);
    }
    return "Компрессоры";
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center text-sm text-gray-500">
        <Link to="/" className="hover:text-blue-600">Главная</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <Link to="/catalog" className="hover:text-blue-600">Каталог</Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="font-medium text-gray-900">{getBreadcrumbTitle()}</span>
      </div>
    </div>
  );
};

export default CategoryBreadcrumbs;

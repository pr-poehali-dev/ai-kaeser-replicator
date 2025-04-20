
interface CategoryHeaderProps {
  title: string;
}

const CategoryHeader = ({ title }: CategoryHeaderProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
      <p className="mt-2 text-gray-600 max-w-4xl">
        Винтовые компрессоры KAESER — это надежные и энергоэффективные системы для подачи сжатого воздуха, 
        идеально подходящие для промышленного применения. Широкий модельный ряд позволяет выбрать оптимальное 
        решение для любых задач.
      </p>
    </div>
  );
};

export default CategoryHeader;


import { Shield, Gauge, Award, Clock } from "lucide-react";

const advantages = [
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: "Надежность",
    description: "Оборудование KAESER разработано для длительной безотказной работы в самых суровых условиях.",
  },
  {
    icon: <Gauge className="h-10 w-10 text-blue-600" />,
    title: "Энергоэффективность",
    description: "Наши компрессоры экономят до 30% электроэнергии по сравнению с аналогами.",
  },
  {
    icon: <Award className="h-10 w-10 text-blue-600" />,
    title: "Качество",
    description: "Немецкое качество сборки и материалов обеспечивает долгий срок службы.",
  },
  {
    icon: <Clock className="h-10 w-10 text-blue-600" />,
    title: "Сервис 24/7",
    description: "Круглосуточная техническая поддержка и быстрое реагирование на запросы.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Почему выбирают KAESER</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Более 100 лет опыта в производстве компрессорного оборудования
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => (
            <div key={index} className="text-center p-6 border border-gray-100 rounded-lg hover:shadow-md transition-shadow duration-300">
              <div className="inline-flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;

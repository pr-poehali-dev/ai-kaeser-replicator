
import { Button } from "@/components/ui/button";

const HeroBanner = () => {
  return (
    <div className="relative bg-gray-900 pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Промышленное оборудование"
          className="w-full h-full object-cover object-center opacity-40"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-start">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl max-w-3xl">
          Промышленные компрессоры KAESER
        </h1>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl">
          Надежное оборудование для вашего бизнеса. Энергоэффективные решения
          и высококачественное обслуживание.
        </p>
        <div className="mt-10 flex space-x-4">
          <Button className="px-8 py-6 text-lg bg-blue-600 hover:bg-blue-700">
            Подобрать оборудование
          </Button>
          <Button variant="outline" className="px-8 py-6 text-lg border-white text-white hover:bg-white/10">
            Узнать больше
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

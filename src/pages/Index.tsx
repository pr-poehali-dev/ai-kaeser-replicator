
import NavBar from "@/components/ui/navbar";
import HeroBanner from "@/components/HeroBanner";
import ProductCategories from "@/components/ProductCategories";
import AdvantagesSection from "@/components/AdvantagesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroBanner />
        <ProductCategories />
        
        {/* Информационный блок */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold">Нужна консультация специалиста?</h2>
                <p className="mt-3 text-lg text-blue-100">
                  Наши эксперты помогут подобрать оптимальное решение для ваших задач
                </p>
              </div>
              <div className="mt-8 md:mt-0 md:ml-8">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
                  >
                    Оставить заявку
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <AdvantagesSection />
        
        {/* Последние проекты */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Наши проекты</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Успешно реализованные проекты для клиентов разных отраслей
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-48 bg-gray-200">
                    <img
                      src="/placeholder.svg"
                      alt={`Проект ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-blue-600 mb-2">Промышленность</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Модернизация системы подачи воздуха на заводе
                    </h3>
                    <p className="text-gray-600">
                      Комплексное решение для повышения эффективности производства и снижения энергозатрат.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

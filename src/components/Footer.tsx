
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Компания */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo-b.svg" alt="Kaeser Logo" className="h-10 w-auto bg-white p-1 rounded" />
              <span className="ml-2 text-xl font-bold">KAESER</span>
            </div>
            <p className="text-gray-400 mb-6">
              Ведущий производитель компрессорного оборудования с более чем 100-летней историей.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Продукция */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Продукция</h3>
            <ul className="space-y-3">
              {["Винтовые компрессоры", "Поршневые компрессоры", "Осушители воздуха", "Фильтры", "Системы управления"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Сервис */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Сервис</h3>
            <ul className="space-y-3">
              {["Техническое обслуживание", "Ремонт оборудования", "Запасные части", "Аренда компрессоров", "Контракты на обслуживание"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Контакты */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">ул. Профсоюзная, 23, Москва, 117420</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+7 (495) 797-30-37</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@kaeser.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400">© 2023 KAESER KOMPRESSOREN. Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Условия использования
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

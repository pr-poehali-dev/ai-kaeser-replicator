
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Search } from "lucide-react";
import { Button } from "./button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                className="h-12 w-auto" 
                src="/logo-b.svg" 
                alt="Kaeser Logo" 
              />
              <span className="ml-2 text-xl font-bold text-blue-900">KAESER</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex space-x-6">
              {["Продукция", "Сервис", "О компании", "Контакты"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 font-medium text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
            <div className="ml-4 flex items-center">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5 text-gray-700" />
              </Button>
              <Button className="ml-2 bg-blue-600 hover:bg-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                <span>+7 (495) 797-30-37</span>
              </Button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {["Продукция", "Сервис", "О компании", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 font-medium text-base"
              >
                {item}
              </a>
            ))}
            <Button className="w-full mt-4">
              <Phone className="h-4 w-4 mr-2" />
              <span>+7 (495) 797-30-37</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

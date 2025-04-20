
import { X, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter } from "@/types/product";

interface MobileFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  filters: Filter[];
  priceRange: number[];
  onPriceChange: (value: number[]) => void;
}

const MobileFilters = ({ 
  isOpen, 
  onClose, 
  onOpen, 
  filters, 
  priceRange, 
  onPriceChange 
}: MobileFiltersProps) => {
  return (
    <>
      <Button 
        variant="outline" 
        className="flex items-center lg:hidden w-full mb-4"
        onClick={onOpen}
      >
        <SlidersHorizontal className="h-4 w-4 mr-2" />
        Фильтры
      </Button>

      {isOpen && (
        <div className="fixed inset-0 flex z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
          <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Фильтры</h2>
              <button
                type="button"
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100"
                onClick={onClose}
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
                      onValueChange={onPriceChange}
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
    </>
  );
};

export default MobileFilters;

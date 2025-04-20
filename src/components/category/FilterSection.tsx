
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Filter } from "@/types/product";

interface FilterSectionProps {
  filters: Filter[];
  priceRange: number[];
  onPriceChange: (value: number[]) => void;
}

const FilterSection = ({ filters, priceRange, onPriceChange }: FilterSectionProps) => {
  return (
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
  );
};

export default FilterSection;

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterOption {
  value: string;
  label: string;
  className?: string;
}

interface FilterSelectProps {
  label: string;
  options: FilterOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const FilterSelect = ({
  label,
  options,
  value,
  onChange,
  placeholder = "선택해주세요"
}: FilterSelectProps) => {
  return (
    <div className="space-y-2">
      <label className="block text-lg font-medium text-gray-800">
        {label}
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-full h-14 text-lg">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-white max-h-[300px]" position="popper" sideOffset={5}>
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              className={`hover:bg-pink-50 cursor-pointer py-3 ${option.className || ''}`}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
type AutoFilterDropdownProps<T> = {
  data: T[] & string[];
  filterKey: keyof T & string;
  valueChange: (item: T) => void;
};

export type {
  AutoFilterDropdownProps
}
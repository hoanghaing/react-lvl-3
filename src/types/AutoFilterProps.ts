import { ReactNode } from "react";

type AutoFilterDropdownProps<T> = {
  data: T[];
  filterKey: keyof T & string;
  valueChange: (item: T) => void;
};
type User = {
  name: ReactNode;
  id: number;
  user: string;
  username: string;
  email: string;
};

type Country = {
  name: string;
};
export type {
  AutoFilterDropdownProps,
  User,
  Country
}
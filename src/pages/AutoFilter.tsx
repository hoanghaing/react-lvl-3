
import { useState, useEffect } from 'react';
import AutoFilterDropdown from '@/components/AutoFilter/AutoFilter';
import { AutoFilterDropdownProps, User } from "@/types";

const AutoFilter = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  const dropdownProps: AutoFilterDropdownProps<User> = {
    data: users,
    filterKey: "name",
    valueChange: (item) => setSelectedUser(item),
  };

  return (
    <>
      <h1>Auto Filter Dropdown Example</h1>

      <h2>Select a User</h2>
      <AutoFilterDropdown<User>
        {...dropdownProps}
      />
      {selectedUser && <p>Selected User: {selectedUser.name}</p>}
    </>
  );
};

export default AutoFilter;

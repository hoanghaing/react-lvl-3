
import { useState, useEffect } from 'react';
import AutoFilterDropdown from '@/components/AutoFilter/AutoFilter';

type User = {
  id: number;
  user: string;
  username: string;
  email: string;
}

type Country = {
  name: string;
}

const AutoFilter = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Auto Filter Dropdown Example</h1>

      <h2>Select a User</h2>
      <AutoFilterDropdown<User>
        data={users}
        filterKey="name"
        valueChange={(item) => setSelectedUser(item)}
      />
      {selectedUser && <p>Selected User: {selectedUser.name}</p>}
    </div>
  );
};

export default AutoFilter;

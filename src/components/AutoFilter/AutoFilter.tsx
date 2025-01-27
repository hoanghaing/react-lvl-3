import { useState, useEffect } from 'react';
import './AutoFilter.scss';
import { AutoFilterDropdownProps } from "@/types";


const AutoFilterDropdown = <T,>({ data, filterKey, valueChange }: AutoFilterDropdownProps<T>) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState<T[]>(data);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const lowerCaseQuery = query.toLowerCase();
    setFilteredData(
      data.filter((item) => {
        const value = item[filterKey];
        if (typeof value === "string") {
          value.toLowerCase().includes(lowerCaseQuery)
          return item;
        }
      })
    );

  }, [query, data, filterKey]);

  const handleSelect = (item: T) => {
    setQuery('');
    setIsOpen(false);
    valueChange(item);
  };
  return (
    <div className="auto-filter-dropdown">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setIsOpen(true)}
        placeholder="Search..."
        className="filter-input"
      />
      {isOpen && (
        <ul className="dropdown-list">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => {
              const label = item[filterKey] as string || '';
              const lowerCaseQuery = query.toLowerCase();
              const matchIndex = label.toLowerCase().indexOf(lowerCaseQuery);
              const beforeMatch = label.slice(0, matchIndex);
              const match = label.slice(matchIndex, matchIndex + query.length);
              const afterMatch = label.slice(matchIndex + query.length);

              return (
                <li
                  key={index}
                  onClick={() => handleSelect(item)}
                  className="dropdown-item"
                >
                  {beforeMatch}
                  <strong>{match}</strong>
                  {afterMatch}
                </li>
              );
            })
          ) : (
            <li className="dropdown-item">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default AutoFilterDropdown;
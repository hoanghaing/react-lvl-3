import { useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';
import "./MessagePublisher.scss";

const MessagePublisher = () => {
  const [newKey, setNewKey] = useState(''); // State for the new key input
  const [keys, setKeys] = useState<string[]>([]); // State to manage list of keys

  const { setValue, removeValue } = useLocalStorage<string>('', null); // Use hooks for local storage

  const handleAddKey = () => {
    if (!newKey.trim()) {
      alert('Please enter a valid key!');
      return;
    }
    if (keys.includes(newKey)) {
      alert('Key already exists!');
      return;
    }
    setKeys((prevKeys) => [...prevKeys, newKey]); // Add the key to the list
    setNewKey(''); // Clear the input field
  };

  const handleRemoveKey = (key: string) => {
    setKeys((prevKeys) => prevKeys.filter((item) => item !== key)); // Remove from the list
    removeValue(); // Remove the value from local storage
  };

  const handleValueChange = (key: string, value: string) => {
    setValue(key, value); // Update the local storage value
  };


  return (
    <div className='message-publisher'>
      <h2>Write to local storage</h2>
      <section className='list-item'>
        <h2>Manage Keys</h2>
        <ul className="key-list">
          {keys.map((key) => (
            <li key={key} className="key-item">
              <div className="key-text">
                <span>Keys:</span>
                <span>
                  {` ${key}`}
                </span>
              </div>
              <input
                type="text"
                placeholder="Enter value"
                onBlur={(e) => handleValueChange(key, e.target.value)}
              />
              <button onClick={() => handleRemoveKey(key)}>Remove</button>
            </li>
          ))}
        </ul>
      </section>
      <section className='input-mode'>
        <h2>Add a New Key</h2>
        <div className='input-section'>
          <input
            type="text"
            value={newKey}
            onChange={(e) => setNewKey(e.target.value)}
            placeholder="Enter a key name"
          />
          <button onClick={handleAddKey}>Add Key</button>
        </div>

      </section>


    </div>
  )
}
export default MessagePublisher;

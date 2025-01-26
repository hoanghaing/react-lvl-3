import { useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

const MessagePublisher = () => {
  const [input, setInput] = useState('');
  const { setValue } = useLocalStorage<string>('message');

  const handleSetMessage = () => {
    setValue(input);
    setInput('');
  }
  return (
    <div>
      <h2>Set Message</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a message"
      />
      <button onClick={handleSetMessage}>Save to LocalStorage</button>
    </div>
  )
}
export default MessagePublisher;

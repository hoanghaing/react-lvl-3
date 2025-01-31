import useLocalStorage from '@/hooks/useLocalStorage';
import "./MessageSubscriber.scss";

const MessageSubscriber = () => {
  const { storedValues } = useLocalStorage<string>('message');

  return (
    <div className="message-subscriber">
      <h2>Local Storage Keys</h2>
      {Object.keys(storedValues).length === 0 ? (
        <p>No data found</p>
      ) : (
        <ul>
          {Object.entries(storedValues).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default MessageSubscriber;

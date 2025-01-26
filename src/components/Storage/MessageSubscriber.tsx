import useLocalStorage from '@/hooks/useLocalStorage';

const MessageSubscriber = () => {
  const { storedValue } = useLocalStorage<string>('message');

  return (
    <div>
      <h2>Current Message</h2>
      <p>{storedValue || 'No message set'}</p>
    </div>
  )
}
export default MessageSubscriber;

import useLocalStorage from '@/hooks/useLocalStorage';

const MessageSubscriber = () => {
  const { storedValue } = useLocalStorage<string>('message');

  return (
    <div className='message-subscriber'>
      <h2>Read from local storage</h2>
      <p>{storedValue || 'No message set'}</p>
    </div>
  )
}
export default MessageSubscriber;

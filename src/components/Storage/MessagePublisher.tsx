import { useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

const MessagePublisher = () => {
  const [ input, setInput ] = useState('');
  const { setValue } = useLocalStorage<string>('message');

  const handleSetMessage = () => {

  }
  return (
    <div></div>
  )
}
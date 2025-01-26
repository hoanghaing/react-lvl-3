import MessagePublisher from '@/components/Storage/MessagePublisher';
import MessageSubscriber from '@/components/Storage/MessageSubscriber';

const Storage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>LocalStorage Handler Example</h1>
      <MessagePublisher />
      <MessageSubscriber />
    </div>
  );
}

export default Storage
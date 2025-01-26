import MessagePublisher from '@/components/Storage/MessagePublisher';
import MessageSubscriber from '@/components/Storage/MessageSubscriber';
import "@/assets/scss/LocalStorage.scss"
const Storage = () => {
  return (
    <div className="local-storage-wrapper">
      <h1>LocalStorage Handler Example</h1>
      <div className='main-content'>
        <MessagePublisher />
        <MessageSubscriber />
      </div>
    </div>
  );
}

export default Storage
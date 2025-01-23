import { useRef } from 'react';
import Dialog from "@/components/Dialog/Dialog";

const GenericDialog = () => {
  const modalRef = useRef<{ open: () => void; close: () => void }>(null);
  const dialogRef = useRef<{ open: () => void; close: () => void }>(null);
  // Exercise 2
  return (
    <div>
      <h1>Dialog Component Examples</h1>

      <button onClick={() => modalRef.current?.open()}>Open Modal</button>
      <button onClick={() => modalRef.current?.close()}>Close Modal</button>

      <button onClick={() => dialogRef.current?.open()}>Open Regular Dialog</button>
      <button onClick={() => dialogRef.current?.close()}>Close Regular Dialog</button>


      <Dialog ref={modalRef} isModal={true}>
        <div>
          <h2>Modal Dialog</h2>
          <p>This is a modal dialog. You must close it to interact with the page.</p>
          <button onClick={() => modalRef.current?.close()}>Close</button>
        </div>
      </Dialog>

      <Dialog ref={dialogRef} isModal={false}>
        <div>
          <h2>Regular Dialog</h2>
          <p>This is a regular dialog. You can still interact with the page without an overlay.</p>
          <button onClick={() => dialogRef.current?.close()}>Close</button>
        </div>
      </Dialog>
    </div>
  );
};

export default GenericDialog;

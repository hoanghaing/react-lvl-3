import { useState, useImperativeHandle, forwardRef, ReactNode } from 'react';
import './Dialog.css'; // Assuming you have a CSS file for styling

type DialogProps = {
  children: ReactNode;
  isModal?: boolean;
};

const Dialog = forwardRef(({ children, isModal }: DialogProps, ref) => {
    const [isOpen, setIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
    }));

    if (!isOpen) return null;

    return (
      <div className={`dialog-overlay ${isModal ? 'modal' : ''}`} onClick={isModal ? undefined : () => setIsOpen(false)}>
          <div
              className="dialog-content"
              onClick={(e) => e.stopPropagation()}
          >
              {children}
          </div>
      </div>
  );
});


export default Dialog;
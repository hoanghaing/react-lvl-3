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
	// Modal
	if (isModal) {
		return (
			(
				<div className={`dialog-overlay modal`} onClick={ () => {} }>
					<div
						className="dialog-content"
						onClick={(e) => e.stopPropagation()}
					>
						{children}
					</div>
				</div>
			)
		)
	}
	// Regular Dialog
	return (
		(
			<div className="dialog-content regular-dialog" onClick={() => setIsOpen(false)}>
				{children}
			</div>
		)
	);
});


export default Dialog;
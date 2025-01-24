import { useState, useImperativeHandle, forwardRef } from 'react';
import './Dialog.scss';
import { DialogProps } from "@/types";


const Dialog = forwardRef(({ children, isModal }: DialogProps, ref) => {
	const [isOpen, setIsOpen] = useState(false);

	useImperativeHandle(ref, () => ({
		open: () => setIsOpen(true),
		close: () => setIsOpen(false),
	}));

	if (!isOpen) return null;
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
	return (
		(
			<div className="dialog-content regular-dialog" onClick={() => setIsOpen(false)}>
				{children}
			</div>
		)
	);
});


export default Dialog;
import './Modal.css'
import {createPortal} from "react-dom";
import {useCallback} from "react";

const Modal =
    ({
         onClose, children, open
     }) => {

        const onBackdropClick = useCallback((event) => {
            onClose()
        }, [onClose])

        if (!open) return null;

        return createPortal(
            <div className="modal" onClick={onBackdropClick}>
                <div className="modal-dialog" onClick={(event) => event.stopPropagation()}>
                    <div className="modal-dialog-header">
                        <button onClick={onClose}>&#10005;</button>
                    </div>
                    <div className="modal-dialog-content">
                        {children}
                    </div>
                </div>
            </div>,
            document.getElementById('modals')
        )
    }

export default Modal
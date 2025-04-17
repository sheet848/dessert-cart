import React, { useRef, useEffect } from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ isOpen, onClose, children }) => {

  const modalRef = useRef();

  useEffect(() =>{
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, onClose]);

  if(!isOpen) return null;

  return ReactDOM.createPortal(
    <>
    <div className="modal-overlay">
      <div className="modal-content">
        { children }
      </div>
    </div>
    </>,
    document.body
  )
}

export default Modal
import React from 'react'
import '../App.css'

const Modal = ({ isOpen, onClose, imageUrl }) => {
  return (
    isOpen && (
    <div className="modal">
        <div className="modal-content">
        <span className="close" onClick={onClose}>
            &times;
        </span>
        <img src={imageUrl} alt="Full-size" className="full-size-image" />
        </div>
    </div>
    )
  )
}

export default Modal

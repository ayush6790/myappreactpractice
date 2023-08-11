import React from 'react'
import './modal.css'

export default function Modal({children, onClose}) {
  return (
    <>
    <div className="backdrop" onClick={onClose} />
        <dialog open={true} className="modal">{children}</dialog>
    </>
  )
}

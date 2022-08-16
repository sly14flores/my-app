import { current } from '@reduxjs/toolkit';
import React, { useRef, useEffect } from 'react';
import Transition from '../../../utils/Transition';

const ConfirmAction = ({
  id = "confirm-form-action",
  trigger = null,
  modalOpen,
  setModalOpen,
  onOk,
  onCancel,
  children
}) => {

  const modalContent = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target) || trigger.current.contains(target)) return;
      setModalOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const handleOk = (e) => {
    e.stopPropagation();
    onOk()
    setModalOpen(false);
  }

  const handleCancel = (e) => {
    e.stopPropagation();
    onCancel()
    setModalOpen(false);
  }
  
  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div ref={modalContent} className="bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full">
          {/* Modal header */}
          <div className="px-5 py-3 border-b border-slate-200">
            <div className="flex justify-between items-center">
              <div className="font-semibold text-slate-800">Confirmation</div>
              <button className="text-slate-400 hover:text-slate-500" onClick={(e) => { e.stopPropagation(); setModalOpen(false); }}>
                <div className="sr-only">Close</div>
                <svg className="w-4 h-4 fill-current">
                  <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                </svg>
              </button>
            </div>
          </div>
          {/* Modal content */}
          <div className="px-5 pt-4 pb-1">
            <div className="text-sm">
              <div className="font-medium text-slate-800 mb-2">{children}</div>
            </div>
          </div>
          {/* Modal footer */}
          <div className="px-5 py-4">
            <div className="flex flex-wrap justify-end space-x-2">
              <button className="btn-sm border-slate-200 hover:border-slate-300 text-slate-600" onClick={handleCancel}>Cancel</button>
              <button className="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white" onClick={handleOk}>Ok</button>
            </div>
          </div>
        </div>        
      </Transition>
    </>
  )
}

export default ConfirmAction
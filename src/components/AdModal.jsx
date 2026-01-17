import React from 'react';

export default function AdModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target.id === 'modal-background') {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      onClick={handleBackgroundClick}
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative min-h-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">🎉 Admission Going On!</h2>
        <p className="text-gray-700">
          Don't try to apply...for God's sake.
        </p>
      </div>
    </div>
  );
}

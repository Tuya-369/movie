// src/components/TrailerModal.jsx

import { X } from "lucide-react";

const TrailerModal = ({ show, onClose, videoId }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black"
        >
          <X />
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-full h-64 rounded"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Trailer"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TrailerModal;

import React, { useState } from 'react';
import { FiX, FiImage } from 'react-icons/fi';
import { validatePost } from '../utils/validation';

const CreatePost = ({ onClose }) => {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validatePost(caption, image);
    
    if (!validation.isValid) {
      setError(validation.message);
      return;
    }

    // Submit post logic here
    console.log({ caption, image });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-lg">Create new post</h2>
          <FiX className="text-2xl cursor-pointer" onClick={onClose} />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4">
          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg mb-4 text-sm">
              {error}
            </div>
          )}

          {/* Image Upload */}
          <div className="mb-4">
            {preview ? (
              <div className="relative">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => {
                    setImage(null);
                    setPreview('');
                  }}
                  className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-1 rounded-full"
                >
                  <FiX />
                </button>
              </div>
            ) : (
              <label className="block border-2 border-dashed border-gray-300 rounded-lg h-64 cursor-pointer hover:border-gray-400 transition-colors">
                <div className="h-full flex flex-col items-center justify-center">
                  <FiImage className="text-4xl text-gray-400 mb-2" />
                  <p className="text-gray-500 text-sm">Click to upload image</p>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            )}
          </div>

          {/* Caption */}
          <textarea
            placeholder="Write a caption..."
            className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-1 focus:ring-gray-300"
            rows="3"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 font-semibold hover:bg-blue-600 transition-colors"
          >
            Share Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
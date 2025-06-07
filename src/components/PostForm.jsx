import React from "react";

const PostForm = ({ post, onChange, onSubmit }) => {

    const isDisabled = !post.caption.trim() || !post.imageUrl.trim();

    return (
        <form
            onSubmit={onSubmit}
            className="max-w-xl mx-auto bg-white p-6 rounded shadow-md space-y-4"
        >
            <h2 className="text-xl font-bold">Create New Post</h2>

            <div>
                <label className="block text-sm font-medium text-gray-700">Caption</label>
                <textarea
                    name="caption"
                    value={post.caption}
                    onChange={onChange}
                    rows={3}
                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    placeholder="What's on your mind?"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                    type="url"
                    name="imageUrl"
                    value={post.imageUrl}
                    onChange={onChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    placeholder="https://example.com/image.jpg"
                    required
                />
            </div>

            <button
                type="submit"
                disabled={isDisabled}
                className={`px-4 py-2 rounded transition ${
          isDisabled
            ? "bg-gray-400 text-white cursor-not-allowed"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
            >
                Post
            </button>
        </form>
    );
};

export default PostForm;
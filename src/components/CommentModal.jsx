import React from "react";
import { Dialog } from "@headlessui/react";

const CommentModal = ({
    isOpen,
    onClose,
    onSubmit,
    commentText,
    setCommentText,
    post,
    user,
}) => {
    if (!post)
        return null;

    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black opacity-30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
          <Dialog.Title className="text-lg font-bold mb-2">
            Comments for {post.user}'s post
          </Dialog.Title>

          <div className="max-h-60 overflow-y-auto border rounded p-2 mb-4 space-y-2">
            {post.comments.length === 0 ? (
              <p className="text-gray-500 text-sm">No comments yet.</p>
            ) : (
              post.comments.map((comment) => (
                <div key={comment.id} className="text-sm text-gray-800">
                  <span className="font-semibold mr-2">{comment.user}</span>
                  {comment.text}
                </div>
              ))
            )}
          </div>
          
            {user && (
              <p className="text-sm text-gray-500 mb-2">
                Logged in as : <strong>{user.username}</strong>
              </p>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
            >
              
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment..."
              className="w-full p-2 border rounded mb-2"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-1 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1 bg-blue-500 text-white rounded"
              >
                Post
              </button>
            </div>
          </form>
        </Dialog.Panel>
      </div>
    </Dialog>
    );
};

export default CommentModal;
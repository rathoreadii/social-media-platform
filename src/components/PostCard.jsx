import React from "react";

const PostCard = ({ post, onLike, onCommentClick }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
                src={post.imageUrl}
                alt={post.caption || "Post image"}
                className="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-105" />
                            
            {/* User & Caption */}
            <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold text-gray-800">{post.user}</span>
                    <span className="text-sm text-gray-500">{post.timestamp || "Just now"}</span>
                </div>

                <p className="text-gray-700 mb-3">{post.caption}</p>
                            
                {/* Existing Like & Comment Count
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                    <div className="flex items-center space-x-1">
                                        <span className="text-red-500">❤️</span>
                                        <span>{post.likes} Likes</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-blue-500">💬</span>
                                        <span>{post.comments} Comments</span>
                                    </div>
                                </div> */}

                {/* Post Action Buttons */}
                <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
                    <button
                        className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                        onClick={() => onLike && onLike(post.id)}
                    >
                        ❤️ <span>{post.likes} Like{post.likes !== 1 ? "s" : ""}</span>
                    </button>
                    <button
                        className="flex items-center space-x-1 hover:text-blue-500 transition-colors"
                        onClick={() => onCommentClick && onCommentClick(post.id)}
                    >
                        💬 <span>{post.comments.length || 0} Comment{post.comments.length !== 1 ? "s" : ""}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-yellow-500 transition-colors">
                        📌 <span>Save</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
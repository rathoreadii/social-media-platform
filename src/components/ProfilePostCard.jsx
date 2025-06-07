import React from "react";
import PostCard from "./PostCard";

const ProfilePostCard = ({post, onDelete, onCommentClick}) => {
    return (
        <div className="relative">
            <PostCard
                post={post}
                onCommentClick={onCommentClick}
            />
            <div className="absolute top-2 right-2">
                <button
                    onClick={() => onDelete(post.id)}
                    className="bg-red-500 text-white text-xs px-2 py-1 rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ProfilePostCard;
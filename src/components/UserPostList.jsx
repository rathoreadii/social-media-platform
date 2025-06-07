import React, {useState} from "react";
import ProfilePostCard from "../components/ProfilePostCard";
import CommentModal from "./CommentModal";
import { useAuth } from "../context/AuthContext";

const UserPostList = ({ userPosts, onDelete }) => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [commentText, setCommentText] = useState("");

    const { user } = useAuth();

    const handleCommentClick = (postId) => {
        const post = userPosts.find((p) => p.id === postId);
        setSelectedPost(post);
    };
    
    const handleCommentSubmit = () => {
        if (commentText.trim() === "")
            return;

        const updatedComments = [
            ...selectedPost.comments,
            {
                id: Date.now(),
                user: user.username,
                text: commentText.trim(),
            },
        ];

        setSelectedPost({ ...selectedPost, comments: updatedComments });
        setCommentText(""); // clear input
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
        setCommentText("");
    };

    return (
        <section className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold mb-4">Your Posts</h2>
            {userPosts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        userPosts.map((post) => (
                        <ProfilePostCard
                            key={post.id}
                            post={post}
                            onDelete={onDelete}
                            onCommentClick={handleCommentClick}
                        />
                    ))}
                </div>
            ) : (
                    <p className="text-gray-500">You haven't posted anything yet.</p>
            )}

            <CommentModal
                isOpen={!!selectedPost}
                onClose={handleCloseModal}
                onSubmit={handleCommentSubmit}
                commentText={commentText}
                setCommentText={setCommentText}
                post={selectedPost}
                user={user}
            />
        </section>
    );
};

export default UserPostList;
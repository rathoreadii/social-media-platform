// import { comment } from "postcss";
import React, { useState } from "react";
import CommentModal from "../components/CommentModal";
import PostCard from "../components/PostCard";
import { initialPosts } from "../data/data";
import { useAuth } from "../context/AuthContext";

const Home = () => {
    const [posts, setPosts] = useState(initialPosts);
    const [activePostId, setActivePostId] = useState(null);
    const [commentText, setCommentText] = useState("");
    const { user } = useAuth();

    const handleLike = (postId) => {
        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post.id === postId ? { ...post, likes: post.likes + 1 } : post));
    };

    const handleCommentClick = (postId) => {
        setActivePostId(postId);
    };

    const handleCommentSubmit = () => {
        if (commentText.trim()) {
            setPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === activePostId ?
                        {
                            ...post,
                            comments: [
                                ...post.comments,
                                {
                                    id: Date.now(),
                                    user: user.username,
                                    text: commentText.trim(),
                                },
                            ],
                        }
                        : post
                )
            );
        }
        setCommentText("");
        setActivePostId(null);
    }

    return (
        <div className="min-h-screen bg-gray-100 pt-20"> {/* Add padding top to offset fixed navbar */}
            {/* Feed Section */}
            <div className="max-w-7xl mx-auto mt-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            post={post}
                            onLike={handleLike}
                            onCommentClick={handleCommentClick}
                        />
                    ))}
                </div>
            </div>

            {/* Render Comment Modal */}
            <CommentModal
                isOpen={activePostId !== null}
                onClose={() => setActivePostId(null)} // close modal
                onSubmit={handleCommentSubmit}
                commentText={commentText}
                setCommentText={setCommentText}
                post={posts.find((p) => p.id === activePostId)} //pass full post
                user={user}
            />
        </div>
    );
};

export default Home;
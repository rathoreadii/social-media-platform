import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import UserInfoCard from "../components/UserInfoCard";
import UserPostList from "../components/UserPostList";
import { getUserPosts } from "../data/profilePosts";

const Profile = () => {
    const { user } = useAuth();
    const [userPosts, setUserPosts] = useState(getUserPosts(user.username));

    const handleDelete = (postId) => {
        const confirmed = window.confirm("Are you sure you want to delete this post?");
        if (confirmed) {
            setUserPosts((prevPosts) => prevPosts.filter(post => post.id !== postId));
        }
    };

    return (
        <div className="min-h-screen pt-20 px-4 bg-gray-100">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold mb-4">Welcome, {user.username}</h1>

                <UserInfoCard user={user} />
                <UserPostList userPosts={userPosts} onDelete={handleDelete} />
            </div>
        </div>
    );
};

export default Profile;
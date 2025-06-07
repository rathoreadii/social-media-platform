import React, { useState } from "react";
import PostForm from "../components/PostForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const CreatePost = () => {

    const navigate = useNavigate();
    const { user } = useAuth();

    const [post, setPost] = useState({
        caption: "",
        imageUrl: "",
    });

    const handleChange = (e) => {
        setPost((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!post.caption || !post.imageUrl) {
            alert("Please fill all fields.");
            return;
        }

        const isValidImageUrl = /^https?:\/\/.*\.(jpg|jpeg|png|gif)$/i.test(post.imageUrl);

        if (!isValidImageUrl) {
            alert("Please enter a valid image URL (must end in .jpg, .jpeg, .png, or .gif)");
            return;
        }

        const newPost = {
            id: Date.now(),
            user: user.username,
            caption: post.caption,
            imageUrl: post.imageUrl,
            likes: 0,
            comments: [],
        };
        console.log("Created Post:", newPost);
        navigate("/");
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-20 px-4">
            <PostForm post={post} onChange={handleChange} onSubmit={handleSubmit} />
        </div>
    );
};

export default CreatePost;
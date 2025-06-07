import React from "react";

const UserInfoCard = ({ user }) => {
    return (
        <section className="bg-white p-4 rounded shadow mb-6">
            <h2 className="text-xl font-semibold mb-2">Profile Info</h2>
            <p><strong>Username:</strong>{user.username}</p>
            <p><strong>UserId:</strong>{user.id}</p>
        </section>
    );
};

export default UserInfoCard;
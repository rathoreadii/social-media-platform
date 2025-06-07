export const initialPosts = [
    {
        id: 1,
        user: "john_doe",
        caption: "Enjoying the sunny day!",
        imageUrl: "../resources/377ae0d24138a04b12e03fe65c30f97e.jpg",
        likes: 120,
        comments: [
            { id: 1, user: "alice", text: "Nice photo!" },
            { id: 2, user: "bob", text: "Looks great!" }
        ],
    },
    {
        id: 2,
        user: "jane_smith",
        caption: "Coffee time ☕",
        imageUrl: "../resources/377ae0d24138a04b12e03fe65c30f97e.jpg",
        likes: 85,
        comments: [
            { id: 1, user: "dave", text: "Where is this place?" },
        ],
    },
];
# 🧑‍💻 React Social Media App

A modular, responsive **social media web app** built using **React.js** and **Tailwind CSS**. This app features user authentication, post creation, likes, comments, and protected profile views – all managed with React’s Context API and clean component design.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Login and Registration pages
  - Authentication state stored in `localStorage`
  - Protected Routes using `React Router`

- 🖼️ **Post Functionality**
  - Create new posts with captions & image URLs
  - Like posts
  - Add/view comments using a modal

- 👤 **Profile Page**
  - User info (username, ID)
  - User-specific posts with delete functionality
  - Modular `UserInfoCard`, `UserPostList`, `ProfilePostCard`

- 🧩 **Modular Components**
  - `PostCard`, `CommentModal`, `PostForm`, `LoginForm`, etc.
  - Clean and scalable folder structure

- 💅 **UI**
  - Responsive design using Tailwind CSS
  - Accessible and animated with Headless UI’s `Dialog`

---

## 🧰 Tech Stack

| Tech         | Usage                         |
|--------------|-------------------------------|
| React.js     | Frontend framework            |
| Tailwind CSS | Utility-first styling         |
| React Router | Routing and protected routes  |
| Context API  | Global authentication state   |
| Headless UI  | Accessible modals (comments)  |
| LocalStorage | Persist user login state      |

---

## 📁 Folder Structure

src/
├── components/ # Reusable UI components
├── context/ # Auth context (Context API)
├── data/ # Mock data (posts, profile posts)
├── pages/ # Route-level pages
├── utils/ # Utility functions (e.g. validation)
├── App.js # Root component with routing
├── index.js # Entry point

🛡️ Protected Routes
ProtectedRoute.jsx ensures that routes like /profile/:userId and /create are only accessible if the user is logged in. Otherwise, they’re redirected to /login.

🌐 Future Plans
Connect to a backend using Node.js and MongoDB
Add image upload support
Implement edit functionality for posts
Add follower/following features


📄 License
This project is open-source and available under the MIT License.

🙌 Acknowledgements
React Docs
TailwindCSS Docs
Headless UI
ChatGPT (OpenAI) – for modular design and architecture help


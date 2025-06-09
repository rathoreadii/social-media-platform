import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

function App()
{
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route
          path="/profile/:userId"
          element={
            <ProtectedRoute>
              <Profile /> 
            </ProtectedRoute>}
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreatePost />
            </ProtectedRoute>}
        />

        <Route
          path="*"
          element={
            <div className="text-center mt-20 text-xl">
              404 - Page Not Found
            </div>}
        />
        
      </Routes>
    </HashRouter>
  );
}

export default App;
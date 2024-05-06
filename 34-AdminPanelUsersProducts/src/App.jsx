import "./App.css";
import Header from "./layout/Header";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import Post from "./pages/Post/Post";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;

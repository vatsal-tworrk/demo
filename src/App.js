import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/context";
import BookList from "./Component/Book/list";
import Bookdetailes from "./Component/Book/detailes";
import Stationerylist from "./Component/Stationery/list";
import Stationerydetailes from "./Component/Stationery/detailes";
import Layout, { ChildLayout } from "./Pages/layout";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Main from "./Pages/Home";
import Posts from "./Pages/Posts";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import NewPost from "./Pages/NewPost";
import Comments from "./Pages/Comments";
import Post from "./Pages/Post";
import Login from "./Pages/Login";
import Logout from "./Pages/Logout";
import './App.css';

export default function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/book" element={<BookList />} />
            <Route path="/book/:id" element={<Bookdetailes />} />
            <Route path="/stationery" element={<Stationerylist />} />
            <Route path="/stationery/:id" element={<Stationerydetailes />} />

            <Route path="/posts" element={<Layout />}>
              <Route path="" element={<Posts />} />
              <Route path="new" element={<NewPost />} />

              <Route path=":id" element={<ChildLayout />} >
                <Route path="" element={<Post />} />
                <Route path="comments" element={<Comments />} />
              </Route>
            </Route>
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

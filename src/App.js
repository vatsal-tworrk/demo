import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import './App.css';
import PrivateRoutes from './utils/PrivateRoutes';

export default function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} >
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
          </Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

//App.js

// import {
//   BrowserRouter as Router,
//   Routes, Route
// } from 'react-router-dom'
// import Home from './home';
// import Login from './Pages/Login/index';
// import PrivateRoutes from './utils/PrivateRoutes';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route element={<PrivateRoutes />}>
//             <Route element={<Home />}
//               path="/" exact />
//           </Route>
//           <Route element={<Login />}
//             path="/login" />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;

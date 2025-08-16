import React from 'react';
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Users from "./pages/Users.jsx";
import Courses from "./pages/Courses.jsx";
import Posts from "./pages/Posts.jsx";
import Donations from "./pages/Donations.jsx";
import Documents from "./pages/Documents.jsx";

const basename = import.meta.env.MODE === "production" ? "/AdminPanel" : "/";


function App(props) {
    return (
        <HashRouter basename="/AdminPanel">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="users" element={<Users />} />
                    <Route path="posts" element={<Posts />} />
                    <Route path="courses" element={<Courses />} />
                    <Route path="donations" element={<Donations />} />
                    <Route path="documents" element={<Documents />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
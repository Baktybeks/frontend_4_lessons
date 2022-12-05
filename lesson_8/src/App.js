import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ButtonPage from "./pages/buttonPage/ButtonPage";
import UsersPage from "./pages/usersPage/UsersPage";
import MainPage from "./pages/mainPage/MainPage";
import PostPage from "./pages/postPage/PostPage";
import Post from "./components/post/Post";
import Login from "./pages/login/Login";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login/>}/>

                <Route path='/'
                       element=
                           {<Dashboard/>}>
                    <Route index element={<UsersPage/>}/>
                    <Route path="button" element={<ButtonPage/>}/>
                    <Route path="main" element={<MainPage/>}/>
                    <Route path="posts" element={<PostPage/>}/>
                </Route>
                <Route path="posts/:id" element={<Post/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

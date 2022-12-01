import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonPage from "./pages/buttonPage/ButtonPage";
import UsersPage from "./pages/usersPage/UsersPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/menu/Menu";
import MainPage from "./pages/mainPage/MainPage";

function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                    <Route index element={<UsersPage/>}/>
                    <Route path="button" element={<ButtonPage/>}/>
                    <Route path="main" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

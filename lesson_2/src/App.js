import './App.css';
// import MainPage from "./pages/mainPage/MainPage";
// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
import UsersPage from "./pages/usersPage/UsersPage";

// function Header() {
//     return (
//         <>
//             <Title text="i am header component"/>
//         </>
//     )
// }
//
// function Footer() {
//     return (
//         <>
//             <Title text="i am footer component"/>
//         </>
//     )
// }
//
// function Title(props) {
//     return <h1>{props.text}</h1>
// }
//
// function User(props) {
//     return (
//         <>
//             <p>userName: {props.name}</p>
//             <p>userLastName: {props.lastName}</p>
//         </>
//     )
// }


function App() {
    return (
        <div className="App">
            <UsersPage/>


            {/*<Header/>*/}
            {/*<MainPage/>*/}
            {/*<Footer/>*/}

            {/*<Header/>*/}
            {/*<h1>Users</h1>*/}
            {/*<User name="Baktybek" lastName="Sariev"/>*/}
            {/*<User name="Nurman" lastName="Sariev"/>*/}
            {/*<Footer/>*/}
        </div>
    );
}

export default App;

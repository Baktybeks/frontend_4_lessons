import './App.css';
// import RegisterUser from "./pages/registerUser/RegisterUser";
import ClassComponent from "./pages/classComponent/ClassComponent";
// import MainPage from "./pages/mainPage/MainPage";
// import FormPage from "./pages/formPage/FormPage";

function App() {
    const user = {name: "Anna", age: 19}
    return (
        <div className="App">
            {/*<MainPage/>*/}
            {/*  <FormPage/>*/}
            {/*<RegisterUser/>*/}
            <ClassComponent name="Dastan"/>
            <ClassComponent name="Anna"/>
        </div>
    );
}

export default App;



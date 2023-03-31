import "./App.css";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
    return (
        <div class="row g-0">
            <div class="col-2">
                <SideBar />
            </div>
            <div class="col m-3">
                <NavBar />
                <Content />
            </div>
        </div>
    );
}

export default App;

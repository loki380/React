import "./App.css";
import Content from "./components/Content/Content";
import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div class="d-flex vh-100">
      <SideBar/>
      <div class="d-flex flex-column w-100">
        <NavBar />
        <Content />
      </div>
    </div>
  );
}

export default App;

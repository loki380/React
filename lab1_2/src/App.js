import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Layout from "./components/Layout/Layout";
import NoPage from "./components/NoPage/NoPage";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import ChatWrapper from "./components/ChatWrapper/ChatWrapper";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <ChatWrapper/>
        </div>
    );
}

export default App;

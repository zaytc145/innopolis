import './App.css';
import Main from "./pages/Main/Main";
import Photo from "./pages/Photo";
import {Route, Routes, BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/:id" element={<Photo/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;

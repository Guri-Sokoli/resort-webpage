import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import SelectPage from "./SelectPage";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/select" element={<SelectPage />} />
            </Routes>
        </Router>
    );
}

export default App;

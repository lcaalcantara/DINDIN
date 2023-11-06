import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SingIn";

function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={< SignIn />} />
        </Routes>)
}

export default MainRoutes;
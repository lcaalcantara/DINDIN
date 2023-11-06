import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SingIn";
import SignUp from "./pages/SignUp";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}

export default MainRoutes;

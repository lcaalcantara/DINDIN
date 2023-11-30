import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import SignIn from "./pages/SingIn";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import { getItem } from "./utils/storage";

function ProtectedRoutes({ redirectTo }) {
  const token = getItem('token')

  return token ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />

      <Route element={<ProtectedRoutes redirectTo={'/'} />}>
        <Route path="/main" element={<Main />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;

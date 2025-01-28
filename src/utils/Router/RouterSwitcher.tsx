import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MenuPage from "../../pages/MenuPage/MenuPage";
import CompanyPage from "../../pages/CompanyPage/CompanyPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { ProtectedRoute } from "./ProtectedRoute";
import OrderPage from "../../pages/OrderPage/OrderPage";

const RouterSwitcher = () => {
    return (
        <Routes>
            <Route path="/" element={ProtectedRoute(<HomePage />)} />
            <Route
                path="/menu"
                element={ProtectedRoute(<MenuPage />)}
            />
            <Route
                path="/company"
                element={ProtectedRoute(<CompanyPage />)}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/orders" element={ProtectedRoute(<OrderPage />)} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};
export default RouterSwitcher;
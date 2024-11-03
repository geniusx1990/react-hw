import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MenuPage from "../../pages/MenuPage/MenuPage";
import CompanyPage from "../../pages/CompanyPage/CompanyPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

const RouterSwitcher = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/menu'} element={<MenuPage/>}/>
            <Route path={'/company'} element={<CompanyPage/>}/>
            <Route path={'/login'} element={<LoginPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    )
}

export default RouterSwitcher;
import { Outlet, useNavigate } from "react-router-dom";
import './Layout.css'
import Header from "../Header/Header";
import { DialogProvider } from "src/hooks/useDialog";
import AuthContext from "src/context/AuthProvider";
import { useContext } from "react";
import axios from "src/api/axios";
import { googleLogout } from "@react-oauth/google";

const Layout = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
  
    const logout = async () => {
        // @todo check if works
        axios.post('/logout').then(()=>{
            googleLogout();
            setAuth({});
            navigate('/main');
        });
    }
    return (
        <>
            <DialogProvider>
                <Header onLogout={logout}/>
                <main className="layout-content">
                    <Outlet />
                </main>
            </DialogProvider>
        </>
    );
};

export default Layout;

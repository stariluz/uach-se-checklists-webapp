import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import './Layout.css'
import Header from "../Header/Header";
import { DialogProvider } from "src/hooks/useDialog";
import axios from "src/api/axios";
import { googleLogout } from "@react-oauth/google";
import useAuth from "src/hooks/useAuth";

const Layout = () => {
    const { auth, setAuth, cookies} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    
    const logout = async () => {
        // @todo check if works
        axios.post('/logout').then(() => {
            googleLogout();
            setAuth({});
            cookies.remove('jwt_token')
            navigate('/main', {
                state: {
                    from: location
                },
                replace: true,
            });
        });
    }
    return (
        auth?.user
            ? <>
                <DialogProvider>
                    <Header onLogout={logout} />
                    <main className="layout-content">
                        <Outlet />
                    </main>
                </DialogProvider>
            </>
            : <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default Layout;

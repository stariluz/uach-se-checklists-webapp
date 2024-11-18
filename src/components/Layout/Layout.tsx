import { Outlet } from "react-router-dom";
import './Layout.css'
import Header from "../Header/Header";
import { DialogProvider } from "src/hooks/useDialog";

const Layout = () => {
    return (
        <>
            <DialogProvider>
                <Header />
                <main className="layout-content">
                    <Outlet />
                </main>
            </DialogProvider>
        </>
    );
};

export default Layout;

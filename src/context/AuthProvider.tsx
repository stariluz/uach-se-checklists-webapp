import { createContext, ReactNode, useState } from "react";
import { UserModel } from "src/models/Users";
import Cookies from "universal-cookie";

const AuthContext = createContext<{
    auth?: {
        user?: UserModel
        token?: string;
    },
    setAuth?: any,
    cookies?: any
}>({
    auth: undefined,
    setAuth: undefined,
    cookies: new Cookies(),
});
interface Props {
    children?: ReactNode
}
export const AuthProvider = (props: Props) => {
    const [auth, setAuth] = useState({});
    const cookies = new Cookies();

    return (
        <AuthContext.Provider value={{ auth, setAuth, cookies }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
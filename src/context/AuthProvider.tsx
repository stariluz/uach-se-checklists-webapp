import { createContext, ReactNode, useState } from "react";
import { UserModel } from "src/models/Users";

const AuthContext = createContext<{
    auth?: {
        user?:UserModel
        token?:string;
    },
    setAuth?: any,
}>({
    auth: undefined,
    setAuth: undefined,
});
interface Props{
    children?: ReactNode
}
export const AuthProvider = (props:Props) => {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
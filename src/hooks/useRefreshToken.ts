import axios from "src/api/axios";
import useAuth from "./useAuth";
import { UserModel } from "src/models/Users";

const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const refresh = async () => {

        const res = await axios.post(`/refresh-token`, {
            token: sessionStorage.getItem('jwttoken'),
        })
        setAuth({
            user: new UserModel(res.data.user),
            token: res.data.token
        });
        return res.data.token;
    }
    return refresh;
}

export default useRefreshToken;
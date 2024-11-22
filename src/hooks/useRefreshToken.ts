import axios from "src/api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const {setAuth} = useAuth();
    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        })
        setAuth((prev:any) => {
            return { ...prev, token: response.data.token }
        })
        return response.data.token;
    }
    return refresh;
}

export default useRefreshToken;
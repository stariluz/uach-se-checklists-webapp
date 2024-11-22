import { axiosWithAuth } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import useAuth from "./useAuth";

const useAxiosWithAuth = () => {
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {

        const requestIntercept = axiosWithAuth.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${auth?.token}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosWithAuth.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newToken}`;
                    return axiosWithAuth(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosWithAuth.interceptors.request.eject(requestIntercept);
            axiosWithAuth.interceptors.response.eject(responseIntercept);
        }
    }, [auth, refresh])

    return axiosWithAuth;
}

export default useAxiosWithAuth;
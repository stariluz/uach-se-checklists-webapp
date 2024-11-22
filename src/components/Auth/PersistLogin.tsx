import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from 'src/hooks/useRefreshToken';
import useAuth from 'src/hooks/useAuth';

const PersistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshToken();
    const { auth } = useAuth();

    useEffect(() => {
        let isMounted = true;

        const verifyRefreshToken = async () => {
            try {
                await refresh();
            }
            catch (err) {
                console.error(err);
            }
            finally {
                isMounted && setIsLoading(false);
            }
        }

        // persist added here AFTER tutorial video
        // Avoids unwanted call to verifyRefreshToken
        !auth?.token ? verifyRefreshToken() : setIsLoading(false);

        return () => {
            isMounted = false;
        }
    }, [])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`)
        console.log(`aT: ${JSON.stringify(auth?.token)}`)
    }, [isLoading])

    return (
        <>
            {isLoading
                ? <p>Cargando...</p>
                : <Outlet />
            }
        </>
    )
}

export default PersistLogin
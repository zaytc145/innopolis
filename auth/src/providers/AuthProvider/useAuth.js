import {useCallback, useContext} from "react";
import AuthContext from "./AuthContext";

const useAuth = () => {
    const {user, setUser} = useContext(AuthContext);

    const login = useCallback((user) => {
        setUser(user);
    },[setUser])

    const logout = useCallback(() => {
        setUser(null);
    },[setUser])

    return {user, login, logout}
}

export default useAuth
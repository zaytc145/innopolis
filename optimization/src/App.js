import './App.css';
import FormInput from "./components/FormInput";
import {useCallback, useMemo, useState} from "react";

function App() {

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");

    const setLoginValue = useCallback((e) => {
        setLogin(e.target.value);
    }, [])

    const setPasswordValue = useCallback((e) => {
        setPassword(e.target.value);
    }, [])

    const setAgeValue = useCallback((e) => {
        setAge(e.target.value);
    }, [])

    const isLoginValid = useMemo(() => {
        if (!login) return false;
        if (login.length < 3) return true;
        return true
    }, [login])

    const isPasswordValid = useMemo(() => {
        if (!password) return false;
        if (password.length < 6) return true;
        return true
    }, [password])

    const isAgeValid = useMemo(() => {
        return age >= 18
    }, [age])

    return (
        <div className="App">
            <form>
                <div>
                    <label>Login</label>
                    <FormInput
                        type="text"
                        value={login}
                        onChange={setLoginValue}
                        className={isLoginValid ? "" : "invalid"}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <FormInput
                        type="password"
                        value={password}
                        onChange={setPasswordValue}
                        className={isPasswordValid ? "" : "invalid"}
                    />
                </div>
                <div>
                    <label>Age</label>
                    <FormInput
                        type="number"
                        value={age}
                        onChange={setAgeValue}
                        className={isAgeValid ? "" : "invalid"}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default App;

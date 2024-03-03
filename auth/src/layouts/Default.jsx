import Nav from "../components/Nav";
import {Outlet} from "react-router-dom";

const Default = () => {
    return <div>
        <Nav/>
        <div style={{
            padding: "10px",
        }}>
            <Outlet/>
        </div>
    </div>
}

export default Default
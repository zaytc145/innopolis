import {memo} from "react";
import './FormInput.css';

const FormInput = (props) => {
    return <input {...props}/>
}

export default memo(FormInput);
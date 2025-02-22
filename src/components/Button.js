
import { useState, useEffect } from "react";

const Button = (props) => {
    const [click, setClick] = useState(0);
   
    useEffect(() => {
        document.title = `You click ${click}`;
    });

    return (
        <button onClick={() => {setClick(click + 1)}}>
            {props.text} {click}
            </button>
    )
};

Button.defaultProps = {
    text: 'Button'
}

export default Button;
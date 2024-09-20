import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import './Button.css'

function Button(props) {
    const [text, setText] = useState(props.text);
    const [index, setIndex] = useState(0);

    const navigate = useNavigate();
    const textNormal = props.text;

    const intervalRef = useRef(null);
    const indexRef = useRef(index);
    const textRef = useRef(text);

    useEffect(() => {
        // Update refs whenever state changes
        indexRef.current = index;
        textRef.current = text;
    }, [index, text]);

    String.prototype.replaceAt = function (i, replacement) {
        return this.substring(0, i) + replacement + this.substring(i + replacement.length);
    }

    function OnMouseEnter() {
        if (intervalRef.current) {
            return;
        }

        intervalRef.current = setInterval(() => {
            if (indexRef.current >= textRef.current.length) {
                OnMouseLeave();
                return;
            }

            setText(text.replaceAt(indexRef.current, "|"));
            setIndex((prevIndex) => prevIndex + 1);
        }, 100);
    }

    function OnMouseLeave()
    {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setText(textNormal);
        setIndex(0);
    }

    return (
        <button
            className="coolButton"
            onClick={() => navigate(props.path)}
            onMouseEnter={OnMouseEnter}
            onMouseLeave={OnMouseLeave}>
            {text}
        </button>
    );
}

export default Button;
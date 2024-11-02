import { useEffect, useState } from 'react';
import './UpgradeButton.css'

function UpgradeButton(props)
{
    const [cost, setCost] = useState(props.cost);

    useEffect(() => {
        if (localStorage.hasOwnProperty(props.text)) {
            setCost(localStorage.getItem(props.text));
        }
    }, []);

    function buy() {
        if (props.cash - cost >= 0) {
            props.function();
            setCost((cost * props.costMultiplier).toFixed(0));
            localStorage.setItem(props.text, (cost * props.costMultiplier).toFixed(0))
            props.setCash(props.cash - cost);
        }
    }

    return (
        <button
            className="upgradeButton"
            onClick={() => { buy() }}>
            {props.text}<br />{cost}$
        </button>
    )
}

export default UpgradeButton;
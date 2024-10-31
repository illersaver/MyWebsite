import { useState } from 'react';
import './UpgradeButton.css'

function UpgradeButton(props)
{
    const [cost, setCost] = useState(props.cost);
    function buy() {
        if (props.cash - cost >= 0) {
            props.function();
            setCost((cost * 2.9).toFixed(0));
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
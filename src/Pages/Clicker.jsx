import PageSelector from '../Components/PageSelector.jsx'
import Me from '../assets/Me.gif';
import { useState, useRef } from 'react';

import './Clicker.css'
import UpgradeButton from '../Components/Clicker/UpgradeButton.jsx';

function Clicker() {
    const [cash, setCash] = useState(0);
    const clickingPower = useRef(1)

    function mainButtonClicked(){
        setCash(cash + clickingPower.current);
    }

    return (
        <div>
            <PageSelector />

            <div className="divBody1MainPage">

                <div className="divBody1Clicker">
                    <h1 className="text">Cash:<br />{cash}$</h1>
                    <img src={Me}
                        className="MainButtonClicker"
                        onClick={() => { mainButtonClicked() }} />
                </div>

                <div className="divBody2Clicker">
                    <UpgradeButton
                        text="Click power X2"
                        cash={cash}
                        setCash={setCash}
                        cost={100}
                        function={() => {
                            clickingPower.current *= 2;
                        }}>
                    </UpgradeButton>
                </div>
            </div>
        </div>
    );
}

export default Clicker;
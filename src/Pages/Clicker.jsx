import PageSelector from '../Components/PageSelector.jsx'
import Me from '../assets/Me.gif';
import { useState, useRef, useEffect } from 'react';

import './Clicker.css'
import UpgradeButton from '../Components/Clicker/UpgradeButton.jsx';

function Clicker() {
    const [cash, setCash] = useState(0);
    const clickingPower = useRef(1);
    const passiveIncome = useRef(0);

    useEffect(() => {
        if (localStorage.hasOwnProperty('cash')) {
            setCash(parseInt(localStorage.getItem('cash')));
        }

        if (localStorage.hasOwnProperty('passiveIncome')) {
            passiveIncome.current = parseInt(localStorage.getItem('passiveIncome'));
        }

        // console.log(JSON.stringify(localStorage));
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCash(cash + passiveIncome.current);
            localStorage.setItem("cash", cash + passiveIncome.current);
        }, 1000);

        return () => clearInterval(interval);
    }, [cash]);

    function mainButtonClicked(){
        setCash(cash + clickingPower.current);
        localStorage.setItem("cash", cash + clickingPower.current);
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
                        costMultiplier={2.9}
                        function={() => {
                            clickingPower.current *= 2;
                            localStorage.setItem("clickingPower", clickingPower.current);
                        }}>
                    </UpgradeButton>

                    <UpgradeButton
                        text="Passive income"
                        cash={cash}
                        setCash={setCash}
                        cost={100}
                        costMultiplier={1.1}
                        function={() => {
                            passiveIncome.current += 5;
                            localStorage.setItem("passiveIncome", passiveIncome.current);
                        }}>
                    </UpgradeButton>
                </div>
            </div>
        </div>
    );
}

export default Clicker;
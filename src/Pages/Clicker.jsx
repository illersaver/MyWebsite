import PageSelector from '../Components/PageSelector.jsx'
import Me from '../assets/Me.gif';
import { useState, useRef, useEffect } from 'react';

import './Clicker.css'
import UpgradeButton from '../Components/Clicker/UpgradeButton.jsx';

function Clicker() {
    const [cash, setCash] = useState(0n);
    const clickingPower = useRef(1n);
    const passiveIncome = useRef(0n);

    useEffect(() => {
        if (localStorage.hasOwnProperty('cash')) {
            setCash(BigInt(localStorage.getItem('cash')));
        }

        if (localStorage.hasOwnProperty('passiveIncome')) {
            passiveIncome.current = BigInt(localStorage.getItem('passiveIncome'));
        }

        if (localStorage.hasOwnProperty('clickingPower')) {
            clickingPower.current = BigInt(localStorage.getItem('clickingPower'));
        }

        // console.log(JSON.stringify(localStorage));

        const interval = setInterval(() => {
            setCash(prevCash => {
                localStorage.setItem("cash", prevCash + passiveIncome.current);
                return prevCash + passiveIncome.current;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function mainButtonClicked(){
        setCash(cash + clickingPower.current);
        localStorage.setItem("cash", cash + clickingPower.current);
    }

    return (
        <div>
            <PageSelector />

            <div className="divBody1MainPage">

                <div className="divBody1Clicker">
                    <h1 className="text">Cash:<br />{String(cash)}$</h1>
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
                            clickingPower.current *= 2n;
                            localStorage.setItem("clickingPower", clickingPower.current);
                        }}>
                    </UpgradeButton>

                    <UpgradeButton
                        text="Passive income"
                        cash={cash}
                        setCash={setCash}
                        cost={100}
                        costMultiplier={1.6}
                        function={() => {
                            passiveIncome.current += 1n;
                            passiveIncome.current += (passiveIncome.current * 50n) / 100n;
                            localStorage.setItem("passiveIncome", passiveIncome.current);
                        }}>
                    </UpgradeButton>
                </div>
            </div>
        </div>
    );
}

export default Clicker;
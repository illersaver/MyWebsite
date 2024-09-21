import { useEffect, useState } from 'react';
import PageSelector from '../Components/PageSelector.jsx'

import './Terminal.css';

function Terminal() {
    const [value, setValue] = useState('');
    const [terminal, setTerminal] = useState(["Terminal"]);

    function test(txt) {
        let count = 0;

        setTerminal([...terminal, <br key={Date.now()} />, txt]);

        for (const element of terminal)
        {
            count++;
        }

        if (count >= 45)
        {
            setTerminal(["Terminal"]);
        }
    }

    return (
        <div>
            <PageSelector />
            <div className="terminalBackground">
                <div className="terminalText">
                    <p>{terminal}</p>
                </div>
                <div className="terminalInputDiv">
                    <input
                        onKeyDown={e => {
                            if (e.key === "Enter") {
                                test(e.target.value);
                                setValue("");
                            }
                        }}
                        onChange={e => { setValue(e.target.value); } }
                        className="terminalInput"
                        value={value}>
                    </input>
                </div>
            </div>
        </div>
    );
}

export default Terminal;
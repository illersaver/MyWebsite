import { useEffect, useState } from 'react';

import PageSelector from '../Components/PageSelector.jsx'
import './TestPage.css'

function TestPage() {
    const [ping, setPing] = useState();

    async function fetchPing() {
        try {
            const response = await fetch('ping');
            setPing(await response.text());
        }
        catch (exc) {
            console.error('Fetch failed', exc);
        }
    }

    useEffect(() => {
        fetchPing();
    }, []);

    return (
        <div>
            <PageSelector />
            <div className="divBody">
                <p>response: {ping}</p>
            </div>
        </div>
    );
}

export default TestPage;
import PageSelector from '../Components/PageSelector.jsx';

import Me from '../assets/Me.gif';

import './MainPage.css';

function MainPage() {

    return (
        <div>
            <PageSelector />
            <div className="divBody1MainPage">
                <div className="divBody2MainPage">
                    <div className="text">
                        <p>Sup!</p>
                        <p>I am Ilya, just another developer on the web.</p>
                        <p>I like C#, Godot and Space station 13.</p>
                        <p>I dunno what to write here anymore lol.</p>
                        <img src={Me} className="me"></img>
                    </div>

                    <div className="links">
                        <button
                            className="steamButton"
                            onClick={() => { window.open('https://steamcommunity.com/id/illersaver/', '_blank') }}>Steam</button>
                        <button
                            className="discordButton"
                            onClick={() => { window.open('https://discord.com/users/530120192290979850', '_blank') }}>Discord</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
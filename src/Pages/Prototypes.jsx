import PageSelector from '../Components/PageSelector.jsx'

import RobustClub from '../assets/RobustClub.png';

import RobustClubZip from '../assets/RobustClub.zip';
import HookingOverItZip from '../assets/HookingOverIt.zip';

import './Prototypes.css'
function Prototypes() {
    return (
        <div>
            <PageSelector />
            <div className="divBody1Prototypes">
                <div className="divBody2MainPage">
                    <div className="textPrototypes">
                        <h5>This page contains protypes/frozen projects that are too unpolished to publish them in places like itch.io.</h5>
                    </div>

                    <div>
                        <img src={RobustClub} className="picturesPrototypes"></img>
                        <h5>Robust Club is a boomer-shooter set in space station 13 universe</h5>

                        <a href={RobustClubZip}>Download</a>

                        <div className="smallTextPrototypes">
                            <p>Date uploaded: 23.09.2024</p>
                            <p>Concept and programming: Me</p>
                            <p>Design, mapping and ideas: DrunkSlayer</p>
                            <p>Mech texture: Red</p>
                        </div>
                    </div>

                    <div>
                        <h1>Hooking Over It</h1>
                        <h5>Hooking Over It is a game heavily inspired by <br /> Getting Over It with Bennett Foddy</h5>

                        <a href={HookingOverItZip}>Download</a>

                        <div className="smallTextPrototypes">
                            <p>Date uploaded: 23.09.2024</p>
                            <p>Everything: Me</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prototypes;
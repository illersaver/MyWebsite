import Button from './Button.jsx'
import './PageSelector.css'

function PageSelector() {
    return (
        <div>
            <h1 className="h1Selector">Iller_Saver's cool very own website!</h1>
            <div className="center">
                <svg className="svgSelector">
                    <rect className="rectSelector"/>
                </svg>
                <Button text="Main Page" path="/MainPage"></Button>
                <Button text="Prototypes" path="/Prototypes"></Button>
                <Button text="Clicker" path="/Clicker"></Button>
                <Button text="Terminal" path="/Terminal"></Button>
            </div>
        </div>
    );
}

export default PageSelector;
import Button from './Button.jsx'
import './PageSelector.css'

function PageSelector() {
    return (
        <div>
            <h1>Iller_Saver's cool very own website!</h1>
            <div className="center">
                <svg>
                    <rect />
                </svg>
                <Button text="Main Page" path="/MainPage"></Button>
                <Button text="Test Page" path="/TestPage"></Button>
                <Button text="Test Page" path="/TestPage"></Button>
                <Button text="Terminal" path="/Terminal"></Button>
            </div>
        </div>
    );
}

export default PageSelector;
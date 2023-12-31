import logo from '../images/logo.svg';
import '../scss/app.scss';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Boilerplate initialised! Let's get building.</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;

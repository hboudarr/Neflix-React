import "./App.css";
import Content from "./Content";
import Header from "./Header";
import logo from "./img/netflix.png";

function App() {
    return (
        <div className="App">
            <Header pic={logo} />
            <Content />
        </div>
    );
}

export default App;

import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css';
import Home from '~/pages/Home';
import following from '~/pages/following';


function App() {
    return (
<Router>
        <div className="App">Learn React
            <Routes></Routes>
        </div>
</Router>
    );
}

export default App;

import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css';
import Home from '~/pages/Home';
import Following from '~/pages/following';


function App() {
    return (
<Router>
        <div className="App">Learn React
            <Routes>
                <Route> path="/" element={<Home} </Route>
            </Routes>
        </div>
</Router>
    );
}

export default App;

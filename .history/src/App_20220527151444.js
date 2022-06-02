import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/index.js';
import Following from './pages/following/index.js';


function App() {
    return (
<Router>
        <div className="App">
            <Routes>
                <Route>  </Route>
                <Route> path="/following" element={<Following />} </Route>
            </Routes>
        </div>
</Router>
    );
}

export default App;

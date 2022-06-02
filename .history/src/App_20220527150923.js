import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home';
import Following from './pages/following';


function App() {
    return (
<Router>
        b 
            <Routes>
                <Route> path="/" element={<Home/>} </Route>
                <Route> path="/following" element={<Following/>} </Route>
            </Routes>
        </div>
</Router>
    );
}

export default App;

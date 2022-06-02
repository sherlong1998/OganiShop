import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/index.js';
import Following from './pages/following';


function App() {
    return (
<Router>
        <div className="App">
            <Home></Home>
            <Fo
            {/* <Routes>
                <Route> path="/" element={<Home/>} </Route>
                <Route> path="/following" element={<Following/>} </Route>
            </Routes> */}
        </div>
</Router>
    );
}

export default App;

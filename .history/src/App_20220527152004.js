import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home/index.js';
import Following from './pages/following/index.js';


function App() {
    return (
<Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}/>  
                <Route  path="/following" element={<Following />}/>
            </Routes>
        </div>
</Router>
    );
}

export default App;

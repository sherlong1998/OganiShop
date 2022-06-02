import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css';
import {publicRoute} from './'



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

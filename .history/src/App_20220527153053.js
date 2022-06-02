import {BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import './App.css';
import {publicRoute} from './route/index.js'



function App() {
    return (
<Router>
        <div className="App">
            <Routes>
                publicRoute.map((route,index)=>{
                    return <Route key={index} path= {route.path}  />
                 })
            </Routes>
        </div>
</Router>
    );
}

export default App;

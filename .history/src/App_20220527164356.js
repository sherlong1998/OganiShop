import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './route/index.js';
import {DefaultLayout} from './components/Layout/DefaultLayout'
function App() {
    return (
        <Router>
            <div className="App ">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const layout = 
                        const Page = route.component  route.layout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                        Page 
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

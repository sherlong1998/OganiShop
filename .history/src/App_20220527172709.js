import fragments fr
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './route/index.js';
import DefaultLayout from './components/Layout/DefaultLayout/index.js'
function App() {
    return (
        <Router>
            <div className="App ">

                <Routes>
                    
                    {publicRoutes.map((route, index) => {
                        const Page = route.component ;

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page/>
                                    </Layout>
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

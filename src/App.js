import {Fragment} from "react"
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { publicRoutes } from './route/index.js';
import DefaultLayout from './components/Layout/DefaultLayout/index.js';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
    return (
        <Router>
            <div className="App ">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;

                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
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

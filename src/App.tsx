import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import Layout from "./layout/Layout";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="bg-background">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;
                            return <Route key={index} path={route.path} element={<Page />} />
                        })}
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
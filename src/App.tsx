import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import MainLayout from "./layout/MainLayout";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="bg-background">
                <Routes>
                    <Route path="/" element={<MainLayout />}>
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
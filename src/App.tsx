import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
    return (
        <div className='grid grid-cols-12 w-full'>
            <Router>
                <Routes>
                    {routes.map(({ path, Component }, index) => (
                        <Route key={index} path={path} element={<Component />} />
                    ))}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
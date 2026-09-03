import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {routes.map(({ path, Component }, index) => (
          <Route key={index} path={path} element={<Component />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;

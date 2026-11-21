import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes/routes";
import Header from "./components/Header";
import { LanguageProvider } from "./i18n/lang";
import LanguageToggle from "./components/LanguageToggle";

function App() {
  return (
    <Router>
      <LanguageProvider>
        <Header />
        <Routes>
          {routes.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
        <LanguageToggle />
      </LanguageProvider>
    </Router>
  );
}

export default App;

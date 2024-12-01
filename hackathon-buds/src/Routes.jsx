import { Routes, Route, } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RuleBook from "./Pages/RuleBook";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rules" element={<RuleBook />} />
        </Routes>
    )
}

export default Router;
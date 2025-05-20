import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;

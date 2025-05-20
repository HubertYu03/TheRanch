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
        <Route path="/" element={<Navigate to="/comingSoon" replace />} />
        <Route path="/comingSoon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;

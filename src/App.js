import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  HistoryPage,
  RoyalCourtNoticesPage,
  TheGinuwaPage,
  WarriTraditionalCouncilPage,
} from "./components/pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HistoryPage" element={<HistoryPage />} />
        <Route
          path="/RoyalCourtNoticesPage"
          element={<RoyalCourtNoticesPage />}
        />
        <Route path="/TheGinuwaPage" element={<TheGinuwaPage />} />
        <Route
          path="/WarriTraditionalCouncilPage"
          element={<WarriTraditionalCouncilPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

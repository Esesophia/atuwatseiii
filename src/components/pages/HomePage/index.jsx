import { Link } from "react-router-dom";
import { Image } from "../../atoms";

export const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Image src="../assets/brand.png" />
      <Link to="/HistoryPage">History</Link>
      <Link to="/TheGinuwaPage">The Ginuwa Ruling House</Link>
      <Link to="/WarriTraditionalCouncilPage">Warri Traditional Council</Link>
      <Link to="/RoyalCourtNoticesPage">Royal Court Notices</Link>
    </>
  );
};

import { Link } from "react-router-dom";
import { ROUTES_URL } from "../constants/RoutsURL";

const HomePage = () => {
  return (
    <div className="mt-10 card-box text-center">
      <h1 className="text-2xl">Welcome To The ATG</h1>
      <p className="text-sm font-normal leading-6">
        Here you can get all the information you need about the race.
        <br />
        Easily choose the bet type and the race to receive the information you
        need.
        <br />
      </p>
      {/* <Link to={ROUTES_URL.RACEINFO} className="btn" data-testid={"searchBtn"}>
        Start Searching
      </Link> */}
    </div>
  );
};

export default HomePage;

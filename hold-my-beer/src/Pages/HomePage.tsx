import { Link } from "react-router-dom";
import { ROUTES_URL } from "../constants/RoutsURL";
import BeerIcon from "/BeerIcon.png";
const HomePage = () => {
  return (
    <div className="mt-10 card-box text-center">
      <h1 className="text-2xl">Welcome To HOLD MY BEER</h1>
      <img className="mx-auto" src={BeerIcon} width={200} />
      <p className="text-sm font-normal leading-6">
        Here you can get all the information you need To bet on your friends and
        etc...
        <br />
        Easily create a group with your buddies and bet over BEER.
        <br />
      </p>
      {/* <Link className="btn" data-testid={"searchBtn"}>
        Start Here
      </Link> */}
      <div className="section-card-container">
        <div className="section-cards">ScoreBoard</div>
        <div className="section-cards">My Pubs</div>
        <div className="section-cards">Gangs</div>
        <div className="section-cards">Wanna Bet?</div>
      </div>
    </div>
  );
};

export default HomePage;

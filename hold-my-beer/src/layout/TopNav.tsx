import { NavLink } from "react-router-dom";
import { ROUTES_URL } from "../constants/RoutsURL";
import { UserIcon } from "../constants/Icons";

const TopNav = () => {
  return (
    <header className="flex items-center justify-between bg-[#dc9b32] px-5 py-2 shadow-xl text-gray-100">
      <div className="flex-1">
        <NavLink to={ROUTES_URL.HOME} className="text-gray-900">
          Home
        </NavLink>
      </div>
      {/* <div className="flex flex-col items-center flex-1">
      </div> */}
      <div className="flex-1 flex justify-end space-x-4">
        <NavLink to={ROUTES_URL.RACEINFO} className="text-gray-900">
          <UserIcon />
        </NavLink>
      </div>
    </header>
  );
};

export default TopNav;

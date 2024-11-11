import { Link, NavLink, Outlet } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="w-full h-12 bg-slate-400 flex justify-around items-center">
        <NavLink to="/">
          {(e) => {
            return (
              <span
                className={[e.isActive ? "text-red-800" : "text-blue-500"].join(
                  ""
                )}
              >
                Home
              </span>
            );
          }}
        </NavLink>

        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "Red" : "blue",
            };
          }}
          to="/Show"
        >
          Show
        </NavLink>

        <NavLink to="/user/john">UserDetails</NavLink>
        <Link to="/User">user</Link>
        <Link to="/Abuot">About</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Nav;

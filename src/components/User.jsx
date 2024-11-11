import React, { useContext } from "react";
import { UserContext } from "../context/Context";
import { Link } from "react-router-dom";

function User() {
  const { user, setuser } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1 className="m-4">User list </h1>
      <div>
        {user.map((u, id) => (
        <div key={id} className="m-4">
          <Link to={`/User/${u.id}`} className="px-2 py-1 rounded-md bg-slate-400 m">{u.name}</Link>
        </div>
        ))}
      </div>
    </div>
  );
}

export default User;

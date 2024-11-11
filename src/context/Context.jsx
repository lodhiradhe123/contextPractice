import React, { createContext, useState } from "react";
export const UserContext = createContext(null);

function Context(props) {
  const [user, setuser] = useState(
  [  {
      id: 0,
      name: "radhe",
      age: 24,
      email: "radhe@gmail.com",
    },
    {
      id: 1,
      name: "shyam",
      age: 24,
      email: "radhe@gmail.com",
    },
    {
      id: 2,
      name: "golu",
      age: 24,
      email: "radhe@gmail.com",
    }]
  );
//   console.log(props);

  return (
    <UserContext.Provider value={{ user, setuser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default Context;

import React, { useState } from "react";

const firstUser = {
  id: "0391-3233-3201",
  firstName: "Bill",
  lastName: "Wilson",
  city: "Missoula",
  state: "Montana",
  email: "bwilson@mtnwilsons.com",
  admin: false,
};

function User() {
  // user state 초기값으로 firstUser 객체 할당
  const [user, setUser] = useState(firstUser);
  return (
    <div>
      <h1>
        {user.firstName} {user.lastName} - {user.admin ? "Admin" : "User"}
      </h1>
      <p>Email: {user.email}</p>
      <p>
        Location: {user.city}, {user.state}
      </p>
      <button
        onClick={() => {
          setUser({ ...user, admin: true });
        }}
      >
        Make Admin
      </button>
    </div>
  );
}

export default function Usereducercomplex1() {
  return <User />;
}

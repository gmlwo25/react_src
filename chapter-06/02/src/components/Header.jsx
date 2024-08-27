import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {UserContext} from "../context/UserContext"

const Header =  () => {
  const {isDark} = useContext(ThemeContext);
  const userName = useContext(UserContext);

  return (
    <header
      className="header"
      style={{
        backgroundColor: isDark ? 'black' : 'lightgray',
        color: isDark ? 'white' : 'black',
      }}
    >
      <h1>Welcome {userName}!</h1>
    </header>  
  );
}

export default Header;
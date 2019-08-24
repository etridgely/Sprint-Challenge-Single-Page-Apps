import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";


// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
const TabNav = () => {
    return (
      <div>
        <div className="Navigation">
          <div>
            <NavLink to="/">Home Page</NavLink>
          </div>
          <div>
            <NavLink to="/characters">Characters</NavLink>
          </div>
          <div>
            <NavLink to="/locations">Locations</NavLink>
          </div>
          <div>
            <NavLink to="/episodes">Episodes</NavLink>
          </div>
        </div>
      </div>
      
    );
  };
  
  export default TabNav;

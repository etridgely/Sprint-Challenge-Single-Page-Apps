import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
const Navigation = () => {
    return (
      <div>
        <div className="Navigation">
          <div>
            <NavLink exact to="/">Home</NavLink>
          </div>
          <div>
            <NavLink to="/">Characters</NavLink>
          </div>
          <div>
            <NavLink to="/">Locations</NavLink>
          </div>
          <div>
            <NavLink to="/">Episodes</NavLink>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navigation;

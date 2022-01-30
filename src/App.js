import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessangerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArroIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";

import React, { useState } from "react";

export default function App() {
  return (
    <Navbar>
      <NavItem icon={ <PlusIcon/> } />
      <NavItem icon={ <BellIcon/> } />
      <NavItem icon={ <MessangerIcon/> } />

      <NavItem icon={ <CaretIcon/> }>

      </NavItem>
    </Navbar>
  );
}

function Navbar(props) {
  return( 
    <nav className='navbar'>
      <ul className='navbar-nav'> { props.children }</ul>
    </nav>
  )
}

function NavItem(props) {

  const [open, setOpen] = useState();

  return (
    <li className="nav-item" >
      <a href="#" className="icon-button" >
        {props.icon}
      </a>
    </li>
  )
}
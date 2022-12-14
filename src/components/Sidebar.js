import React from 'react';
import { bubble as Menu } from 'react-burger-menu';

import './Sidebar.css';

var mounted = false;
const Sidebar = () => {

    function logOut() {
        if (!mounted) {
        localStorage.setItem('accountKey', false);
        sessionStorage.setItem('accountPassword', false);
        window.location.replace('/beta2/');
        }
        mounted = true;
    }

  return (
    <Menu>
      <a className="menu-item" href="/beta2/files">
        Files
      </a>
      <a className="menu-item" href="/beta2/passwords">
        Private data
      </a>
      <a className="menu-item" onClick={logOut} href="/">
        Log out
      </a>
    </Menu>
  );
};

export default Sidebar;
import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav() {
    const navStyle={
    'text-decoration': 'none',
     'color':'white',
    }

    return (
      <nav>
          <Link style={navStyle} to="/">
          <h3>Đóng Tiền Điện</h3>
          </Link>
          <ul>
                <Link  style={navStyle} to="/family">
                    <li><h3>Các hộ</h3></li>
                </Link>
                <Link  style={navStyle} to="/family/:id">
                    <li><h3>Thông tin</h3></li>
                </Link>
          </ul>
      </nav>
  );
}

export default Nav;

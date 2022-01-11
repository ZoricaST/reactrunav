import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';

const nav = () => {
    return (
        <div class="topnav">
  <Link to="/" class="active">Home</Link>
  <Link to="/page1">Page1</Link>
  <Link to="/page2">Page2</Link>

</div>
    )
}

export default nav
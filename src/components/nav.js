import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css';


const nav = ({tabovi}) => {
  
    return (
        <div className="topnav">
  <Link to="/" className="active">Home</Link>
  
  {tabovi.map((tab) => (<Link to={`/${tab.put}`} key={tab.id}>{tab.ime}</Link>))} 
  
</div>
    )
}

export default nav
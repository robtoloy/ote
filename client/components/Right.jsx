import React from 'react'
import {Link} from 'react-router-dom'

let Right = React.createClass({
  render: function(){
    return (
      <div className="right">
  			<ul className="nav">
  				<li><Link to="/products">Products</Link></li>
  				<li><Link to="/services">Services</Link></li>
  				<li><Link to="/about">About</Link></li>
  				<li><Link to="/contact">Contact</Link></li>
  			</ul>
  		</div>
    )
  }
});
export default Right;

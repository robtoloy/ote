import React from 'react'
import {Link} from 'react-router-dom'

let Logo = React.createClass({
  render: function(){
    return (
      <div className="logo">
  			<Link to="/"><img src="img/logomark.svg" alt="Odds to Ends" /></Link>
  		</div>
    )
  }
});
export default Logo;

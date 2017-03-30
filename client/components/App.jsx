import React from 'react'
import {Switch, Route} from 'react-router-dom'

// Primary Components
import Logo from './Logo.jsx'
import Left from './Left.jsx'
import Right from './Right.jsx'

// Pages
import Content from './Content.jsx'
import Products from './Products.jsx'
import Services from './Services.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'

class App extends React.Component {
  render(){
    return(
      <div id="main">
        <Logo/>
        <Left/>
          <Switch>
            <Route exact path='/' component={Content}/>
            <Route path='/products' component={Products}/>
            <Route path='/services' component={Services}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
          </Switch>
        <Right/>
        <Footer/>
      </div>
    );
  }
}
export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import Deposits from './deposits';
import Loans from './loans';
class ServicesComp extends React.Component {

    constructor() {
        super();
        this.state = {
            showModal: false  // set a value in state to store whether or
            // not to show the Modal
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {  // switch the value of the showModal state
    this.setState({
      showModal: !this.state.showModal
    });
  }
  getComponent() {
    if (this.state.showModal) {  // show the modal if state showModal is true
      return (<Deposits/>);
    } else {
      return null;
    }
  }
    render() {
        console.log('in services')
        return (
             <Router>
             <div align="left">
               <Link to={'/deposits'}>Deposits</Link> |
                <Link to={'/loans'}>Loans</Link> |
                 <Switch>
                        <Route exact path='/deposits' component={Deposits} />
                         <Route exact path='/loans' component={Loans} />
                       
                    </Switch>
             
                </div>
              </Router>
        )
    }
}
export default ServicesComp;





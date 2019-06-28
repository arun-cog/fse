import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import AboutUsComp from './routing/aboutUs';
import ServicesComp from './routing/service';
import ContactUsComp from './routing/contactUs';
import HomeComp from './routing/home';
import Deposits from './routing/deposits'

class RoutingComp extends React.Component {

    render() {

        return (
            <Router>
                <div align="center">
                    <h1> Welcome to Alpha Bank</h1>
                    <div align="right">
                    <Link to={'/'}>Home</Link> |
                    <Link to={'/service'}>Services</Link> |

                </div>
                    <Switch>
                        <Route exact path='/' component={HomeComp} />
                        <Route exact path='/service' component={ServicesComp} />
                    </Switch>

                </div>
            </Router>
        )
    }
}
export default RoutingComp;
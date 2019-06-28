import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
class Deposits extends React.Component {
    render() {
        console.log('in deposits ')
        return (
            <div align="center">
                <Router>
                    <Link to={'/fd'}>FD          </Link>
                    <Link to={'/rd'}>RD</Link>
                    <Switch>
                        <Route exact path='/fd' component={FD} />
                        <Route exact path='/rd' component={RD} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
export default Deposits;

class FD extends React.Component {
    constructor() {
        super();
        this.state = {
            amount: 0,
            year: 0,
            roi: 0,
            maturity: 0
        }

        this.cal = this.cal.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.updateYear = this.updateYear.bind(this);
        this.clearData = this.clearData.bind(this);
    }
    updateAmount(e) {
        this.setState({
            amount: Number(e.target.value)
        })
    }
    updateYear(e) {
        this.setState({
            year: Number(e.target.value)
        })
    }
    cal() {
        let x = 0;
        if (this.state.year <= 1) {
            x = 2;
        }
        else if (this.state.year > 1 && this.state.year <= 5) {
            x = 7;
        }
        else {
            x = 10;
        }

        let y = this.state.amount + (this.state.amount * x * this.state.year / 100);

        this.setState({

            roi: x,
            maturity: y
        })
        console.log('roi', this.state.roi);
        console.log('maturity', this.state.maturity);
    }
    clearData() {
        this.setState({
            amount: '',
            year: '',
            roi: '',
            maturity: ''
        })
        ReactDOM.findDOMNode(this.refs.mytxt1).focus();
        ReactDOM.findDOMNode(this.refs.mytxt2).focus();
    }
    render() {
        return (
            <div align="center" >

                <br /><br /><br /><br /><br />

                <input type='number' placeholder="Enter amount" onChange={this.updateAmount} ref="mytxt1" /><br />
                <input type="number" placeholder=" Enter no of year" onChange={this.updateYear} ref="mytxt2" /><br />
                <h3>Return Of Interest: <input readOnly='readonly' placeholder="ROI" value={this.state.roi} />%<br /></h3>
                <h3>Maturity Amount INR<input readOnly='readonly' placeholder="Maturity Amount" value={this.state.maturity} /><br /></h3>
                <button onClick={this.cal}>Calculate</button>
                <button onClick={this.clearData} >Clear</button>

            </div>
        )
    }
}



class RD extends React.Component {
    constructor() {
        super();
        this.state = {
            amount: 0,
            year: 0,
            roi: 0,
            maturity: 0
        }

        this.cal = this.cal.bind(this);
        this.updateAmount = this.updateAmount.bind(this);
        this.updateYear = this.updateYear.bind(this);
        this.clearData = this.clearData.bind(this);
    }
    updateAmount(e) {
        this.setState({
            amount: Number(e.target.value)
        })
    }
    updateYear(e) {
        this.setState({
            year: Number(e.target.value)
        })
    }
    cal() {
        let x = 0;
        if (this.state.year <= 1) {
            x = 2;
        }
        else if (this.state.year > 1 && this.state.year <= 5) {
            x = 7;
        }
        else {
            x = 10;
        }

        let y = this.state.amount + (this.state.amount * x * this.state.year / 100);

        this.setState({

            roi: x,
            maturity: y
        })
        console.log('roi', this.state.roi);
        console.log('maturity', this.state.maturity);
    }
    clearData() {
        this.setState({
            amount: '',
            year: '',
            roi: '',
            maturity: ''
        })
        ReactDOM.findDOMNode(this.refs.mytxt1).focus();
        ReactDOM.findDOMNode(this.refs.mytxt2).focus();
    }
    render() {
        return (
            <div align="center" >

                <br /><br /><br /><br /><br />

                <input type='number' placeholder="Enter amount per month" onChange={this.updateAmount} ref="mytxt1" /><br />
                <input type="number" placeholder=" Enter no of year" onChange={this.updateYear} ref="mytxt2" /><br />
                <h3>Return Of Interest: <input readOnly='readonly' placeholder="ROI" value={this.state.roi} />%<br /></h3>
                <h3>Maturity Amount INR<input readOnly='readonly' placeholder="Maturity Amount" value={this.state.maturity} /><br /></h3>
                <button onClick={this.cal}>Calculate</button>
                <button onClick={this.clearData} >Clear</button>

            </div>
        )
    }
}
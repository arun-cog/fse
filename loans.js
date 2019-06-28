import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

class Loans extends React.Component{

    constructor() {
        super();
        this.state = {
            loanAmmt: 0,
            year: 0,
            roi: 0,
            emi: 0
        }

    }

    updateROI(){
        
    }
        render() {
        console.log('in loans ')
        return (
           <div align="center" >

                <br /><br /><br /><br /><br />

                <form>
                  <input type='number' placeholder="Enter Loan amount" /><br />
                  <input type="number" placeholder=" Enter no of year" /><br />
                    Loan Type:<select onchange= {updateROI(this)}>
                         <option value="homeLoan">Home Loan</option>
                         <option value="personalLoan">Personal Loan</option>
                         <option value="carLoan">car Loan</option>
                </select>
                 <h3>Return Of Interest: <input readOnly='readonly' placeholder="ROI" />%<br /></h3>
               <h3>EMI Amount<input readOnly='readonly' placeholder="EMI Amount"/><br /></h3>
               
                <button>Calculate</button>
                <button >Clear</button>
                </form>
                
              
                
              

            </div>
        )
    }
}
export default Loans
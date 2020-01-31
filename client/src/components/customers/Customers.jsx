import React, {Component} from 'react';
import './Customers.css';

class Customers extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        }
    }
    async componentDidMount() {
        const jsonResult = await fetch('/api/customers');
        const customers = await jsonResult.json();
        console.log('customer feteched', customers);
        this.setState({customers});
    }

    render() {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {this.state.customers.map(customer =>
                        <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
                    )}
                </ul>

            </div>
        );
    }
}

export default Customers;

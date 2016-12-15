import React from 'react';
import logo from '../../logo.svg';
import './Orders.css'
import {order1} from './orderslist.js'
import {order2} from './orderslist.js'
import {order3} from './orderslist.js'
import {order4} from './orderslist.js'

var array = [order1, order2, order3, order4];

export default class Orders extends React.Component {
	constructor(props){
		super(props);	
		this.ifactive = this.ifactive.bind(this);
		this.order = this.order.bind(this);
	}
ifactive(parameters) {
		if(parameters) {
				return(<td className="Active">active</td>);
			} else {
				return(<td className="NonActive">non-active</td>);
			}
};

 order(param) {
		return(
				<tr>
	        			<td id={param["id"]} className="orderid">{param["id"]}</td>
	        			{this.ifactive(param["state"])}
	        			<td>{param["client_id"]}</td>
	        			<td>{param["driver_id"]}</td>
	        			<td>{param["from"]}</td>
	        			<td>{param["to"]}</td>
	        			<td>{param["price"]}</td>
	        			<td>{param["comment"]}</td>
	        			<td>{param["created_at"]}</td>
	        			<td>{param["updated_at"]}</td>
	        		</tr>
			);
};

	
  render() {
    return (
    	<div className="Orders">
	        <div className="Orders-header">
	          <img src={logo} className="Orders" alt="logo"/>
	          <h2>Welcome to Sloboda taxi</h2>
	        </div>
	        <div>
        	<table className="table table-striped table-hover">
	        	<thead>
	        		<tr>
	        			<th className="orderid">Order ID</th>
	        			<th>State</th>
	        			<th>Client ID</th>
	        			<th>Driver ID</th>
	        			<th>From</th>
	        			<th>To</th>
	        			<th>Price</th>
	        			<th>Comment</th>
	        			<th>Created at</th>
	        			<th>Updated at</th>
	        		</tr>
	        	</thead>
	        	<tbody>
	        		{array.map(this.order)}
	        	</tbody>		
        	</table>
        	</div>
      </div>  
    );
  }
}

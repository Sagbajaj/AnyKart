import {Link} from 'react-router-dom'
import React, { Component } from 'react'
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer"; 
import ApiCustomerService from "../../services/customer/ApiCustomerService";

class OrderHistoryScreen extends Component{

    constructor(props) {
        super(props)
        this.state = {
          orders:[],
      }
        this.getOrdersList = this.getOrdersList.bind(this);
        this.orderDetails = this.orderDetails.bind(this);
        this.orderDetailsAddress = this.orderDetailsAddress.bind(this);
    }
    
    componentDidMount() {
      this.getOrdersList();
    }
    showProfile(){
        this.props.history.push('/customer/myaccount/profile');
    }
    showCategory(){
      this.props.history.push('');
      
  }
  showCart(){
      this.props.history.push('/cart');
      
  }
    editProfile(){
        this.props.history.push('/myaccount/editprofile');
    }
    changePassword(){
        this.props.history.push('/myaccount/change-password');
    }
    showOrderHistory(){
        this.props.history.push('/myaccount/orderhistory');
    }
    showdeliveredOrders(){
        this.props.history.push('/deliveredorderforadmin');
    }
    showSupplier(){
        this.props.history.push('/showsupplier');
    }
    showDeliveryBoy(){
        this.props.history.push('/showdeliveryboy');
    }
    logout(){
        this.props.history.push('/logout');
    }
    getOrdersList() {
        ApiCustomerService.fetchOrdersList(window.localStorage.getItem("user_id"))
        .then((res) => {
            this.setState({orders: res.data.result})
        });
    }

    orderDetails(orderId) {
        window.localStorage.setItem("orderIdForDetails", orderId)
        this.props.history.push('/orderDetailsPage');
    }

    orderDetailsAddress(orderId) {
        window.localStorage.setItem("orderIdForDetails", orderId)
        this.props.history.push('/showorderaddress');
    }

    render() {
    return (
       <div>
           <Navigation/>
            <div className="container">
            <div className="main3">
            <table>
                <td><button className="btn4 btn-success" onClick={() => this.showProfile()}>Profile</button></td>
                <td><button className="btn4 btn-success" onClick={() => this.showCategory}>Category</button></td>
                <td><button className="btn4 btn-success" onClick={() => this.showOrderHistory()}>Order history</button></td>
                <td><button className="btn4 btn-success" onClick={() => this.showCart()}>Cart</button></td>
                <td><button className="btn4 btn-danger" onClick={() => this.logout()}>Logout</button></td>
            </table>
        </div>
        <h2 className="text-center">Orders History</h2>
        <table className="table">
            <thead class="table-dark">
                <tr>
                    <th>Orders Amount</th>
                    <th>Order Date</th>
                    <th>Order Status</th>
                    <th>Delivery Date</th>
                    <th>Address</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                {this.state.orders.map(
                        order =>
                            <tr key={order.id}>
                                <td>{order.totalPrice}</td>
                                <td>{order.orderDate}</td>
                                <td className="nameColor1"><h5>{order.orderDeliveryStatus}</h5></td>
                                <td>{order.deliveryDate}</td>
                                <td><button className="btn4 btn-success" onClick={() => this.orderDetailsAddress(order.id)}>Address</button></td>
                                <td><button className="btn4 btn-success" onClick={() => this.orderDetails(order.id)}>Details</button></td>                        
                            </tr>
                    )
                }
            </tbody>         
        </table>
        
    </div>
       </div>
    );
    }
}
export default OrderHistoryScreen
import "../../App.css"
import React, { Component } from 'react'
import Swal from "sweetalert2";
class LogoutScreen extends Component {

  constructor(props) {
    super(props)
    this.changeStatus = this.changeStatus.bind(this);
}

componentDidMount() {
    this.changeStatus();
  }

changeStatus(st) {
    window.localStorage.removeItem("status");
    window.localStorage.removeItem("category_id");
    window.localStorage.removeItem("category_name");
    window.localStorage.removeItem("user_fname");
    window.localStorage.removeItem("user_lname");
    window.localStorage.removeItem("user_email");
    window.localStorage.removeItem("user_phone");
    window.localStorage.removeItem("user_role");
    window.localStorage.removeItem("user_id");
    window.localStorage.removeItem("msg");
    window.localStorage.removeItem("cart_size");
    window.localStorage.removeItem("product_id");
    window.localStorage.removeItem("searchProductName");
    window.localStorage.removeItem("deliveryBoyId");
    window.localStorage.removeItem("orderId");
    window.localStorage.removeItem("orderIdForDetails");
    window.localStorage.removeItem("total_price");
    window.localStorage.removeItem("add");
    Swal.fire({
      icon: 'success',
      title: 'Logout Successfully',
      showConfirmButton: true,
      confirmButtonText: 'OKAY',
    })
    this.props.history.push('/home');
  } 


    render(){
      return (
        <div>
           <h5>!!! Successfully Logout !!!</h5>
        </div>
        );
    }   
}
export default LogoutScreen